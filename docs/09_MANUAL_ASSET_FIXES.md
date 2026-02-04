# Correcciones Manuales de Assets

> Lista de correcciones específicas por asset

---

## 📋 Assets a Corregir

| #   | ID      | Título                      | Corrección                                    | Estado       |
| --- | ------- | --------------------------- | --------------------------------------------- | ------------ |
| 1   | RG-01.2 | The Hybrid Moat             | Todos los textos → blanco (#FFFFFF)           | ⏳ Pendiente |
| 2   | RG-01.3 | Radar Benchmark Comparativo | Centrar gráfico radial + textos → blanco      | ⏳ Pendiente |
| 3   | RG-01.4 | SOM CCL Treemap             | Texto "Mercado Objetivo (SOM CCL)" → blanco   | ⏳ Pendiente |
| 4   | RG-01.5 | Cash Inflexion Chart        | Todos los textos/números del gráfico → blanco | ⏳ Pendiente |

---

## Detalles por Asset

### 1. RG-01.2 - The Hybrid Moat

**Archivo**: `src/assets/01_resumen_ejecutivo/RG-01.2_Hybrid_Moat.html`

**Corrección**:

- Cambiar TODOS los textos del asset a color blanco (#FFFFFF)
- Incluye: títulos, labels, descripciones, cualquier texto visible

**CSS a aplicar**:

```css
/* Forzar todos los textos a blanco */
h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
div,
label,
text,
.label,
.title,
.description,
[class*="text"],
[class*="label"] {
  color: #ffffff !important;
  fill: #ffffff !important;
}
```

**Estado**: ⏳ Pendiente

---

### 2. RG-01.3 - Radar Benchmark Comparativo

**Archivo**: `src/assets/01_resumen_ejecutivo/RG-01.3_Radar_Benchmark.html`

**Correcciones**:

1. Centrar el gráfico radial en el centro de la tarjeta
2. Cambiar TODOS los textos a color blanco (#FFFFFF)

**CSS a aplicar**:

```css
/* Centrar el gráfico */
.radar-container,
.chart-container,
svg {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

/* Textos a blanco */
text,
.label,
span,
p {
  fill: #ffffff !important;
  color: #ffffff !important;
}
```

**Estado**: ⏳ Pendiente

---

### 3. RG-01.4 - SOM CCL Treemap

**Archivo**: `src/assets/01_resumen_ejecutivo/RG-01.4_SOM_Treemap.html`

**Corrección**:

- Cambiar el texto "Mercado Objetivo (SOM CCL)" a color blanco (#FFFFFF)

**CSS a aplicar**:

```css
h1,
.title,
.main-title {
  color: #ffffff !important;
}
```

**Estado**: ⏳ Pendiente

---

### 4. RG-01.5 - Cash Inflexion Chart

**Archivo**: `src/assets/01_resumen_ejecutivo/RG-01.5_Cash_Inflexion.html`

**Corrección**:

- Cambiar TODOS los textos y números del gráfico a color blanco (#FFFFFF)
- Incluye: labels de ejes, valores numéricos, leyendas

**CSS a aplicar**:

```css
/* Textos y números del gráfico */
text,
.tick,
.label,
.value,
.axis-label,
.legend text,
.tooltip {
  fill: #ffffff !important;
  color: #ffffff !important;
}
```

**Estado**: ⏳ Pendiente

---

_Agregando más assets conforme se identifican..._
