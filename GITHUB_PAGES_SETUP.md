# 🚀 Guía de Configuración para GitHub Pages

## Pasos para Publicar tu Portfolio en GitHub Pages

### 1. Sube tu código a GitHub

Si aún no lo has hecho:
```bash
git add .
git commit -m "Preparar proyecto para GitHub Pages"
git push origin main
```

### 2. Configura GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, busca **Pages**
4. En la sección **Source**:
   - **Branch**: Selecciona `main` (o `master` si es tu rama principal)
   - **Folder**: Selecciona `/Web-Portafolio-1`
5. Haz clic en **Save** (Guardar)

### 3. Espera a que se publique

GitHub Pages puede tardar unos minutos en publicar tu sitio. Verás un mensaje verde cuando esté listo.

### 4. Accede a tu sitio

Tu portfolio estará disponible en:
```
https://[tu-usuario].github.io/Web-Portfolio/Web-Portafolio-1/
```

**Ejemplo:** Si tu usuario es `andree-dev` y tu repositorio es `Web-Portfolio`:
```
https://andree-dev.github.io/Web-Portfolio/Web-Portafolio-1/
```

## 🔄 Actualizar el Sitio

Cada vez que hagas cambios y los subas a GitHub:

```bash
git add .
git commit -m "Descripción de los cambios"
git push origin main
```

GitHub Pages se actualizará automáticamente en unos minutos.

## ⚠️ Solución de Problemas

### El sitio no carga
- Verifica que hayas seleccionado la carpeta correcta en la configuración
- Asegúrate de que el archivo `index.html` esté en la carpeta seleccionada
- Espera 5-10 minutos después de la configuración inicial

### Las imágenes no se ven
- Verifica que la carpeta `Assets` esté en la misma ubicación que `index.html`
- Asegúrate de que los nombres de archivo coincidan exactamente (mayúsculas/minúsculas)

### Los estilos no se aplican
- Verifica que `sycle.css` esté en la misma carpeta que `index.html`
- Revisa la consola del navegador (F12) para ver errores

### El JavaScript no funciona
- Verifica que `script.js` esté en la misma carpeta que `index.html`
- Revisa la consola del navegador (F12) para ver errores

## 📝 Notas Importantes

- El archivo `.nojekyll` evita que GitHub procese el sitio con Jekyll (no es necesario para sitios estáticos simples, pero ayuda)
- Todas las rutas en el proyecto son relativas, por lo que funcionarán correctamente
- GitHub Pages es gratuito para repositorios públicos
- Los cambios pueden tardar hasta 10 minutos en reflejarse

## 🎯 Opción Alternativa: Servir desde la Raíz

Si prefieres una URL más limpia (`https://[usuario].github.io/Web-Portfolio/`), puedes:

1. Mover todos los archivos de `Web-Portafolio-1/` a la raíz del repositorio
2. En GitHub Pages, seleccionar `/ (root)` como carpeta
3. Tu sitio estará en: `https://[usuario].github.io/Web-Portfolio/`

**Nota:** Si mueves los archivos, asegúrate de mantener la estructura de carpetas (la carpeta `Assets` debe moverse también).

