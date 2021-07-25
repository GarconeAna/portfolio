const elementoProjeto = document.querySelector('#sobre')
const elementoImagem = document.querySelector('#imagem')
let elementoLink = document.querySelector('#alterar-link')
let elementoBotao = document.querySelector('#alterar-projeto')
let inputNome = document.querySelector('#nome')
let inputEmail = document.querySelector('#email')
let textareaMensagem = document.querySelector('#mensagem')
// let botaoEnviar = document.querySelector('#enviar')
let form = document.querySelector('form')
let nomeOk = false
let emailOk = false
let mensagemOk = false
// botaoEnviar.disabled = true

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


inputNome.addEventListener('keyup', () => {
  if(inputNome.value.length < 3){
    inputNome.style.borderColor = 'red'
    // nomeOk = false
  } else {
    inputNome.style.borderColor = '#fff'
    // nomeOk = true
  }

  if (inputNome.value == '' || inputNome.value == undefined || inputNome.value == null) {
    inputNome.style.borderColor = '#fff'
  }

  // if (nomeOk && emailOk && mensagemOk) {
  //   botaoEnviar.disabled = false
  // } else {
  //   botaoEnviar.disabled = true
  // }
})

inputEmail.addEventListener('keyup', () => {
  if(inputEmail.value.indexOf('@') == -1 || inputEmail.value.indexOf('.') == -1) {
    inputEmail.style.borderColor = 'red'
    // emailOk = false
  } else {
    inputEmail.style.borderColor = '#fff'
    // emailOk = true
  }

  if (inputEmail.value == '' || inputEmail.value == undefined || inputEmail.value == null) {
    inputEmail.style.borderColor = '#fff'
  }

  // if (nomeOk && emailOk && mensagemOk) {
  //   botaoEnviar.disabled = false
  // } else {
  //   botaoEnviar.disabled = true
  // }
})

textareaMensagem.addEventListener('keyup', () => {
  if(textareaMensagem.value.length > 100) {
    textareaMensagem.style.borderColor = 'red'
    // mensagemOk = false
  } else {
    textareaMensagem.style.borderColor = '#fff'
    // mensagemOk = true
  }

  if (textareaMensagem.value == '' || textareaMensagem.value == undefined || textareaMensagem.value == null) {
    textareaMensagem.style.borderColor = '#fff'
  }

  // if (nomeOk && emailOk && mensagemOk) {
  //   botaoEnviar.disabled = false
  // } else {
  //   botaoEnviar.disabled = true
  // }
})

form.addEventListener('submit', () => {
  let carregamento = document.querySelector('#carregamento')
  carregamento.style.display = 'flex'
  let form = document.querySelector('form')
  form.style.display = 'none'
})