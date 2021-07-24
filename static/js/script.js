const elementoProjeto = document.querySelector('#sobre')
const elementoImagem = document.querySelector('#imagem')
let elementoLink = document.querySelector('#alterar-link')
let elementoBotao = document.querySelector('#alterar-projeto')

elementoBotao.addEventListener('click', () =>{
  if(elementoBotao.value == 'primeiro'){
    elementoImagem.src = '../static/img/portfolio.png'
    elementoProjeto.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt dolores distinctio harum hic ex corrupti.'
    elementoLink.href = 'https://github.com'
    elementoBotao.value = 'segundo'

  } else if(elementoBotao.value == 'segundo'){
    elementoImagem.src = '../static/img/crime-scene.png'
    elementoProjeto.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt dolores distinctio harum hic ex corrupti.'
    elementoLink.href = 'https://github.com'
    elementoBotao.value = 'terceiro'

  } else if(elementoBotao.value == 'terceiro'){
    elementoImagem.src = '../static/img/vote.png'
    elementoProjeto.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt dolores distinctio harum hic ex corrupti.'
    elementoLink.href = 'https://github.com'
    elementoBotao.value = 'quarto'

  } else if(elementoBotao.value == 'quarto'){
    elementoImagem.src = '../static/img/jokenpo.png'
    elementoProjeto.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt dolores distinctio harum hic ex corrupti.'
    elementoLink.href = 'https://github.com'
    elementoBotao.value = 'quinto'

  } else if(elementoBotao.value == 'quinto'){
    elementoImagem.src = '../static/img/choice.png'
    elementoProjeto.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt dolores distinctio harum hic ex corrupti.'
    elementoLink.href = 'https://github.com'
    elementoBotao.value = 'sexto'

  } else {
    elementoImagem.src = '../static/img/face.png'
    elementoProjeto.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt dolores distinctio harum hic ex corrupti.'
    elementoLink.href = 'https://github.com'
    elementoBotao.value = 'primeiro'
  }
})