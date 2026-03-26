import { render, screen } from '@testing-library/react'
import App from './App'

// PRUEBA 1: Verifica que el título existe en el DOM
test('muestra el título de la app', () => {
  render(<App />)
  const titulo = screen.getByText(/Hola DevOps/i)
  expect(titulo).toBeInTheDocument()
})

// PRUEBA 2: Verifica que el mensaje de despliegue existe
test('muestra el mensaje de despliegue', () => {
  render(<App />)
  const mensaje = screen.getByText(/GitHub Actions/i)
  expect(mensaje).toBeInTheDocument()
})

// PRUEBA 3: Verifica que el título es un elemento h1
test('el título principal es un h1', () => {
  render(<App />)
  const h1 = document.querySelector('h1')
  expect(h1).toBeInTheDocument()
})
// prueba 4 nombre en la pagina

test('el footer contiene el nombre Juan Diego Acosta M.', () => {
  render(<App />)

  const nombre = screen.getByText(/Juan Diego Acosta M\./i)
  expect(nombre).toBeInTheDocument()
})
