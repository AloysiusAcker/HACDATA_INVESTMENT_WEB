# HACDATA Design System v1.0

**Fecha de creación:** 2026-02-04
**Archivo fuente:** `src/assets/_design-system.css`

---

## Principios

1. **Consistencia** - Todos los assets deben verse como parte del mismo producto
2. **Escalabilidad** - Un cambio en una variable se propaga a todos los assets
3. **Especificidad por tipo** - Cada tipo de gráfico tiene sus propias reglas de spacing

---

## Sistema de Spacing

### Base: 4px

Todas las medidas de spacing son múltiplos de 4px.

### Escala

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-xs` | 4px | Micro separaciones, padding de badges |
| `--space-sm` | 8px | Elementos compactos, gaps pequeños |
| `--space-md` | 16px | Espaciado estándar |
| `--space-lg` | 24px | Separación media entre secciones |
| `--space-xl` | 32px | Separación amplia |
| `--space-2xl` | 48px | Separación entre secciones mayores |

### Spacing Title-to-Chart (CRÍTICO)

| Token | Valor | Aplicar a |
|-------|-------|-----------|
| `--title-gap-compact` | 16px | Bar charts, line charts simples |
| `--title-gap-standard` | 24px | Treemaps, pies, diagramas custom |
| `--title-gap-expanded` | 32px | Radar charts, sankey diagrams |

**Regla:** Los gráficos que "respiran" hacia afuera (radars, sankeys) necesitan más separación del título.

---

## Tipografía

### Font Families

```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Font Sizes

| Token | Valor | Uso |
|-------|-------|-----|
| `--text-xs` | 10px | Labels pequeños, badges |
| `--text-sm` | 12px | Texto secundario, subtítulos |
| `--text-md` | 14px | Texto base |
| `--text-lg` | 16px | Títulos de sección |
| `--text-xl` | 20px | Títulos importantes |
| `--text-2xl` | 24px | Títulos principales de gráficos |
| `--text-3xl` | 32px | Headers mayores |

### Font Weights

| Token | Valor |
|-------|-------|
| `--weight-normal` | 400 |
| `--weight-medium` | 500 |
| `--weight-semibold` | 600 |
| `--weight-bold` | 700 |

---

## Colores

### Backgrounds (Dark Theme)

| Token | Valor | Uso |
|-------|-------|-----|
| `--bg-primary` | #0a0a0f | Fondo principal de assets |
| `--bg-secondary` | #12121a | Fondo de cards/contenedores |
| `--bg-tertiary` | #1a1a24 | Fondo de elementos elevados |
| `--bg-elevated` | #22222e | Hover states, elementos destacados |
| `--bg-hover` | #2a2a38 | Estados hover |

### Text

| Token | Valor | Uso |
|-------|-------|-----|
| `--text-primary` | #ffffff | Texto principal |
| `--text-secondary` | rgba(255,255,255,0.7) | Texto secundario |
| `--text-tertiary` | rgba(255,255,255,0.5) | Labels, hints |
| `--text-muted` | rgba(255,255,255,0.3) | Texto deshabilitado |

### Accent Colors

| Token | Valor | Uso |
|-------|-------|-----|
| `--accent-cyan` | #00d4ff | Color primario, highlights |
| `--accent-cyan-dim` | rgba(0,212,255,0.6) | Versión atenuada |
| `--accent-purple` | #a855f7 | Color secundario |
| `--accent-purple-dim` | rgba(168,85,247,0.6) | Versión atenuada |
| `--accent-green` | #10b981 | Positivo, éxito |
| `--accent-yellow` | #f59e0b | Advertencia, atención |
| `--accent-red` | #ef4444 | Error, negativo |

### Borders

| Token | Valor |
|-------|-------|
| `--border-subtle` | rgba(255,255,255,0.06) |
| `--border-default` | rgba(255,255,255,0.1) |
| `--border-strong` | rgba(255,255,255,0.2) |

---

## Configuración por Tipo de Gráfico

### Radar Charts

```css
--radar-container-padding: 32px;
--radar-title-gap: var(--title-gap-expanded);  /* 32px */
--radar-min-height: 300px;
```

**Estructura:**
```
[Header: 50px]
[Title gap: 32px]
[Chart: flex-1, centrado vertical y horizontal]
```

### Bar Charts

```css
--bar-container-padding: 24px;
--bar-title-gap: var(--title-gap-compact);  /* 16px */
--bar-gap: 8px;
```

### Treemaps

```css
--treemap-container-padding: 24px;
--treemap-title-gap: var(--title-gap-standard);  /* 24px */
--treemap-cell-gap: 2px;
```

### Sankey Diagrams

```css
--sankey-container-padding: 32px;
--sankey-title-gap: var(--title-gap-expanded);  /* 32px */
```

### Pie Charts

```css
--pie-container-padding: 24px;
--pie-title-gap: var(--title-gap-standard);  /* 24px */
```

---

## Animación

### Duraciones

| Token | Valor | Uso |
|-------|-------|-----|
| `--duration-fast` | 150ms | Micro interacciones |
| `--duration-normal` | 300ms | Transiciones estándar |
| `--duration-slow` | 500ms | Animaciones de entrada |
| `--duration-slower` | 800ms | Animaciones complejas |

### Easing

| Token | Valor | Uso |
|-------|-------|-----|
| `--ease-default` | cubic-bezier(0.4, 0, 0.2, 1) | Uso general |
| `--ease-in` | cubic-bezier(0.4, 0, 1, 1) | Elementos que salen |
| `--ease-out` | cubic-bezier(0, 0, 0.2, 1) | Elementos que entran |
| `--ease-bounce` | cubic-bezier(0.68, -0.55, 0.265, 1.55) | Efecto rebote |

---

## Border Radius

| Token | Valor |
|-------|-------|
| `--radius-sm` | 4px |
| `--radius-md` | 8px |
| `--radius-lg` | 12px |
| `--radius-xl` | 16px |
| `--radius-full` | 9999px |

---

## Shadows

| Token | Valor |
|-------|-------|
| `--shadow-sm` | 0 1px 2px rgba(0,0,0,0.3) |
| `--shadow-md` | 0 4px 6px rgba(0,0,0,0.4) |
| `--shadow-lg` | 0 10px 15px rgba(0,0,0,0.5) |
| `--shadow-glow-cyan` | 0 0 20px rgba(0,212,255,0.3) |
| `--shadow-glow-purple` | 0 0 20px rgba(168,85,247,0.3) |

---

## Implementación en Assets

### Opción 1: Link externo (recomendado para desarrollo)

```html
<link rel="stylesheet" href="../_design-system.css">
```

### Opción 2: Variables inline (recomendado para producción)

Copiar solo las variables necesarias en el `<style>` del asset:

```html
<style>
:root {
  --title-gap-expanded: 32px;
  --space-md: 16px;
  --bg-primary: #0a0a0f;
  --text-primary: #ffffff;
  /* ... */
}
</style>
```

---

## Estructura HTML Recomendada

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=848">
  <title>RG-XX.X - Asset Name</title>
  <style>
    /* Variables del design system */
    :root { ... }

    /* Estilos del asset */
    .asset-container { ... }
  </style>
</head>
<body>
  <div class="asset-container">
    <!-- Header con badge y título del asset -->
    <div class="asset-header">
      <span class="asset-badge">RG-XX.X</span>
      <span class="asset-title">Nombre del Asset</span>
      <button class="expand-btn">EXPANDIR</button>
    </div>

    <!-- Contenido principal -->
    <div class="asset-content">
      <!-- Subtítulo de sección -->
      <span class="chart-section-title">CATEGORÍA</span>

      <!-- Título principal del gráfico -->
      <h2 class="chart-main-title">Título del Gráfico</h2>

      <!-- Contenedor del gráfico con clase específica por tipo -->
      <div class="chart-container--radar">
        <!-- SVG / Canvas / HTML del gráfico -->
      </div>
    </div>
  </div>
</body>
</html>
```

---

## Clases Utility Disponibles

| Clase | Descripción |
|-------|-------------|
| `.asset-container` | Contenedor principal del asset |
| `.asset-header` | Header con badge y título |
| `.asset-badge` | Badge de identificación (RG-XX.X) |
| `.asset-title` | Título en el header |
| `.asset-content` | Contenedor del contenido |
| `.chart-section-title` | Subtítulo de sección (uppercase) |
| `.chart-main-title` | Título principal del gráfico |
| `.chart-container--radar` | Contenedor para radar charts |
| `.chart-container--bar` | Contenedor para bar charts |
| `.chart-container--treemap` | Contenedor para treemaps |
| `.chart-container--sankey` | Contenedor para sankey |
| `.chart-container--pie` | Contenedor para pie charts |
| `.chart-container--custom` | Contenedor para diagramas custom |
