# Directorio Digital

Sitio estático (HTML/CSS/JS) para Directorio Digital, listo para desplegarse en **Cloudflare Pages** conectado a este repositorio de GitHub.

## Estructura

```
directorio-digital/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/          # imágenes, logos, etc.
└── README.md
```

## Desarrollo local

No requiere build step. Para previsualizar:

```bash
# opción 1: abrir index.html directamente en el navegador
# opción 2: servidor local simple
python3 -m http.server 8000
# luego visita http://localhost:8000
```

## Desplegar en Cloudflare Pages

1. Sube este repo a GitHub (ver instrucciones abajo).
2. En el [dashboard de Cloudflare](https://dash.cloudflare.com/) → **Workers & Pages** → **Create application** → pestaña **Pages** → **Connect to Git**.
3. Autoriza el acceso a tu cuenta de GitHub y selecciona este repositorio.
4. Configuración de build:
   - **Framework preset:** None
   - **Build command:** (vacío)
   - **Build output directory:** `/`
5. Deploy. Cloudflare te dará una URL tipo `directorio-digital.pages.dev` y cada push a `main` se despliega automáticamente.
6. (Opcional) Conecta tu dominio propio en **Custom domains** dentro del proyecto de Pages.

## Subir este proyecto a GitHub

```bash
# 1. Crea un repo vacío en https://github.com/new llamado "directorio-digital" (sin README, sin .gitignore)
# 2. Desde esta carpeta:
git add .
git commit -m "Initial commit: scaffold Directorio Digital"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/directorio-digital.git
git push -u origin main
```
