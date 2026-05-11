// Egg Tea brand palette
// Primary Yellow #F5DC00 | Cream #FFFBEF | Matcha #A7C46C
// Milk Tea Brown #B97A45 | Text #1F1B1B | Soft Neutral #EFE7D2
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // ── PRIMARY (Golden Yellow — brand #F5DC00 dimmed for comfort) ──
        "primary": "#E8C534",
        "on-primary": "#1F1B1B",
        "primary-container": "#F4DC7A",
        "on-primary-container": "#1F1B1B",
        "primary-fixed": "#FBE9A8",
        "on-primary-fixed": "#1F1B1B",
        "primary-fixed-dim": "#F4DC7A",
        "on-primary-fixed-variant": "#5C4F1A",

        // ── SECONDARY (Matcha Green) ─────────────────────────────
        "secondary": "#A7C46C",
        "on-secondary": "#1F1B1B",
        "secondary-container": "#D5E8B5",
        "on-secondary-container": "#3A5A1A",
        "secondary-fixed": "#D5E8B5",
        "on-secondary-fixed": "#1F2D08",
        "secondary-fixed-dim": "#A7C46C",
        "on-secondary-fixed-variant": "#3A5A1A",

        // ── TERTIARY (Milk Tea Brown) ────────────────────────────
        "tertiary": "#B97A45",
        "on-tertiary": "#FFFFFF",
        "tertiary-container": "#E8C9A8",
        "on-tertiary-container": "#3D2410",
        "tertiary-fixed": "#E8C9A8",
        "on-tertiary-fixed": "#3D2410",
        "tertiary-fixed-dim": "#B97A45",
        "on-tertiary-fixed-variant": "#6B4423",

        // ── SURFACE (Cream + neutrals) ───────────────────────────
        "background": "#FFFBEF",
        "on-background": "#1F1B1B",
        "surface": "#FFFBEF",
        "on-surface": "#1F1B1B",
        "on-surface-variant": "#5C544D",
        "surface-bright": "#FFFFFF",
        "surface-dim": "#F0EAD8",
        "surface-variant": "#EFE7D2",
        "surface-container-lowest": "#FFFFFF",
        "surface-container-low": "#FAF6E5",
        "surface-container": "#F5EFD8",
        "surface-container-high": "#EFE7D2",
        "surface-container-highest": "#E7DEC4",
        "surface-tint": "#E8C534",

        // ── OUTLINE / DIVIDER ────────────────────────────────────
        "outline": "#9C9281",
        "outline-variant": "#EFE7D2",

        // ── ERROR ────────────────────────────────────────────────
        "error": "#ba1a1a",
        "on-error": "#FFFFFF",
        "error-container": "#FFDAD6",
        "on-error-container": "#93000A",

        // ── INVERSE (dark sections) ──────────────────────────────
        "inverse-surface": "#1F1B1B",
        "inverse-on-surface": "#FFFBEF",
        "inverse-primary": "#E8C534"
      },
      borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" },
      spacing: { xs: "8px", xl: "80px", lg: "48px", sm: "16px", margin: "24px", gutter: "20px", md: "24px", base: "4px" },
      fontFamily: {
        "headline-md": ["Be Vietnam Pro"],
        "display-lg": ["Be Vietnam Pro"],
        "headline-lg": ["Be Vietnam Pro"],
        "label-sm": ["Be Vietnam Pro"],
        "body-md": ["Be Vietnam Pro"],
        "body-lg": ["Be Vietnam Pro"]
      },
      fontSize: {
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "700" }],
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        "headline-lg": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "label-sm": ["12px", { lineHeight: "1.4", letterSpacing: "0.05em", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }]
      }
    }
  }
};
