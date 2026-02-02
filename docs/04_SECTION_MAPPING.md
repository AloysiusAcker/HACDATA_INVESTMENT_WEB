# Section Mapping

> Mapeo detallado: Sección → Contenido → Assets Visuales

## 📋 Cómo Leer Este Documento

Cada sección del Investment Memorandum tiene:

1. **Contenido narrativo** (archivo Markdown en `/content/`)
2. **Assets visuales** (archivos HTML en `/assets/{sección}/`)

Este documento indica **dónde debe insertarse cada asset** dentro del flujo narrativo del contenido.

---

## 01. Resumen Ejecutivo

**Archivo Contenido**: `content/01_resumen_ejecutivo.md`  
**Carpeta Assets**: `assets/01_resumen_ejecutivo/`

| Subsección | Título                    | Asset ID | Asset File                     | Posición                            |
| ---------- | ------------------------- | -------- | ------------------------------ | ----------------------------------- |
| 1.1        | Propuesta de Valor: BOS   | RG-01.1  | `RG-01.1_BOS_Flywheel.html`    | Después de la tabla de componentes  |
| 1.2        | El Diagnóstico            | -        | -                              | Sin asset                           |
| 1.3        | La Solución               | RG-01.2  | `RG-01.2_Hybrid_Moat.html`     | Después de la lista de convergencia |
| 1.4        | Tracción y Unit Economics | RG-01.3  | `RG-01.3_Radar_Benchmark.html` | Después de la tabla de métricas     |
| 1.5        | El Foso Tecnológico       | -        | -                              | Sin asset                           |
| 1.6        | Mercado Objetivo (SOM)    | RG-01.4  | `RG-01.4_SOM_Treemap.html`     | Después de la tabla de segmentos    |
| 1.7        | Ronda Semilla             | -        | -                              | Sin asset                           |
| 1.8        | Hitos de Valor            | RG-01.5  | `RG-01.5_Cash_Inflexion.html`  | Después de la tabla de proyecciones |

---

## 02. La Empresa

**Archivo Contenido**: `content/02_la_empresa.md`  
**Carpeta Assets**: `assets/02_la_empresa/`

| Subsección | Título              | Asset ID | Asset File                        | Posición                         |
| ---------- | ------------------- | -------- | --------------------------------- | -------------------------------- |
| 2.1        | Historia y Contexto | RG-02.1  | `RG-02.1_Timeline.html`           | Después del párrafo de evolución |
| 2.2        | HACDATA Hoy         | RG-02.2  | `RG-02.2_Traction_Metrics.html`   | Después de métricas clave        |
| 2.3        | Cartera de Clientes | RG-02.3  | `RG-02.3_Client_Portfolio.html`   | Después de la tabla de clientes  |
| 2.4        | Visión Soberanía    | RG-02.4  | `RG-02.4_Sovereignty_Vision.html` | Al final de la sección           |

---

## 03. Problema y Oportunidad

**Archivo Contenido**: `content/03_problema_y_oportunidad.md`  
**Carpeta Assets**: `assets/03_problema_y_oportunidad/`

| Subsección | Título                     | Asset ID | Asset File                        | Posición                       |
| ---------- | -------------------------- | -------- | --------------------------------- | ------------------------------ |
| 3.1.1      | El Impuesto a la Intuición | RG-03.1  | `RG-03.1_Intuition_Tax.html`      | Después de la tabla de impacto |
| 3.1.2      | Brecha de Digitalización   | RG-03.2  | `RG-03.2_Digital_Gap.html`        | Después del análisis           |
| 3.1.3      | Inventario de Dolores      | RG-03.3  | `RG-03.3_Pain_Inventory.html`     | Después de la lista de pains   |
| 3.2        | Ventana de Oportunidad     | RG-03.4  | `RG-03.4_Opportunity_Window.html` | Después del contexto           |
| 3.3        | Market Readiness           | RG-03.5  | `RG-03.5_Market_Readiness.html`   | Al final                       |

---

## 04. Propuesta de Valor

**Archivo Contenido**: `content/04_propuesta_de_valor.md`  
**Carpeta Assets**: `assets/04_propuesta_de_valor/`

| Subsección | Título                        | Asset ID | Asset File                            | Posición                     |
| ---------- | ----------------------------- | -------- | ------------------------------------- | ---------------------------- |
| 4.1        | Sistema Operativo de Negocios | RG-04.1  | `RG-04.1_Value_Stack.html`            | Después de definición BOS    |
| 4.2        | Arquitectura CORE7            | RG-04.2  | `RG-04.2_CORE7_Architecture.html`     | Después de la tabla de capas |
| 4.3        | Comparación Before/After      | RG-04.3  | `RG-04.3_Before_After.html`           | Después del contraste        |
| 4.4        | ROI Empresarial               | RG-04.4  | `RG-04.4_ROI_Calculator.html`         | Después de beneficios        |
| 4.5        | Diferenciación                | RG-04.5  | `RG-04.5_Differentiation_Matrix.html` | Al final                     |

---

## 05. Producto y Servicios

**Archivo Contenido**: `content/05_producto_y_servicios.md`  
**Carpeta Assets**: `assets/05_producto_y_servicios/`

| Subsección | Título                 | Asset ID | Asset File                        | Posición                 |
| ---------- | ---------------------- | -------- | --------------------------------- | ------------------------ |
| 5.1        | Plataforma GESTOR      | RG-05.1  | `RG-05.1_GESTOR_Platform.html`    | Después de descripción   |
| 5.2        | Servicios LOGISTIX     | RG-05.2  | `RG-05.2_LOGISTIX_Services.html`  | Después de servicios BPO |
| 5.3        | Catálogo de Productos  | RG-05.3  | `RG-05.3_Product_Catalog.html`    | Después de pricing       |
| 5.4        | Integración de Módulos | RG-05.4  | `RG-05.4_Module_Integration.html` | Después de arquitectura  |
| 5.5        | Feature Matrix         | RG-05.5  | `RG-05.5_Feature_Matrix.html`     | Al final                 |

---

## 06. Modelo de Negocio

**Archivo Contenido**: `content/06_modelo_de_negocio.md`  
**Carpeta Assets**: `assets/06_modelo_de_negocio/`

| Subsección | Título            | Asset ID | Asset File                       | Posición            |
| ---------- | ----------------- | -------- | -------------------------------- | ------------------- |
| 6.1        | Revenue Streams   | RG-06.1  | `RG-06.1_Revenue_Streams.html`   | Después de fuentes  |
| 6.2        | Pricing Structure | RG-06.2  | `RG-06.2_Pricing_Structure.html` | Después de tiers    |
| 6.3        | Unit Economics    | RG-06.3  | `RG-06.3_Unit_Economics.html`    | Después de métricas |
| 6.4        | Business Canvas   | RG-06.4  | `RG-06.4_Business_Canvas.html`   | Sección dedicada    |
| 6.5        | Value Chain       | RG-06.5  | `RG-06.5_Value_Chain.html`       | Al final            |

---

## 07. Mercado y Competencia

**Archivo Contenido**: `content/07_mercado_y_competencia.md`  
**Carpeta Assets**: `assets/07_mercado_y_competencia/`

| Subsección | Título                  | Asset ID | Asset File                       | Posición                |
| ---------- | ----------------------- | -------- | -------------------------------- | ----------------------- |
| 7.1        | TAM SAM SOM             | RG-07.1  | `RG-07.1_TAM_SAM_SOM.html`       | Después de definiciones |
| 7.2        | Segmentación CCL        | RG-07.2  | `RG-07.2_CCL_Segmentation.html`  | Después de tabla        |
| 7.3        | Análisis Competitivo    | RG-07.3  | `RG-07.3_Competitive_Radar.html` | Después de comparación  |
| 7.4        | Mapa de Posicionamiento | RG-07.4  | `RG-07.4_Positioning_Map.html`   | Después de estrategia   |
| 7.5        | Dinámicas de Mercado    | RG-07.5  | `RG-07.5_Market_Dynamics.html`   | Al final                |

---

## 08-15. Secciones Restantes

> El patrón continúa de manera similar para las secciones 08-15.
>
> **Regla general**: Cada asset se posiciona **inmediatamente después** de la subsección narrativa que complementa.

---

## 📐 Patrones de Integración

### Layout Recomendado

**Opción A: Asset Full-Width**

```
┌────────────────────────────────┐
│ Título de Subsección           │
├────────────────────────────────┤
│ Contenido narrativo...         │
│ Tablas, listas, párrafos       │
├────────────────────────────────┤
│ ┌────────────────────────────┐ │
│ │      ASSET VISUAL          │ │
│ │      (iframe)              │ │
│ └────────────────────────────┘ │
└────────────────────────────────┘
```

**Opción B: Layout 2 Columnas**

```
┌────────────────┬───────────────┐
│ Contenido      │ Asset Visual  │
│ narrativo...   │ (iframe)      │
│                │               │
└────────────────┴───────────────┘
```

### Clases CSS Sugeridas

- `.viz-full` - Asset a ancho completo
- `.content-row` - Layout 2 columnas
- `.viz-card` - Tarjeta con header y contenedor
