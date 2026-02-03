# TAREA: Ajustar contenedores de assets y eliminar scrolls

> Los iframes de las viz-cards muestran scrollbars porque el contenido es más alto que el contenedor

---

## PROBLEMA IDENTIFICADO

Los assets HTML tienen contenido que excede la altura del iframe, causando scrollbars visibles.

**Solución**: Aumentar altura de contenedores + ocultar scrollbars

---

## 1. CAMBIOS EN `/src/css/components.css`

### Viz-Card Content (aumentar altura y ocultar scroll)

```css
.viz-card-content {
  background: #262625;
  position: relative;
  min-height: 500px;
  overflow: hidden; /* Ocultar scrollbars */
}

.viz-card-content iframe {
  width: 100%;
  height: 550px; /* Aumentar altura */
  min-height: 500px;
  border: none;
  display: block;
  overflow: hidden;
}
```

---

## 2. CAMBIOS EN `/src/assets/shared/anthropic-base.css`

Este CSS se aplica dentro de cada asset. Modificar para ajustar contenido:

```css
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden; /* Sin scroll interno */
  height: 100%;
}

body {
  background-color: var(--color-neutral-800);
  color: var(--color-neutral-white);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  display: flex;
  flex-direction: column;
}

.container {
  padding: var(--space-lg) var(--space-xl);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Distribuir verticalmente */
  min-height: 100%;
  box-sizing: border-box;
}

/* Reducir padding del título y descripción */
h1 {
  font-size: 1.5rem; /* Más pequeño */
  margin-bottom: var(--space-md);
}

.label {
  font-size: 10px;
  margin-bottom: var(--space-xs);
}

/* Footer de source más compacto */
.data-source {
  font-size: 8px;
  padding: var(--space-xs) 0;
  margin-top: auto;
}

/* Descripción más compacta si existe */
.description,
[class*="description"],
.asset-description {
  font-size: 12px;
  line-height: 1.4;
  padding: var(--space-sm) var(--space-md);
}
```

---

## 3. ALTERNATIVA: Agregar scrolling="no" a todos los iframes

Buscar en todos los archivos de `/src/pages/*.html` y cambiar:

**ANTES:**

```html
<iframe src="../assets/..." title="..." loading="lazy"></iframe>
```

**DESPUÉS:**

```html
<iframe src="../assets/..." title="..." loading="lazy" scrolling="no"></iframe>
```

### Comando para reemplazar en todos los archivos:

```bash
# En cada archivo de /src/pages/
sed -i 's/loading="lazy">/loading="lazy" scrolling="no">/g' src/pages/*.html
```

O manualmente agregar `scrolling="no"` a cada iframe.

---

## 4. AJUSTAR ASSETS INDIVIDUALES QUE SE CORTEN

Si un asset específico sigue cortándose, revisar el archivo HTML del asset y:

1. **Reducir tamaños de fuente** dentro del asset
2. **Reducir altura de SVGs/Canvas** si son visualizaciones
3. **Eliminar padding excesivo** en `.container`
4. **Mover descripción larga** al exterior del iframe (en la página principal)

### Ejemplo de ajuste en un asset específico:

```css
/* Dentro del <style> del asset HTML */
.container {
  padding: 12px 16px; /* Reducir padding */
}

h1 {
  font-size: 1.25rem; /* Título más pequeño */
  margin: 0 0 8px 0;
}

.visualization-container {
  height: 350px; /* Ajustar altura de visualización */
}

.data-source {
  font-size: 8px;
  position: absolute;
  bottom: 4px;
  right: 8px;
}
```

---

## 5. CSS GLOBAL PARA IFRAMES (agregar a components.css)

```css
/* Forzar sin scroll en todos los iframes */
.viz-card-content iframe {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}

.viz-card-content iframe::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}
```

---

## 6. COMMIT

```bash
git add .
git commit -m "Fix viz-card iframe heights and remove scrollbars"
git push origin main
```

---

## RESULTADO ESPERADO

- ✅ Sin scrollbars visibles en los contenedores de assets
- ✅ Visualizaciones completas sin cortes
- ✅ Descripciones y footers visibles
- ✅ Aspecto limpio y profesional
