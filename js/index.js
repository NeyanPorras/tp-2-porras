const meriendas = ['Medialunas', 'Frutas', 'Galletas', 'Cafe', 'Té', 'Licuados']

const listaMeriendas = document.getElementById('lista-meriendas')

meriendas.forEach((merienda) => {
  const li = document.createElement('li')
  li.textContent = merienda
  listaMeriendas.appendChild(li)
})

const boton = document.getElementById('boton-cantidad')
const cantidadEl = document.getElementById('cantidad-meriendas')

boton.addEventListener('click', () => {
  const cantidad = meriendas.length
  cantidadEl.textContent = `Cantidad de meriendas: ${cantidad}`
})
