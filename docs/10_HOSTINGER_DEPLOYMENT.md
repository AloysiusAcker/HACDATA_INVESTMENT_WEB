# Plan de Deployment a Hostinger

> Guía paso a paso para subir HACDATA Investment Web a un servidor Hostinger

---

## 📋 Información del Proyecto

| Campo                | Valor                                            |
| -------------------- | ------------------------------------------------ |
| Tipo                 | Sitio web estático (HTML/CSS/JS)                 |
| Directorio a subir   | `src/`                                           |
| Archivos principales | `index.html`, `css/`, `js/`, `pages/`, `assets/` |
| Sin backend          | ✅ No requiere Node.js, PHP, etc.                |

---

## 🛠️ Opciones de Deployment en Hostinger

### Opción A: Hosting Web (Shared Hosting)

**Recomendado si ya tienes un plan de hosting**

### Opción B: Hosting VPS

**Para mayor control y configuración**

---

## 📁 Opción A: Shared Hosting (Panel hPanel)

### Paso 1: Preparar los archivos

1. En tu PC, navega a `HACDATA_INVESTMENT_WEB/src/`
2. Selecciona TODO el contenido de `src/`:
   - `css/`
   - `js/`
   - `pages/`
   - `assets/`
   - `index.html`

3. Crea un ZIP con estos archivos:

```powershell
# Desde PowerShell
cd c:\Users\vox_h\Desktop\HACDATA_2026_MASTER\HACDATA_INVESTMENT_WEB
Compress-Archive -Path src\* -DestinationPath hacdata-web.zip
```

### Paso 2: Acceder a Hostinger

1. Inicia sesión en [hpanel.hostinger.com](https://hpanel.hostinger.com)
2. Selecciona tu dominio/plan de hosting
3. Ve a **Archivos** → **Administrador de archivos**

### Paso 3: Subir archivos

1. Navega a `public_html/` (o la carpeta raíz de tu dominio)
2. Si quieres subirlo a un subdirectorio (ej: `tudominio.com/investment`):
   - Crea la carpeta `investment/`
   - Entra en ella
3. Click en **Subir** → Selecciona `hacdata-web.zip`
4. Una vez subido, click derecho → **Extraer**
5. Elimina el archivo ZIP después de extraer

### Paso 4: Verificar estructura

Tu `public_html/` (o subdirectorio) debe tener:

```
public_html/
└── investment/          (opcional)
    ├── index.html       ✅ Punto de entrada
    ├── css/
    │   ├── variables.css
    │   ├── base.css
    │   ├── components.css
    │   └── layout.css
    ├── js/
    │   └── app.js
    ├── pages/
    │   ├── 00_indice.html
    │   ├── 01_resumen_ejecutivo.html
    │   └── ... (todas las páginas)
    └── assets/
        ├── 01_resumen_ejecutivo/
        ├── 02_la_empresa/
        └── ... (todos los assets)
```

### Paso 5: Configurar dominio (opcional)

Si quieres un subdominio como `investment.hacdata.com`:

1. Ve a **Dominios** → **Subdominios**
2. Crea el subdominio
3. Apúntalo a la carpeta donde subiste los archivos

---

## 🔧 Opción B: Usando FTP/SFTP

### Paso 1: Obtener credenciales FTP

1. En hPanel → **Archivos** → **Cuentas FTP**
2. Anota:
   - **Host**: `ftp.tudominio.com` o IP del servidor
   - **Usuario**: tu usuario FTP
   - **Contraseña**: tu contraseña FTP
   - **Puerto**: 21 (FTP) o 22 (SFTP)

### Paso 2: Usar FileZilla

1. Descarga [FileZilla](https://filezilla-project.org/)
2. Conecta con tus credenciales
3. Navega a `public_html/` en el servidor
4. Arrastra el contenido de `src/` al servidor

### Paso 3: Usando línea de comandos (PowerShell)

Si tienes acceso SSH:

```powershell
# Instala WinSCP o usa scp
scp -r src/* tuusuario@tuservidor.com:/home/tuusuario/public_html/investment/
```

---

## 🚀 Opción C: Git + Auto-Deploy

### Si tu Hostinger soporta Git:

1. En hPanel → **Avanzado** → **Git**
2. Conecta tu repositorio GitHub
3. Configura el branch `main`
4. Configura el directorio de deployment: `src/`

### Beneficios:

- ✅ Cada push a GitHub actualiza automáticamente el sitio
- ✅ Sin necesidad de subir archivos manualmente

---

## ⚙️ Configuraciones Adicionales

### Archivo .htaccess (para Apache)

Crea un archivo `.htaccess` en la raíz para mejorar rendimiento:

```apache
# Habilitar compresión
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>

# Cacheo de archivos estáticos
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType image/png "access plus 1 month"
  ExpiresByType image/svg+xml "access plus 1 month"
</IfModule>

# Forzar HTTPS (si tienes SSL)
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### SSL/HTTPS

1. En hPanel → **Seguridad** → **SSL**
2. Activa el certificado SSL gratuito de Let's Encrypt
3. Espera propagación (5-10 minutos)

---

## ✅ Lista de Verificación Post-Deployment

- [ ] `index.html` carga correctamente
- [ ] Navegación del sidebar funciona
- [ ] Assets visuales se muestran (iframes cargan)
- [ ] CSS se aplica correctamente
- [ ] JavaScript funciona (modal EXPAND, scroll-to-top)
- [ ] Responsive en móvil
- [ ] SSL/HTTPS activo

---

## 🔗 URLs Finales

| Opción           | URL                                |
| ---------------- | ---------------------------------- |
| Raíz del dominio | `https://tudominio.com`            |
| Subdirectorio    | `https://tudominio.com/investment` |
| Subdominio       | `https://investment.tudominio.com` |

---

## 📞 Soporte

Si tienes problemas:

1. Verifica que los archivos están en `public_html/`
2. Revisa que `index.html` está en la raíz
3. Comprueba permisos de archivos (644 para archivos, 755 para carpetas)
4. Contacta soporte de Hostinger si persisten problemas

---

## 🎯 Siguiente Paso Recomendado

**Ejecuta este comando para crear el ZIP:**

```powershell
cd c:\Users\vox_h\Desktop\HACDATA_2026_MASTER\HACDATA_INVESTMENT_WEB
Compress-Archive -Path src\* -DestinationPath hacdata-web.zip -Force
```

Luego sube el ZIP a Hostinger.
