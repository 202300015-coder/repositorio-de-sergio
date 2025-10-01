*Paso 1: Crea el proyecto de Vite*
```
bunx create-vite@latest . -t vanilla-ts -i --no-rolldown
```

*Paso 2: Instala Tailwind CSS v4*
```bash
bun install -D @tailwindcss/vite
```

*Step 3: Configura Vite* (vite.config.ts)
```typescript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
})
```

*Paso 4: Crea el archivo de config de Tailwind* (tailwind.config.js)
```javascript
/* @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*/*.{js,ts,jsx,tsx}"],
  plugins: [],
};
```

*Paso 5: Actualizar el archivo CSS* (style.css)
```css
@import "tailwindcss";
```

*Paso 6: Limpia el HTML y reemplaza por tu contenido*

*Paso 7: Detener la ejecucion del dev server y empezarlo nuevamente*
```bash
bun run dev
```

*Estructura final*
```
landing-con-vite/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── src/
    ├── main.ts
    └── style.css
```
