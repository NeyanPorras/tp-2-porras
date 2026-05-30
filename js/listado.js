const juegos = [
  { nombre: 'Minecraft', categoria: 'Sandbox', plataforma: 'PC' },
  { nombre: 'Counter Strike 2', categoria: 'FPS', plataforma: 'PC' },
  { nombre: 'PES 2006', categoria: 'Futbol', plataforma: 'PS2' },
  { nombre: 'Warcraft III', categoria: 'Estrategia', plataforma: 'PC' },
  { nombre: 'Counter-Strike 1.6', categoria: 'FPS', plataforma: 'PC' },
  { nombre: 'SMITE', categoria: 'MOBA', plataforma: 'PC' },
  { nombre: 'FIFA 2014', categoria: 'Futbol', plataforma: 'PS2' },
  { nombre: 'GTA San Andreas', categoria: 'Acción', plataforma: 'PS2' },
  { nombre: 'The Last of Us', categoria: 'Acción', plataforma: 'PS3' },
  { nombre: 'God of War', categoria: 'Acción', plataforma: 'PS2' }
]

function mostrarJuegos(juegos) {
  const lista = document.getElementById('lista-juegos')
  lista.textContent = ''
  juegos.forEach((juego) => {
    const item = document.createElement('li')
    item.textContent = juego.nombre
    lista.appendChild(item)
  })
}
mostrarJuegos(juegos)

const botonMostrarJuegos = document.getElementById('todos')

botonMostrarJuegos.addEventListener('click', () => {
  mostrarJuegos(juegos)
})

const botonMostrarSoloPC = document.getElementById('pc')

botonMostrarSoloPC.addEventListener('click', () => {
  const juegosPC = juegos.filter((juego) => juego.plataforma === 'PC')
  mostrarJuegos(juegosPC)
})
