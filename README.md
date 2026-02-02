# HACDATA Investment Web

> Plataforma web interactiva para la presentación del Investment Memorandum HACDATA 2026.

## 📋 Descripción

Este repositorio contiene el desarrollo de la aplicación web para visualizar el plan de negocios e inversión de HACDATA. Incluye:

- **Contenido narrativo** (16 secciones en Markdown)
- **Assets visuales interactivos** (66 componentes HTML/SVG/Canvas)
- **Aplicación web** con navegación por secciones

## 🏗️ Estructura del Proyecto

```
HACDATA_INVESTMENT_WEB/
├── docs/                    # Documentación del proyecto
├── content/                 # Contenido fuente (Markdown)
├── assets/                  # Assets visuales por sección
│   ├── 01_resumen_ejecutivo/
│   ├── 02_la_empresa/
│   └── ...
├── src/                     # Código fuente de la web
│   ├── css/
│   ├── js/
│   └── pages/
└── scripts/                 # Utilidades de build
```

## 🚀 Quick Start

### Requisitos

- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/[tu-usuario]/HACDATA_INVESTMENT_WEB.git
cd HACDATA_INVESTMENT_WEB

# Instalar dependencias (cuando se agreguen)
npm install

# Iniciar servidor de desarrollo
npx http-server src -p 3000 -o
```

## 📚 Documentación

| Documento                                               | Descripción                        |
| ------------------------------------------------------- | ---------------------------------- |
| [00_PROJECT_OVERVIEW.md](docs/00_PROJECT_OVERVIEW.md)   | Visión general del proyecto        |
| [01_DESIGN_SYSTEM.md](docs/01_DESIGN_SYSTEM.md)         | Sistema de diseño y componentes    |
| [02_CONTENT_INVENTORY.md](docs/02_CONTENT_INVENTORY.md) | Inventario de contenido            |
| [03_ASSET_REGISTRY.md](docs/03_ASSET_REGISTRY.md)       | Registro de assets visuales        |
| [04_SECTION_MAPPING.md](docs/04_SECTION_MAPPING.md)     | Mapeo sección → contenido → assets |

## 📊 Contenido del Memorándum

| #         | Sección                | Assets        |
| --------- | ---------------------- | ------------- |
| 01        | Resumen Ejecutivo      | 5             |
| 02        | La Empresa             | 4             |
| 03        | Problema y Oportunidad | 5             |
| 04        | Propuesta de Valor     | 5             |
| 05        | Producto y Servicios   | 5             |
| 06        | Modelo de Negocio      | 5             |
| 07        | Mercado y Competencia  | 5             |
| 08        | Go-to-Market           | 5             |
| 09        | Operaciones            | 5             |
| 10        | Tecnología             | 5             |
| 11        | Organización           | 5             |
| 12        | Plan Financiero        | 5             |
| 13        | Riesgos                | 2             |
| 14        | Tesis de Inversión     | 4             |
| 15        | Anexos                 | 1             |
| **Total** | **15 secciones**       | **66 assets** |

## 🛠️ Stack Tecnológico

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Visualizaciones**: SVG, Canvas, CSS Animations
- **Design System**: Basado en Anthropic DS v1.0
- **Tipografías**: Inter, Merriweather, Fira Code

## 📄 Licencia

Confidencial - HACDATA © 2026
