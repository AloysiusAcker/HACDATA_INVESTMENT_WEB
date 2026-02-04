# TAREA: Validación de Contenido Completo

> Verificar que TODO el texto de los archivos MD fuente esté presente en las páginas HTML

---

## 🎯 OBJETIVO

Comparar cada archivo en `/content/*.md` con su correspondiente página en `/src/pages/*.html` para asegurar que:

1. ✅ **Todo el texto narrativo** está presente
2. ✅ **Todas las tablas** fueron convertidas
3. ✅ **Todas las listas** (bullets, numeradas) están incluidas
4. ✅ **Todos los headers** (H2, H3, H4) existen
5. ✅ **Assets en posiciones correctas** según el contenido

---

## 🚨 PROBLEMA DETECTADO

**Página 12 - Plan Financiero**: Solo contiene assets visuales, falta el contenido narrativo del MD.

---

## 📋 PROCESO DE VALIDACIÓN

### Para cada sección, comparar:

| #   | Archivo MD Fuente                      | Página HTML                              |
| --- | -------------------------------------- | ---------------------------------------- |
| 00  | `content/00_indice.md`                 | `src/pages/00_indice.html`               |
| 01  | `content/01_resumen_ejecutivo.md`      | `src/pages/01_resumen_ejecutivo.html`    |
| 02  | `content/02_la_empresa.md`             | `src/pages/02_la_empresa.html`           |
| 03  | `content/03_problema_y_oportunidad.md` | `src/pages/03_problema_oportunidad.html` |
| 04  | `content/04_propuesta_de_valor.md`     | `src/pages/04_propuesta_valor.html`      |
| 05  | `content/05_producto_y_servicios.md`   | `src/pages/05_producto_servicios.html`   |
| 06  | `content/06_modelo_de_negocio.md`      | `src/pages/06_modelo_negocio.html`       |
| 07  | `content/07_mercado_y_competencia.md`  | `src/pages/07_mercado_competencia.html`  |
| 08  | `content/08_go_to_market.md`           | `src/pages/08_go_to_market.html`         |
| 09  | `content/09_operaciones.md`            | `src/pages/09_operaciones.html`          |
| 10  | `content/10_tecnologia.md`             | `src/pages/10_tecnologia.html`           |
| 11  | `content/11_organizacion.md`           | `src/pages/11_organizacion.html`         |
| 12  | `content/12_plan_financiero.md`        | `src/pages/12_plan_financiero.html` ⚠️   |
| 13  | `content/13_riesgos.md`                | `src/pages/13_riesgos.html`              |
| 14  | `content/14_tesis_inversion.md`        | `src/pages/14_tesis_inversion.html`      |
| 15  | `content/15_anexos.md`                 | `src/pages/15_anexos.html`               |

---

## 🔍 CHECKLIST POR PÁGINA

Para cada página, verificar:

### Headers

- [ ] H1 (título de sección) presente
- [ ] Todos los H2 del MD existen en HTML
- [ ] Todos los H3 del MD existen en HTML
- [ ] Todos los H4 del MD existen en HTML

### Contenido

- [ ] Todos los párrafos convertidos
- [ ] Todas las listas bullet (•) convertidas a `<ul><li>`
- [ ] Todas las listas numeradas convertidas a `<ol><li>`
- [ ] Texto en **negrita** convertido a `<strong>`
- [ ] Texto en _cursiva_ convertido a `<em>`

### Tablas

- [ ] Todas las tablas MD convertidas a `<table>`
- [ ] Headers de tabla en `<thead>`
- [ ] Datos en `<tbody>`
- [ ] Clases apropiadas (`.table-wrapper`, `.number` para números)

### Assets

- [ ] Cada `[RECURSO GRÁFICO: RG-XX.X]` tiene su `<div class="viz-card">` correspondiente
- [ ] Asset posicionado DESPUÉS del contenido que referencia

---

## 📐 ESTRUCTURA HTML ESPERADA

```html
<div class="section">
  <div class="section-header">
    <span class="section-number">Sección XX</span>
    <h1>Título de la Sección</h1>
    <p class="lead">Párrafo introductorio...</p>
  </div>

  <div class="content">
    <h2>X.1. Subtítulo del MD</h2>
    <p>Contenido del párrafo...</p>

    <div class="table-wrapper">
      <table>
        ...
      </table>
    </div>

    <!-- Asset después del contenido que referencia -->
    <div class="viz-card">
      <div class="viz-card-header">...</div>
      <div class="viz-card-content">
        <iframe src="..."></iframe>
      </div>
    </div>

    <h2>X.2. Siguiente Subtítulo</h2>
    <p>Más contenido...</p>

    <ul>
      <li>Item de lista</li>
      <li>Otro item</li>
    </ul>
  </div>
</div>
```

---

## 🔧 PROCESO DE CORRECCIÓN

### Paso 1: Identificar páginas incompletas

Comparar longitud y contenido de cada MD vs HTML

### Paso 2: Completar contenido faltante

Para cada página incompleta:

1. Abrir el archivo MD fuente
2. Abrir el archivo HTML correspondiente
3. Agregar el contenido textual faltante
4. Convertir formato MD → HTML
5. Posicionar assets en lugares correctos

### Paso 3: Verificar formato

- Aplicar clases CSS correctas
- Verificar estructura semántica
- Probar visualización

---

## 📄 EJEMPLO: Sección 12 - Plan Financiero

### Headers esperados del MD:

- 12.1. Supuestos Macroeconómicos y Premisas Clave
- 12.2. Modelo de Ingresos
- 12.3. Estructura de Costos
- 12.4. Estado de Resultados Proyectado
- 12.5. Flujo de Caja y Punto de Equilibrio (Breakeven)
- 12.6. Escenarios de Sensibilidad
- 12.7. Unit Economics Proyectados

### Contenido esperado:

- Tablas de supuestos
- Párrafos explicativos
- Listas de items
- Referencias a assets

### Assets a incluir:

- RG-12.1 después de subsección correspondiente
- RG-12.2 después de subsección correspondiente
- etc.

---

## ✅ COMMIT FINAL

```bash
git add .
git commit -m "Complete missing content in all section pages"
git push origin main
```

---

## 📊 RESUMEN DE VALIDACIÓN

Después de completar, crear un checklist:

| Sección | Headers | Párrafos | Tablas | Listas | Assets | Estado     |
| ------- | ------- | -------- | ------ | ------ | ------ | ---------- |
| 00      | ✅      | ✅       | -      | ✅     | -      | OK         |
| 01      | ✅      | ✅       | ✅     | ✅     | ✅     | OK         |
| ...     |         |          |        |        |        |            |
| 12      | ⚠️      | ⚠️       | ⚠️     | ⚠️     | ✅     | INCOMPLETO |
| ...     |         |          |        |        |        |            |
