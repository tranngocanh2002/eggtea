Add-Type -AssemblyName System.Drawing

$base = $PSScriptRoot
$maxSide = 1000

$files = @('anh1.png', 'anh2.png', 'anh3.png')

foreach ($f in $files) {
    $path = Join-Path $base $f
    if (-not (Test-Path $path)) { continue }

    $src = [System.Drawing.Image]::FromFile($path)
    $w = $src.Width
    $h = $src.Height

    if ($w -le $maxSide -and $h -le $maxSide) {
        Write-Output "$f : $($w)x$($h) -> skip (already small)"
        $src.Dispose()
        continue
    }

    $ratio = [Math]::Min($maxSide / $w, $maxSide / $h)
    $newW = [int]($w * $ratio)
    $newH = [int]($h * $ratio)

    $dst = New-Object System.Drawing.Bitmap $newW, $newH, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $dst.SetResolution(72, 72)

    $g = [System.Drawing.Graphics]::FromImage($dst)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode     = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode   = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)
    $g.DrawImage($src, 0, 0, $newW, $newH)
    $g.Dispose()
    $src.Dispose()

    $oldSize = (Get-Item $path).Length
    $dst.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    $dst.Dispose()

    $newSize = (Get-Item $path).Length
    $savedPct = [Math]::Round(100 - ($newSize / $oldSize * 100), 1)
    Write-Output "$f : $($w)x$($h) ($([Math]::Round($oldSize/1KB,1))KB) -> $($newW)x$($newH) ($([Math]::Round($newSize/1KB,1))KB), saved $savedPct%"
}
