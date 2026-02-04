# HACDATA Design System - Quick Reference

## Spacing Title-to-Chart (CRÍTICO)

| Tipo de Gráfico | Variable | Valor | Aplicar a |
|-----------------|----------|-------|-----------|
| Bars, Lines simples | `--title-gap-compact` | 16px | RG-06.2, RG-06.4, RG-12.1, RG-12.2, RG-14.1 |
| Treemaps, Pies, Custom | `--title-gap-standard` | 24px | RG-01.4, RG-07.1, RG-14.3, mayoría |
| Radars, Sankeys | `--title-gap-expanded` | 32px | RG-01.3, RG-04.5, RG-07.2, RG-12.5, RG-03.5 |

## Spacing Scale (base 4px)

```
--space-xs:  4px   → micro separaciones
--space-sm:  8px   → elementos compactos
--space-md:  16px  → estándar
--space-lg:  24px  → separación media
--space-xl:  32px  → separación amplia
--space-2xl: 48px  → secciones
```

## Uso en Assets

### Opción 1: Link externo
```html
<link rel="stylesheet" href="../_design-system.css">
```

### Opción 2: Copiar variables :root
```html
<style>
:root {
  --title-gap-expanded: 32px;
  /* ... otras variables necesarias */
}
</style>
```

### Estructura HTML recomendada
```html
<div class="asset-container">
  <div class="asset-header">
    <span class="asset-badge">RG-01.3</span>
    <span class="asset-title">Radar Benchmark Comparativo</span>
  </div>
  <div class="asset-content">
    <span class="chart-section-title">UNIT ECONOMICS DE ÉLITE</span>
    <h2 class="chart-main-title">Benchmark de Desempeño</h2>
    <div class="chart-container--radar">
      <!-- Chart SVG/Canvas aquí -->
    </div>
  </div>
</div>
```

## Assets a Actualizar por Prioridad

### Alta (problemas de spacing reportados)
- [ ] RG-01.3_Radar_Benchmark → usar `--title-gap-expanded`
- [ ] RG-04.5_Moat_Radar
- [ ] RG-07.2_Orchestration_Radar
- [ ] RG-12.5_Scenario_Radar

### Media
- [ ] RG-03.5_Sankey_Bridge
- [ ] Todos los bar charts (RG-06.2, RG-06.4, RG-12.1, RG-12.2)

### Batch (aplicar a todos)
- [ ] Restantes 40+ assets
