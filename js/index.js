const meriendas = ['Medialunas', 'Frutas', 'Galletas', 'Cafe', 'Té', 'Licuados']
const iconos = ['🍩', '🍎', '🍪', '☕', '🍵', '🥤']
const listaMeriendas = document.getElementById('lista-meriendas')

meriendas.forEach((merienda, index) => {
  const icono = iconos[index] || '🍽️'

  const li = document.createElement('li')
  li.classList.add('card-merienda')

  const spanIcono = document.createElement('span')
  spanIcono.textContent = icono
  spanIcono.classList.add('icono-merienda')

  const spanTexto = document.createElement('span')
  spanTexto.textContent = merienda
  spanTexto.classList.add('texto-merienda')

  li.appendChild(spanIcono)
  li.appendChild(spanTexto)
  listaMeriendas.appendChild(li)
})

const boton = document.getElementById('boton-cantidad')
const cantidadEl = document.getElementById('cantidad-meriendas')

boton.addEventListener('click', () => {
  const cantidad = meriendas.length
  cantidadEl.textContent = cantidad.toString()
})
