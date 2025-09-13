# Guía de Deployment en GitHub Pages

Esta aplicación de TransporteCR está configurada para desplegarse automáticamente en GitHub Pages.

## Configuración Automática ✅

Ya está todo configurado para ti:

- ✅ **GitHub Actions workflow** (`.github/workflows/gh-pages.yml`)
- ✅ **Build estática optimizada** con Vite
- ✅ **Routing SPA funcionando** con fallback 404.html
- ✅ **Todos los assets incluidos** (imágenes, CSS, JS)

## Pasos para Deployment

### 1. Subir el código a GitHub
```bash
git add .
git commit -m "Configurar deployment para GitHub Pages"
git push origin main
```

### 2. Activar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Click en **Settings** → **Pages**
3. En "Source", selecciona **GitHub Actions**
4. ¡Listo! El deployment se activará automáticamente

### 3. Verificar el Deployment
- El workflow se ejecutará automáticamente en cada push a `main`
- Puedes ver el progreso en **Actions** tab
- Una vez completado, tu sitio estará disponible en:
  ```
  https://[tu-usuario].github.io/[nombre-repositorio]/
  ```

## Características del Deployment

### ✅ Lo que funciona perfectamente
- 📱 **Toda la landing page** (Hero, Servicios, Cobertura, etc.)
- 🌍 **Cambio de idioma** (Español/Inglés)
- 📲 **Enlaces de WhatsApp** para reservas
- 🗺️ **Mapa de Costa Rica** con información de cobertura
- 📱 **Diseño responsivo** en móvil y escritorio
- ⚡ **Carga rápida** con assets optimizados
- 🔄 **Routing SPA** funciona correctamente

### ⚠️ Limitaciones de GitHub Pages
- ❌ No hay backend (base de datos, APIs)
- ❌ No se pueden procesar formularios server-side
- ✅ Pero WhatsApp funciona perfecto para contacto

## Personalización

### Tipos de repositorio GitHub Pages
El deployment funciona automáticamente para ambos tipos:
- **Repositorio de proyecto**: `usuario/nombre-repo` → `usuario.github.io/nombre-repo/`  
- **Repositorio personal**: `usuario/usuario.github.io` → `usuario.github.io/`

### Cambiar dominio (opcional)
Si tienes un dominio personalizado:
1. En **Settings** → **Pages** → **Custom domain**
2. Agrega tu dominio (ej: `www.transportecr.com`)
3. El workflow seguirá funcionando automáticamente

### Actualizar contenido
Solo edita los archivos y haz push:
```bash
git add .
git commit -m "Actualizar contenido"
git push origin main
```
El sitio se actualiza automáticamente en 2-3 minutos.

## Solución de Problemas

### Si el deployment falla:
1. Ve a **Actions** tab en GitHub
2. Click en el workflow que falló
3. Revisa los logs de error
4. Errores comunes:
   - **Permisos**: Asegúrate que GitHub Actions tenga permisos de Pages
   - **Branch**: El workflow está configurado para `main` branch

### Si las rutas no funcionan:
- El sistema usa fallback a 404.html para SPA routing
- Si hay problemas, el sitio siempre funcionará desde la página principal

## Costo
✅ **Completamente GRATIS** con GitHub Pages
- Ancho de banda ilimitado
- SSL automático (HTTPS)
- CDN global para carga rápida

---

**¡Tu sitio web de TransporteCR estará live en pocos minutos!** 🚀