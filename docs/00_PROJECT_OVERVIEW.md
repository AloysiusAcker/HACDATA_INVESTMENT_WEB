# Project Overview

> HACDATA Investment Memorandum Web Platform

## 🎯 Objetivo

Crear una plataforma web interactiva y premium para presentar el Investment Memorandum de HACDATA a potenciales inversores. La aplicación debe:

1. **Presentar contenido narrativo** de forma estructurada y legible
2. **Integrar visualizaciones interactivas** que complementen la narrativa
3. **Ofrecer navegación fluida** entre las 15 secciones del memorándum
4. **Transmitir profesionalismo** a través de un diseño premium

## 📐 Arquitectura

### Stack Tecnológico

- **Frontend**: Vanilla HTML/CSS/JS (sin frameworks)
- **Visualizaciones**: HTML5 embebido (SVG, Canvas, CSS Animations)
- **Design System**: Anthropic DS v1.0 adaptado
- **Servidor**: Static hosting (GitHub Pages, Vercel, Netlify)

### Flujo de Datos

```
content/*.md → [Parser] → src/pages/*.html → [Loader] → UI
                             ↓
assets/*/*.html ──────────→ [iframe] ──────→ Visualización
```

## 📁 Estructura de Archivos

### `/content/` - Contenido Fuente

Archivos Markdown con el contenido narrativo completo de cada sección.

- Referencias a assets: `[RECURSO GRÁFICO: RG-XX.X - Título]`
- Estructura con headers H2, H3, H4
- Tablas, listas, y texto enriquecido

### `/assets/` - Visualizaciones

Componentes HTML autocontenidos que renderizan gráficos, diagramas, y visualizaciones de datos.

- Cada asset es un archivo HTML independiente
- Usan `anthropic-base.css` como estilos compartidos
- Pueden incluir JS inline para interactividad

### `/docs/` - Documentación

Documentación técnica y de contenido del proyecto.

### `/src/` - Código Web

Aplicación web que integra contenido y assets.

## 🎨 Design System

El sistema de diseño está basado en Anthropic DS v1.0:

### Colores

| Token                  | Valor   | Uso           |
| ---------------------- | ------- | ------------- |
| `--color-brand-orange` | #D97757 | Acentos, CTAs |
| `--color-brand-purple` | #9B87F5 | Secundario    |
| `--color-brand-blue`   | #207FDE | Links, datos  |
| `--color-neutral-800`  | #262625 | Background    |
| `--color-neutral-900`  | #191919 | Sidebar       |

### Tipografía

| Familia      | Uso                 |
| ------------ | ------------------- |
| Inter        | UI, labels, botones |
| Merriweather | Títulos, body text  |
| Fira Code    | Código, números     |

## 🚧 Estado del Proyecto

| Componente    | Estado         | Notas              |
| ------------- | -------------- | ------------------ |
| Contenido MD  | ✅ Completo    | 16 archivos        |
| Assets HTML   | ✅ Completo    | 66 visualizaciones |
| Design System | 🔄 En progreso | Tokens definidos   |
| Layout Web    | 🔄 En progreso | Sidebar + Main     |
| Integración   | ⏳ Pendiente   | Contenido + Assets |
| Responsive    | ⏳ Pendiente   | Mobile-first       |
| Deploy        | ⏳ Pendiente   | GitHub Pages       |

## 📋 Próximos Pasos

1. [ ] Definir estructura HTML final para cada sección
2. [ ] Crear parser MD → HTML
3. [ ] Implementar layout responsive
4. [ ] Integrar assets en posiciones correctas
5. [ ] Testing cross-browser
6. [ ] Deploy a GitHub Pages
