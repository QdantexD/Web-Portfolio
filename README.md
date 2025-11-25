# Portfolio Web - Andreé

Portfolio profesional desarrollado con HTML, CSS y JavaScript.

**Autor:** Eddi Andreé Salazar Matos

## 🚀 Publicar en GitHub Pages (GitHub Desktop)

### Pasos para publicar:

1. **Abre GitHub Desktop** y asegúrate de estar en el repositorio correcto

2. **Confirma los cambios:**
   - Verás que hay cambios pendientes (archivos nuevos en la raíz)
   - Escribe un mensaje de commit, por ejemplo: "Preparar proyecto para GitHub Pages"
   - Haz clic en **"Commit to main"** (o la rama que estés usando)

3. **Sube los cambios:**
   - Haz clic en **"Push origin"** para subir los cambios a GitHub

4. **Configura GitHub Pages:**
   - Ve a tu repositorio en GitHub.com
   - Ve a **Settings** → **Pages**
   - En **Source**, selecciona:
     - **Branch:** `main` (o `master`)
     - **Folder:** `/ (root)` ← **IMPORTANTE: Selecciona la raíz**
   - Haz clic en **Save**

5. **Espera unos minutos:**
   - GitHub Pages puede tardar 2-5 minutos en publicar
   - Verás un mensaje verde cuando esté listo

6. **Tu sitio estará en:**
   ```
   https://qdantexd.github.io/Web-Portfolio-Personal-1/
   ```
   
   **Nota:** Esta es la URL de GitHub Pages. El repositorio Git está en:
   ```
   https://github.com/QdantexD/Web-Portfolio-Personal-1
   ```

## 📁 Estructura del Proyecto

```
Web-Portfolio/
├── Assets/
│   └── edf4d855e2fd355408fba20b9cef22a7.jpg
├── index.html          ← Archivo principal (en la raíz)
├── script.js           ← JavaScript (en la raíz)
├── sycle.css           ← Estilos (en la raíz)
├── .nojekyll           ← Configuración para GitHub Pages
├── Web-Portafolio-1/   ← Carpeta original (se puede mantener)
└── README.md
```

## ✅ Características

- ✅ Rutas relativas configuradas
- ✅ Archivo `.nojekyll` creado (evita problemas con Jekyll)
- ✅ Compatible con GitHub Pages
- ✅ Diseño responsivo
- ✅ Animaciones y efectos interactivos

## 🔧 Notas Técnicas

- El archivo `.nojekyll` le indica a GitHub Pages que no procese el sitio con Jekyll
- Todas las rutas son relativas, por lo que funcionarán correctamente en GitHub Pages
- Las dependencias externas (Font Awesome, Google Fonts) se cargan desde CDN

## 📝 Licencia

Todos los derechos reservados © 2024 Andreé
