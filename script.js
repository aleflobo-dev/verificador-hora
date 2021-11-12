function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var cumprimentar = window.document.getElementById('cumprimentar')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas`

  if (hora >= 0 && hora < 12) {
    img.src = 'image/manha.png'
    document.body.style.background = '#f0e68c'
    cumprimentar.innerHTML = `Bom dia!`
  } else if (hora >= 12 && hora < 18) {
    img.src = 'image/tarde.png'
    document.body.style.background = '#a0522d'
    cumprimentar.innerHTML = `Boa tarde!`
  } else {
    img.src = 'image/noite.png'
    document.body.style.background = '#120922'
    cumprimentar.innerHTML = `Boa noite!`
  }
}
