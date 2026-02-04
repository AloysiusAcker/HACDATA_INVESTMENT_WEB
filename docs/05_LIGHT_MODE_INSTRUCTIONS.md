# TAREA: Cambiar a Light Mode

> Mantener las viz-cards (contenedores de assets) con fondo oscuro para contraste visual

---

## 📋 RESUMEN

| Elemento            | Estilo                     |
| ------------------- | -------------------------- |
| Sidebar             | Light (crema claro)        |
| Main content        | Light (blanco)             |
| Text, tables, cards | Light (texto oscuro)       |
| **VIZ-CARDS**       | **DARK (mantener oscuro)** |

---

## 1. CAMBIOS EN `/src/css/variables.css`

Reemplaza los colores neutrales por estos valores light mode:

```css
/* ========================================
   NEUTRAL COLORS (Light Mode)
   ======================================== */
--color-neutral-white: #ffffff;
--color-neutral-black: #191919;
--color-neutral-900: #f8f7f6; /* Sidebar background - crema claro */
--color-neutral-850: #f4f3f1;
--color-neutral-800: #ffffff; /* Main background - blanco */
--color-neutral-750: #fafafa;
--color-neutral-700: #f2f1ef; /* Card background - gris muy claro */
--color-neutral-650: #eceae8;
--color-neutral-600: #e0dfdc; /* Borders, dividers */
--color-neutral-500: #c8c7c4; /* Muted elements */
--color-neutral-400: #9a9994; /* Labels, placeholders */
--color-neutral-300: #6b6a66; /* Secondary text */
--color-neutral-250: #4d4c48; /* Body text */
--color-neutral-200: #3d3d3a; /* Primary text */
--color-neutral-100: #1a1a18; /* Headings, strong text */
```

---

## 2. CAMBIOS EN `/src/css/base.css`

Actualiza el body y elementos base:

```css
body {
  background-color: var(--color-neutral-800); /* Blanco */
  color: var(--color-neutral-200); /* Texto oscuro */
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--color-neutral-100); /* Headings muy oscuros */
}

p,
li {
  color: var(--color-neutral-250); /* Texto cuerpo oscuro */
}

a {
  color: var(--color-brand-blue);
}

strong {
  color: var(--color-neutral-100);
}
```

---

## 3. CAMBIOS EN `/src/css/layout.css`

### Sidebar (Light)

```css
.sidebar {
  background-color: var(--color-neutral-900); /* Crema claro #F8F7F6 */
  border-right: 1px solid var(--color-neutral-600);
}

.sidebar-header {
  border-bottom: 1px solid var(--color-neutral-600);
}

.logo-icon {
  background: var(--color-brand-orange);
  color: var(--color-neutral-white);
}

.logo-title {
  color: var(--color-neutral-100);
}

.logo-subtitle {
  color: var(--color-neutral-400);
}

.nav-section-title {
  color: var(--color-neutral-400);
}

.nav-link {
  color: var(--color-neutral-300);
}

.nav-link:hover {
  color: var(--color-neutral-100);
  background-color: var(--color-neutral-700);
}

.nav-link.active {
  color: var(--color-neutral-100);
  background-color: var(--color-neutral-700);
  border-left-color: var(--color-brand-orange);
}

.nav-link-number {
  color: var(--color-neutral-400);
}

.sidebar-footer {
  border-top: 1px solid var(--color-neutral-600);
}

.sidebar-footer-text {
  color: var(--color-neutral-400);
}

.sidebar-footer-link {
  color: var(--color-brand-blue);
}
```

### Main Content (Light)

```css
.main {
  background-color: var(--color-neutral-800); /* Blanco */
}

.main-content {
  background-color: var(--color-neutral-800);
}

.section-number {
  color: var(--color-brand-orange);
}

.section-header h1 {
  color: var(--color-neutral-100);
}

.lead {
  color: var(--color-neutral-300);
}
```

---

## 4. CAMBIOS EN `/src/css/components.css`

### Cards (Light)

```css
.card {
  background: var(--color-neutral-white);
  border: 1px solid var(--color-neutral-600);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.stat-card {
  background: linear-gradient(
    135deg,
    var(--color-neutral-white) 0%,
    var(--color-neutral-700) 100%
  );
  border: 1px solid var(--color-neutral-600);
}

.stat-value {
  color: var(--color-neutral-100);
  /* Remover el gradient de texto si existe */
  background: none;
  -webkit-background-clip: unset;
  -webkit-text-fill-color: var(--color-neutral-100);
}

.stat-label {
  color: var(--color-neutral-300);
}
```

### Tables (Light)

```css
.table-wrapper {
  background: var(--color-neutral-white);
  border: 1px solid var(--color-neutral-600);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

table {
  background: var(--color-neutral-white);
}

thead {
  background: var(--color-neutral-700);
}

th {
  color: var(--color-neutral-200);
  border-bottom: 2px solid var(--color-neutral-500);
  font-weight: var(--font-weight-semibold);
}

td {
  color: var(--color-neutral-250);
  border-bottom: 1px solid var(--color-neutral-600);
}

tbody tr:hover {
  background: var(--color-neutral-700);
}

tbody tr.highlight {
  background: rgba(217, 119, 87, 0.1);
}

tbody tr.highlight td {
  color: var(--color-neutral-100);
}
```

### Badges (Light)

```css
.badge {
  background: var(--color-neutral-700);
  color: var(--color-neutral-200);
  border: 1px solid var(--color-neutral-600);
}

.badge-orange {
  background: rgba(217, 119, 87, 0.15);
  color: var(--color-brand-orange);
  border-color: rgba(217, 119, 87, 0.3);
}
```

### Scroll to Top Button

```css
.scroll-to-top {
  background: var(--color-neutral-white);
  color: var(--color-neutral-300);
  border: 1px solid var(--color-neutral-600);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.scroll-to-top:hover {
  background: var(--color-neutral-700);
  color: var(--color-neutral-100);
}
```

---

## 5. VIZ-CARDS (MANTENER OSCURAS) ⚠️ IMPORTANTE

Las viz-cards deben permanecer con fondo oscuro para que las visualizaciones se vean correctamente:

```css
.viz-card {
  background: #262625; /* OSCURO - NO CAMBIAR */
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-2xl);
  overflow: hidden;
}

.viz-card-header {
  background: #191919; /* OSCURO - NO CAMBIAR */
  color: #ffffff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: var(--space-lg) var(--space-xl);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.viz-card-id {
  background: rgba(217, 119, 87, 0.2);
  color: var(--color-brand-orange);
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: var(--text-caption-lg);
  font-weight: var(--font-weight-medium);
}

.viz-card-title {
  color: #ffffff;
  font-family: var(--font-sans);
  font-size: var(--text-body-sm);
  font-weight: var(--font-weight-medium);
  margin-left: var(--space-lg);
  flex: 1;
}

.viz-expand-btn {
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: var(--space-xs) var(--space-lg);
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: var(--text-caption-sm);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.viz-expand-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.4);
}

.viz-card-content {
  background: #262625; /* OSCURO - NO CAMBIAR */
  position: relative;
  min-height: 400px;
}

.viz-card-content iframe {
  width: 100%;
  height: 450px;
  border: none;
  display: block;
}
```

---

## 6. MODAL (Mantener oscuro)

El modal para expandir visualizaciones también debe ser oscuro:

```css
.modal-backdrop {
  background: rgba(0, 0, 0, 0.8);
}

.modal {
  background: #262625;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-header {
  background: #191919;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-title {
  color: #ffffff;
}

.modal-close {
  color: rgba(255, 255, 255, 0.7);
}

.modal-body {
  background: #262625;
}
```

---

## 7. NO MODIFICAR ⛔

Los siguientes archivos **NO deben ser modificados**:

- `/src/assets/**/*.html` - Los assets internos mantienen su estilo oscuro
- `/src/assets/shared/anthropic-base.css` - Este CSS aplica solo a los assets embebidos

---

## 8. COMMIT FINAL

```bash
git add .
git commit -m "Switch to light mode theme (keeping viz-cards dark for contrast)"
git push origin main
```

---

## 9. RESULTADO ESPERADO

| Zona          | Color de Fondo       | Color de Texto        |
| ------------- | -------------------- | --------------------- |
| Sidebar       | #F8F7F6 (crema)      | #1A1A18 (negro)       |
| Main          | #FFFFFF (blanco)     | #3D3D3A (gris oscuro) |
| Cards         | #FFFFFF (blanco)     | #3D3D3A (gris oscuro) |
| Tables        | #FFFFFF (blanco)     | #4D4C48 (gris)        |
| **Viz-Cards** | **#262625 (oscuro)** | **#FFFFFF (blanco)**  |
| **Modal**     | **#262625 (oscuro)** | **#FFFFFF (blanco)**  |
