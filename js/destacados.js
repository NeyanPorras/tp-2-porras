const destacados = document.querySelectorAll('.destacado')
const contador = document.getElementById('contador')

function actualizarContador() {
  const seleccionados = document.querySelectorAll('.seleccionada').length
  contador.textContent = seleccionados.toString()
}

destacados.forEach((destacado) => {
  destacado.addEventListener('click', () => {
    destacado.classList.toggle('seleccionada')
    actualizarContador()
  })
})
