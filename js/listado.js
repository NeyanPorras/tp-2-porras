const juegos = [
  {
    nombre: 'Counter Strike 2',
    imgUrl:
      'https://cdn2.steamgriddb.com/icon/e1bd06c3f8089e7552aa0552cb387c92/8/64x64.png',
    plataforma: 'PC'
  },
  {
    nombre: 'PES 2006',
    imgUrl:
      'https://cdn2.steamgriddb.com/icon/739a18e3b78a91922a806b7b1e74df2f/32/64x64.png',
    plataforma: 'PS2'
  },
  {
    nombre: 'Warcraft III',
    imgUrl:
      'https://cdn2.steamgriddb.com/icon/ccc0aa1b81bf81e16c676ddb977c5881/32/64x64.png',
    plataforma: 'PC'
  },
  {
    nombre: 'Counter-Strike 1.6',
    imgUrl:
      'https://cdn2.steamgriddb.com/icon/5e93ee9a764cf2326a92f61f8fefdb1f/32/64x64.png',
    plataforma: 'PC'
  },
  {
    nombre: 'SMITE',
    imgUrl:
      'https://cdn2.steamgriddb.com/icon/21ce689121e39821d07d04faab328370/32/64x64.png',
    plataforma: 'PC'
  },
  {
    nombre: 'Minecraft',
    imgUrl:
      'https://cdn2.steamgriddb.com/icon/add7a048049671970976f3e18f21ade3/32/64x64.png',
    plataforma: 'PC'
  },
  {
    nombre: 'FIFA 15',
    imgUrl:
      'https://cdn2.steamgriddb.com/icon_thumb/08fb104b0f2f838f3ce2d2b3741a12c2.png',
    plataforma: 'PS2'
  },
  {
    nombre: 'GTA IV',
    imgUrl:
      'https://cdn2.steamgriddb.com/icon_thumb/b7784c8bc13cfa7214f249fef97abfe9.png',
    plataforma: 'PS3'
  },
  {
    nombre: 'The Last of Us',
    imgUrl:
      'https://cdn2.steamgriddb.com/icon/b6617980ce90f637e68c3ebe8b9be745/32/256x256.png',
    plataforma: 'PS3'
  },
  {
    nombre: 'God of War',
    imgUrl:
      'https://cdn2.steamgriddb.com/icon_thumb/ccd2d123f4ec4d777fc6ef757d0fb642.png',
    plataforma: 'PS2'
  }
]

function mostrarJuegos(juegos) {
  const lista = document.getElementById('lista-juegos')
  lista.textContent = ''
  juegos.forEach((juego) => {
    const item = document.createElement('li')
    item.classList.add('card-list')

    const img = document.createElement('img')
    img.src = juego.imgUrl
    img.alt = `Icono de ${juego.nombre}`
    img.classList.add('icons')

    const titulo = document.createElement('span')
    titulo.textContent = juego.nombre
    titulo.classList.add('titulo-juego')

    const plataforma = document.createElement('span')
    plataforma.textContent = `(${juego.plataforma})`
    plataforma.classList.add('plataforma')

    item.appendChild(img)
    item.appendChild(titulo)
    item.appendChild(plataforma)
    lista.appendChild(item)
  })
}

mostrarJuegos(juegos)

const botonMostrarJuegos = document.getElementById('todos')

botonMostrarJuegos.addEventListener('click', () => {
  mostrarJuegos(juegos)
})

const botonMostrarJuegosPC = document.getElementById('pc')

botonMostrarJuegosPC.addEventListener('click', () => {
  const juegosPC = juegos.filter((juego) => juego.plataforma === 'PC')
  mostrarJuegos(juegosPC)
})
