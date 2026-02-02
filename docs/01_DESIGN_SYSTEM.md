# Design System

> Sistema de diseño basado en Anthropic DS v1.0

## 🎨 1. Paleta de Colores

### 1.1 Brand Colors

```css
--color-brand-orange: #d97757; /* Primary accent */
--color-brand-orange-dark: #cc785c;
--color-brand-orange-warm: #d4a27f;
--color-brand-purple: #9b87f5; /* Secondary accent */
--color-brand-blue: #207fde; /* Links, data viz */
```

### 1.2 Neutral Colors (Dark Theme)

```css
--color-neutral-white: #ffffff;
--color-neutral-black: #000000;
--color-neutral-900: #191919; /* Sidebar bg */
--color-neutral-800: #262625; /* Main bg */
--color-neutral-750: #282624;
--color-neutral-700: #2b2a27; /* Cards */
--color-neutral-600: #34332c;
--color-neutral-500: #40403e;
--color-neutral-400: #52514a; /* Muted elements */
--color-neutral-300: #666663;
--color-neutral-250: #91918d; /* Muted text */
--color-neutral-200: #bfbfba; /* Secondary text */
```

### 1.3 State Colors

```css
--color-state-focus: #61aaf2;
--color-state-error: #bf4d43;
--color-state-success: #4caf50;
```

### 1.4 Alpha/Transparent

```css
--alpha-white-05: rgba(255, 255, 255, 0.05);
--alpha-white-08: rgba(255, 255, 255, 0.08);
--alpha-white-10: rgba(255, 255, 255, 0.1);
--alpha-white-60: rgba(255, 255, 255, 0.6);
```

---

## 📝 2. Tipografía

### 2.1 Font Families

```css
--font-serif: "Merriweather", "Georgia", serif; /* Body, titles */
--font-sans: "Inter", "Helvetica Neue", sans-serif; /* UI elements */
--font-mono: "Fira Code", "SF Mono", monospace; /* Code, numbers */
```

### 2.2 Type Scale

```css
--text-display-xl: 48px; /* Hero titles */
--text-display-lg: 40px; /* Section titles */
--text-heading-lg: 32px; /* H2 */
--text-heading-md: 20px; /* H3 */
--text-body-lg: 16px; /* Body default */
--text-body-md: 15px;
--text-body-sm: 14px; /* UI text */
--text-body-xs: 13px;
--text-caption-lg: 12px; /* Labels */
--text-caption-md: 11px;
--text-caption-sm: 10px; /* Tags */
```

### 2.3 Font Weights

- **300**: Light (body in some contexts)
- **400**: Regular
- **500**: Medium (headings)
- **600**: Semi-bold (emphasis)
- **700**: Bold (important metrics)

---

## 📐 3. Spacing

### 3.1 Spacing Scale

```css
--space-2xs: 2px;
--space-xs: 4px;
--space-sm: 6px;
--space-md: 8px;
--space-lg: 12px;
--space-xl: 16px;
--space-2xl: 20px;
--space-3xl: 24px;
--space-4xl: 32px;
```

### 3.2 Component Padding

```css
--pad-card-lg: 20px 24px;
--pad-section: 40px 60px;
```

---

## 🔲 4. Border Radius

```css
--radius-xs: 2px;
--radius-sm: 4px;
--radius-md: 5px;
--radius-base: 6px; /* Common */
--radius-lg: 8px; /* Buttons */
--radius-xl: 10px; /* Inputs */
--radius-2xl: 12px; /* Cards */
--radius-3xl: 14px;
--radius-full: 32px;
--radius-pill: 24px;
```

---

## 🌓 5. Shadows

```css
--shadow-card: -1px 1px 3px rgba(206, 204, 197, 0.6);
--shadow-popover: 0px 4px 4px rgba(0, 0, 0, 0.25);
--shadow-primary-btn:
  -1px 1px 4px rgba(0, 0, 0, 0.25), inset 0px 1.5px 0px rgba(186, 111, 48, 0.5);
```

---

## 🧩 6. Componentes

### 6.1 Cards

```html
<div class="card">...</div>
<div class="card stat-card">
  <div class="stat-value">$2.6M</div>
  <div class="stat-label">Monto Inversión</div>
</div>
```

### 6.2 Buttons

```html
<button class="btn btn-primary">Primario</button>
<button class="btn btn-secondary">Secundario</button>
```

### 6.3 Tables

```html
<div class="data-table-container">
  <table class="data-table">
    <thead>
      ...
    </thead>
    <tbody>
      ...
    </tbody>
  </table>
</div>
```

### 6.4 Viz Cards (Asset containers)

```html
<div class="viz-card">
  <div class="viz-card-header">
    <span class="viz-card-id">RG-01.1</span>
    <span class="viz-card-title">The BOS Flywheel</span>
  </div>
  <div class="viz-card-content">
    <iframe src="..."></iframe>
  </div>
</div>
```

---

## 📱 7. Breakpoints

```css
/* Mobile first approach */
@media (min-width: 768px) {
  /* Tablet */
}
@media (min-width: 1024px) {
  /* Desktop */
}
@media (min-width: 1200px) {
  /* Large Desktop */
}
@media (min-width: 1440px) {
  /* Wide */
}
```

---

## 🎭 8. Animations

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}
.stagger-1 {
  animation-delay: 0.1s;
}
.stagger-2 {
  animation-delay: 0.2s;
}
/* ... up to stagger-8 */
```
