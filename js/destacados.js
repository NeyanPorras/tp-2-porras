const destacados = document.querySelectorAll('.destacado')
const contador = document.getElementById('contador-selected')

function actualizarContador() {
  const seleccionados = document.querySelectorAll('.selected').length
  contador.textContent = seleccionados.toString()
}

destacados.forEach((destacado) => {
  destacado.addEventListener('click', () => {
    destacado.classList.toggle('selected')
    actualizarContador()
  })
})
