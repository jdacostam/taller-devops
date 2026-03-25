# 🚀 Taller DevOps: CI/CD con GitHub Actions + React + GitHub Pages

## ¿Qué vamos a construir?

Un **pipeline de CI/CD completo** que, cada vez que hagas un `git push`, automáticamente:

1. ✅ Ejecuta pruebas de la aplicación
2. 🔨 Construye la aplicación React
3. 🚀 La despliega en GitHub Pages

```
Tu código  →  GitHub  →  GitHub Actions  →  Pruebas  →  Build  →  GitHub Pages
   (push)                  (pipeline)        (test)     (npm)     (deploy)
```

---

## 🗂️ Estructura del proyecto

```
mi-app-devops/
├── .github/
│   └── workflows/
│       └── deploy.yml        ← El archivo mágico de GitHub Actions
├── src/
│   ├── App.jsx
│   ├── App.test.jsx          ← Pruebas
│   └── main.jsx
├── public/
├── package.json
└── vite.config.js
```

---

## 📋 Paso a paso

### PASO 1 — Crear el repositorio en GitHub

1. Ve a [github.com](https://github.com) e inicia sesión
2. Clic en **"New repository"**
3. Nombre: `mi-app-devops`
4. Marca **"Public"** (necesario para GitHub Pages gratis)
5. Clic en **"Create repository"**

---

### PASO 2 — Crear la aplicación React

Abre tu terminal y ejecuta:

```bash
# Crear proyecto con Vite
npm create vite@latest mi-app-devops -- --template react

# Entrar al proyecto
cd mi-app-devops

# Instalar dependencias
npm install

# Instalar Vitest para pruebas
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom
```

---

### PASO 3 — Configurar Vite para GitHub Pages

Edita `vite.config.js` así:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // ⚠️ Cambia 'mi-app-devops' por el nombre de TU repositorio
  base: '/mi-app-devops/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  }
})
```

Crea el archivo `src/setupTests.js`:
```js
import '@testing-library/jest-dom'
```

---

### PASO 4 — Actualizar package.json

Agrega el script de pruebas en tu `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

---

### PASO 5 — Escribir una prueba simple

Edita `src/App.jsx`:
```jsx
function App() {
  return (
    <div className="App">
      <h1>¡Hola DevOps! 🚀</h1>
      <p>Esta app fue desplegada automáticamente con GitHub Actions</p>
    </div>
  )
}

export default App
```

Crea `src/App.test.jsx`:
```jsx
import { render, screen } from '@testing-library/react'
import App from './App'

// PRUEBA 1: Verifica que el título existe
test('muestra el título de la app', () => {
  render(<App />)
  const titulo = screen.getByText(/Hola DevOps/i)
  expect(titulo).toBeInTheDocument()
})

// PRUEBA 2: Verifica el mensaje de despliegue
test('muestra el mensaje de despliegue', () => {
  render(<App />)
  const mensaje = screen.getByText(/GitHub Actions/i)
  expect(mensaje).toBeInTheDocument()
})
```

Verifica que las pruebas pasen localmente:
```bash
npm test
```

---

### PASO 6 — Crear el Workflow de GitHub Actions

Crea la carpeta y el archivo:
```bash
mkdir -p .github/workflows
```

Crea `.github/workflows/deploy.yml` con el contenido del archivo adjunto.

---

### PASO 7 — Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Clic en **Settings** → **Pages**
3. En "Source", selecciona **"GitHub Actions"**
4. ¡Listo! GitHub Pages ahora esperará que tu workflow lo despliegue

---

### PASO 8 — Subir el código y ver la magia

```bash
# Inicializar git
git init
git add .
git commit -m "feat: primer commit con CI/CD 🚀"

# Conectar con GitHub (cambia TU_USUARIO por tu usuario)
git remote add origin https://github.com/TU_USUARIO/mi-app-devops.git
git branch -M main
git push -u origin main
```

Ahora ve a la pestaña **"Actions"** en GitHub y observa el pipeline en ejecución.

---

## 🔍 ¿Qué hace cada parte del workflow?

| Sección | ¿Qué hace? |
|---------|-----------|
| `on: push` | Se activa cuando haces push a `main` |
| `on: pull_request` | También se activa en Pull Requests |
| `actions/checkout` | Descarga tu código en el servidor |
| `actions/setup-node` | Instala Node.js |
| `npm ci` | Instala dependencias de forma limpia |
| `npm test` | Ejecuta las pruebas |
| `npm run build` | Construye la app para producción |
| `actions/deploy-pages` | Publica en GitHub Pages |

---

## 🧪 Ejercicio de laboratorio

### Ejercicio 1 — Romper el pipeline a propósito

1. Cambia el texto en `App.jsx` sin actualizar la prueba
2. Haz push
3. Observa cómo el pipeline **falla en la etapa de pruebas** y **NO despliega**
4. Esto demuestra que las pruebas protegen el despliegue ✅

### Ejercicio 2 — Agregar una nueva prueba

Agrega este test en `App.test.jsx`:
```jsx
test('el título es un h1', () => {
  render(<App />)
  const h1 = document.querySelector('h1')
  expect(h1).toBeInTheDocument()
})
```

### Ejercicio 3 — Ver el historial de despliegues

En GitHub → pestaña **Actions**, puedes ver:
- ✅ Cuándo fue exitoso
- ❌ Cuándo falló y en qué paso
- ⏱️ Cuánto tardó cada paso

---

## 🌐 Acceder a tu app desplegada

Una vez que el workflow termine exitosamente, tu app estará en:
```
https://TU_USUARIO.github.io/mi-app-devops/
```

---

## 💡 Conceptos clave aprendidos

| Concepto | Definición |
|----------|-----------|
| **CI (Integración Continua)** | Probar automáticamente cada cambio de código |
| **CD (Despliegue Continuo)** | Desplegar automáticamente si las pruebas pasan |
| **Pipeline** | La secuencia de pasos automatizados |
| **Job** | Un conjunto de pasos dentro del pipeline |
| **Runner** | El servidor donde se ejecuta el pipeline |
| **Artifact** | Archivos generados en el pipeline (el build) |
