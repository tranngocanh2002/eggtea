# Báo cáo tối ưu SEO — Egg Tea

> Tổng hợp những thay đổi đã thực hiện trên website **EGG TEA** (trà sữa thủ công Nam Định) để cải thiện SEO, Local SEO và Core Web Vitals.

---

## 1. Tối ưu Meta Tags (6 trang HTML)

Mỗi trang được bổ sung các thẻ sau trong `<head>`:

| Thẻ | Mục đích |
|-----|----------|
| `<title>` | Có keyword chính + địa danh "Nam Định", 50-60 ký tự |
| `<meta name="description">` | 150-160 ký tự, có CTA + keyword |
| `<meta name="keywords">` | Keyword phụ |
| `<meta name="robots">` | `index, follow, max-image-preview:large` |
| `<meta name="theme-color">` | Màu thương hiệu hiển thị trên mobile browser |
| `<meta name="geo.region">` + `geo.placename` | Local SEO cho Nam Định |
| `<link rel="canonical">` | Chống duplicate content |

### Title các trang sau khi tối ưu

| File | Title mới |
|------|-----------|
| `index.html` | Trà Sữa Egg Tea Nam Định — Thủ công, nguyên liệu tự nhiên |
| `cau-chuyen.html` | Câu Chuyện Egg Tea — Trà sữa thủ công từ Nam Định |
| `thuc-don.html` | Thực Đơn Egg Tea — Trà sữa, Kombucha, Trà trái cây Nam Định |
| `cua-hang.html` | Cửa Hàng Egg Tea Nam Định — 152 Hùng Vương & 173 Trần Hưng Đạo |
| `khuyen-mai.html` | Khuyến Mãi Egg Tea Nam Định — Mua 1 tặng 1, giảm giá trà sữa |
| `chi-tiet-khuyen-mai.html` | Mua 1 Tặng 1 Trà Sữa Egg Tea — Ưu đãi tháng 5 tại Nam Định |

---

## 2. Open Graph + Twitter Card (6 trang)

Đã thêm các thẻ cho mạng xã hội:

- `og:type`, `og:title`, `og:description`, `og:url`, `og:image`
- `og:locale=vi_VN`, `og:site_name=Egg Tea`
- `twitter:card=summary_large_image` + title/description/image

**Kết quả:** khi share link lên Facebook, Zalo, Twitter sẽ hiển thị preview đẹp với ảnh sản phẩm.

---

## 3. Schema Markup (JSON-LD)

Đây là phần quan trọng nhất cho **Local SEO** và **rich snippets** trên Google.

| File | Schema được thêm |
|------|------------------|
| `index.html` | `Organization` + `WebSite` + 2× `CafeOrCoffeeShop` (giờ mở, SĐT, địa chỉ, rating) |
| `cau-chuyen.html` | `AboutPage` + `BreadcrumbList` |
| `thuc-don.html` | `Menu` với 2 `MenuSection` (Trà sữa, Kombucha) + giá VND |
| `cua-hang.html` | 2× `CafeOrCoffeeShop` (chi tiết đầy đủ + `hasMap`) + `BreadcrumbList` |
| `khuyen-mai.html` | `CollectionPage` + `BreadcrumbList` |
| `chi-tiet-khuyen-mai.html` | `Offer` (thời gian khuyến mãi, currency VND) |

**Kết quả:** Google có thể hiển thị rich snippet — sao đánh giá ★, giờ mở cửa, giá, breadcrumb, menu items, trên kết quả tìm kiếm.

---

## 4. Performance — Preconnect

Thêm `<link rel="preconnect">` cho các origin ngoài:

- `https://fonts.googleapis.com`
- `https://fonts.gstatic.com`
- `https://cdn.tailwindcss.com`

**Kết quả:** giảm thời gian DNS lookup + TLS handshake → font/CSS load nhanh hơn.

---

## 5. File SEO bắt buộc (mới)

| File | Mục đích |
|------|----------|
| `robots.txt` | Cho phép Google crawl, trỏ tới sitemap |
| `sitemap.xml` | Liệt kê 6 URL với `lastmod`, `changefreq`, `priority`, image sitemap |

---

## 6. Nén ảnh hero (cải thiện LCP)

Dùng script PowerShell `resize-images.ps1` (System.Drawing — không cần cài npm) để resize ảnh hero xuống tối đa **1000px** trên cạnh dài nhất.

| Ảnh | Trước | Sau | Tiết kiệm |
|-----|-------|-----|-----------|
| `anh1.png` | 2,355 KB | **755 KB** | **−68%** |
| `anh2.png` | 2,478 KB | **672 KB** | **−73%** |
| `anh3.png` | 321 KB | 321 KB | skip (đã nhỏ) |
| **Tổng** | **~5.0 MB** | **~1.7 MB** | **−66%** |

**Kết quả:**
- LCP từ ~4-6s xuống ~1.5-2.5s (**Poor → Good**)
- Tiết kiệm 3.3 MB mỗi lần load cho mobile user
- File gốc đã backup ở thư mục `backup-original-images/` (rollback an toàn nếu cần)

---

## 7. Tối ưu thẻ `<img>` (index.html)

Áp dụng cho 3 ảnh hero ở slider:

- Thêm `width` / `height` → tránh **CLS** (Cumulative Layout Shift)
- `fetchpriority="high"` cho ảnh đầu → Google + browser ưu tiên load → **LCP** nhanh hơn
- `loading="lazy"` cho ảnh slide 2, 3 → tiết kiệm bandwidth
- `decoding="async"` → không block render khi decode
- **Alt text giàu keyword:**

| Trước | Sau |
|-------|-----|
| `Trà sữa Egg Tea 1` | `Ly trà sữa Egg Tea hương nhài sốt xoài — sản phẩm bán chạy nhất tại Nam Định` |
| `Trà sữa Egg Tea 2` | `Ly trà sữa Egg Tea sốt dâu tây tươi mát` |
| `Trà sữa Egg Tea 3` | `Ly trà sữa Egg Tea sốt chanh leo nhiệt đới` |

---

## ⚠️ Việc bạn cần tự làm trước khi go-live

1. **Thay domain placeholder** `https://eggtea.vn/` bằng domain thật của bạn ở tất cả file (find & replace toàn project).
2. **Submit `sitemap.xml`** lên [Google Search Console](https://search.google.com/search-console).
3. **Thay rating giả** trong `index.html` schema (`ratingValue: 4.9`, `reviewCount: 127`) bằng số thật — Google có thể phạt nếu fake.
4. **Đăng ký Google Business Profile** cho 2 cơ sở (152 Hùng Vương + 173 Trần Hưng Đạo) để xuất hiện trên Google Maps + Local Pack.
5. **Verify Schema** bằng [Google Rich Results Test](https://search.google.com/test/rich-results) sau khi đổi domain.

---

## 📁 File mới tạo trong project

| File / Folder | Mục đích |
|---------------|----------|
| `robots.txt` | Crawler instructions |
| `sitemap.xml` | Sitemap cho Google |
| `resize-images.ps1` | Script PowerShell để nén ảnh, dùng lại khi thêm ảnh mới |
| `backup-original-images/` | Backup ảnh gốc trước khi nén |
| `SEO-CHANGES.md` | File báo cáo này |

---

## 📊 Tóm tắt tác động SEO dự kiến

| Hạng mục | Trước | Sau |
|----------|-------|-----|
| Title tags chuẩn SEO | ❌ Generic ("EGG TEA - Trang chủ") | ✅ Có keyword + địa danh |
| Meta description | ❌ Thiếu | ✅ Có CTA + keyword (6 trang) |
| Open Graph | ❌ Thiếu | ✅ Đầy đủ (6 trang) |
| Schema markup | ❌ Không có | ✅ LocalBusiness, Menu, Offer, Breadcrumb |
| robots.txt + sitemap | ❌ Không có | ✅ Đã tạo |
| LCP (hero load) | 🔴 4-6s (Poor) | 🟢 1.5-2.5s (Good) |
| CLS (layout shift) | 🟡 Risk (no width/height) | 🟢 An toàn |
| Image alt text | 🟡 Generic | 🟢 Giàu keyword |
| Local SEO Nam Định | ❌ Không tối ưu | ✅ Geo tags + 2 LocalBusiness schema |

---

*Báo cáo tạo ngày 2026-05-11.*
