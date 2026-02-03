# TAREA: Revisión Completa de Assets Visuales

> Auditoría sistemática de los 66 assets para corregir problemas de visualización

---

## 🎯 OBJETIVO

Revisar **cada asset HTML** en `/src/assets/` para asegurar:

1. ✅ **Colores de texto legibles** (blanco/claro sobre fondo oscuro)
2. ✅ **Líneas y gráficos visibles** (colores claros, no negros)
3. ✅ **Contenido completo** (nada cortado fuera del contenedor)
4. ✅ **Espaciado simétrico** (padding uniforme arriba/abajo/izquierda/derecha)
5. ✅ **Contraste adecuado** entre elementos

---

## 📋 CHECKLIST POR ASSET

Para cada archivo HTML en `/src/assets/XX_*/RG-*.html`:

### 1. TEXTOS

- [ ] Todos los textos deben ser **blancos o claros** (`#FFFFFF`, `#E5E5E0`, `#BFBFBA`)
- [ ] NO usar `#000000` o colores oscuros para texto
- [ ] Labels de ejes/radiales deben ser visibles

### 2. GRÁFICOS (SVG/Canvas)

- [ ] Líneas de grid/radiales: `rgba(255, 255, 255, 0.3)` o más claras
- [ ] Bordes de shapes: `rgba(255, 255, 255, 0.5)` o colores brand
- [ ] NO usar `#000000` o `black` para líneas

### 3. CONTENEDOR

- [ ] Padding simétrico: mismo arriba que abajo, mismo izquierda que derecha
- [ ] Contenido centrado o alineado consistentemente
- [ ] Nada cortado en los bordes

### 4. ESPACIADO

- [ ] Padding recomendado: `16px 20px` o `var(--space-xl) var(--space-2xl)`
- [ ] Margen entre título y contenido: `12-16px`
- [ ] Margen entre contenido y footer: `8-12px`

---

## 🔧 PROCESO DE REVISIÓN

### BLOQUE 01: Resumen Ejecutivo

Revisar en orden:

1. `src/assets/01_resumen_ejecutivo/RG-01.1_BOS_Flywheel.html`
2. `src/assets/01_resumen_ejecutivo/RG-01.2_Hybrid_Moat.html`
3. `src/assets/01_resumen_ejecutivo/RG-01.3_Radar_Benchmark.html`
4. `src/assets/01_resumen_ejecutivo/RG-01.4_SOM_Treemap.html`
5. `src/assets/01_resumen_ejecutivo/RG-01.5_Cash_Inflexion.html`

### BLOQUE 02: La Empresa

1. `src/assets/02_la_empresa/RG-02.1_Cell_Efficiency.html`
2. `src/assets/02_la_empresa/RG-02.2_Timeline_Mastery.html`
3. `src/assets/02_la_empresa/RG-02.3_Mirror_Effect.html`
4. `src/assets/02_la_empresa/RG-02.4_Sovereignty_Vision.html`

### BLOQUE 03: Problema y Oportunidad

1. `src/assets/03_problema_y_oportunidad/RG-03.1_Grieta_Operativa.html`
2. `src/assets/03_problema_y_oportunidad/RG-03.2_Crisis_HUD.html`
3. `src/assets/03_problema_y_oportunidad/RG-03.3_Pain_Inventory.html`
4. `src/assets/03_problema_y_oportunidad/RG-03.4_Market_Size.html`
5. `src/assets/03_problema_y_oportunidad/RG-03.5_Sankey_Bridge.html`

### BLOQUE 04: Propuesta de Valor

1. `src/assets/04_propuesta_de_valor/RG-04.1_Core7_Layers.html`
2. `src/assets/04_propuesta_de_valor/RG-04.2_Modularity_vs_Flow.html`
3. `src/assets/04_propuesta_de_valor/RG-04.3_BPO_Glass_Box.html`
4. `src/assets/04_propuesta_de_valor/RG-04.4_Integrated_Chain.html`
5. `src/assets/04_propuesta_de_valor/RG-04.5_Moat_Radar.html`

### BLOQUE 06: Modelo de Negocio

1. `src/assets/06_modelo_de_negocio/RG-06.1_SaaS_BPO_Synergy.html`
2. `src/assets/06_modelo_de_negocio/RG-06.2_Revenue_Pillars.html`
3. `src/assets/06_modelo_de_negocio/RG-06.3_Maturity_Path.html`
4. `src/assets/06_modelo_de_negocio/RG-06.4_Unit_Economics.html`
5. `src/assets/06_modelo_de_negocio/RG-06.5_Operating_Leverage.html`

### BLOQUE 07: Mercado y Competencia

1. `src/assets/07_mercado_y_competencia/RG-07.1_Identified_Opportunity.html`
2. `src/assets/07_mercado_y_competencia/RG-07.2_Orchestration_Radar.html`
3. `src/assets/07_mercado_y_competencia/RG-07.3_Competitive_Gap.html`
4. `src/assets/07_mercado_y_competencia/RG-07.4_Moats_Fortress.html`
5. `src/assets/07_mercado_y_competencia/RG-07.5_Intelligence_Shift.html`

### BLOQUE 10: Tecnología

1. `src/assets/10_tecnologia/RG-10.1_Semantic_Context.html`
2. `src/assets/10_tecnologia/RG-10.2_Hybrid_Stack.html`
3. `src/assets/10_tecnologia/RG-10.3_AI_MCP_Arch.html`
4. `src/assets/10_tecnologia/RG-10.4_Forensic_Hashing.html`
5. `src/assets/10_tecnologia/RG-10.5_Tech_Frontier.html`

### BLOQUE 11: Organización

1. `src/assets/11_organizacion/RG-11.1_Leadership_Cards.html`
2. `src/assets/11_organizacion/RG-11.2_Squad_Structure.html`
3. `src/assets/11_organizacion/RG-11.3_Professional_Path.html`
4. `src/assets/11_organizacion/RG-11.4_Data_Flywheel.html`
5. `src/assets/11_organizacion/RG-11.5_Institutional_Network.html`

### BLOQUE 12: Plan Financiero

1. `src/assets/12_plan_financiero/RG-12.1_Revenue_Mix.html`
2. `src/assets/12_plan_financiero/RG-12.2_Margin_Expansion.html`
3. `src/assets/12_plan_financiero/RG-12.3_Efficiency_Dashboard.html`
4. `src/assets/12_plan_financiero/RG-12.4_Cash_Curve.html`
5. `src/assets/12_plan_financiero/RG-12.5_Scenario_Radar.html` ⚠️ _Este tiene el radar con textos negros_

### BLOQUE 14: Tesis de Inversión

1. `src/assets/14_tesis_inversion/RG-14.1_Thesis_Trinity.html`
2. `src/assets/14_tesis_inversion/RG-14.2_Use_of_Funds.html`
3. `src/assets/14_tesis_inversion/RG-14.3_Cap_Table.html`
4. `src/assets/14_tesis_inversion/RG-14.4_Exit_Highway.html`

### BLOQUE 15: Anexos

1. `src/assets/15_anexos/RG-15.1_VDR_Structure.html`

---

## 🎨 GUÍA DE COLORES CORRECTOS

### Textos

```css
/* Títulos principales */
color: #ffffff;

/* Subtítulos y labels */
color: #e5e5e0; /* o var(--color-neutral-100) */

/* Texto secundario */
color: #bfbfba; /* o var(--color-neutral-200) */

/* Texto muy sutil */
color: #91918d; /* o var(--color-neutral-250) */
```

### Líneas de Grid/Radiales

```css
/* Grid lines */
stroke: rgba(255, 255, 255, 0.2);

/* Axis lines */
stroke: rgba(255, 255, 255, 0.4);

/* Borders */
stroke: rgba(255, 255, 255, 0.3);
```

### Labels de Ejes (Radar/Charts)

```css
/* Labels en ejes */
fill: #e5e5e0;
font-size: 11px;

/* NO usar: */
fill: #000000; /* ❌ INCORRECTO */
fill: black; /* ❌ INCORRECTO */
```

---

## 📐 TEMPLATE DE ESPACIADO

```css
.container {
  padding: 16px 20px; /* Simétrico */
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
}

h1 {
  margin: 0 0 12px 0;
}

.visualization {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.data-source {
  margin-top: auto;
  padding-top: 8px;
}
```

---

## ✅ COMMIT DESPUÉS DE CADA BLOQUE

```bash
git add .
git commit -m "Fix visual issues in Block XX assets"
git push origin main
```

---

## 🚨 PROBLEMAS ESPECÍFICOS DETECTADOS

### RG-12.5 Radar Chart: Escenarios de Retorno

- **Problema**: Labels de ejes (SAFETY, MRR, MARGIN EFFICIENCY, RETORNO) están en negro
- **Solución**: Cambiar `fill` de los textos a `#E5E5E0`
- **Problema**: Líneas radiales muy oscuras
- **Solución**: Cambiar `stroke` a `rgba(255, 255, 255, 0.3)`

---

## 📊 INSTRUCCIÓN FINAL

Revisa cada asset en orden, abre el archivo HTML, identifica:

1. Cualquier texto con `color: #000` o `fill: black`
2. Cualquier línea con `stroke: #000` o `stroke: black`
3. Contenido que se salga del contenedor
4. Padding desigual

Corrige y haz commit por bloque.
