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
    elementoProjeto.innerText = "O projeto 'Portfolio' é este site. O site foi usado tudo o que aprendi no módulo 2 e python do módulo 1 e no final o deploy."
    elementoLink.href = 'https://github.com/GarconeAna/portfolio'
    elementoBotao.value = 'segundo'

  } else if(elementoBotao.value == 'segundo'){
    elementoImagem.src = '../static/img/crime-scene.png'
    elementoProjeto.innerText = "O projeto 'Jogo do Detetive' em python. Primeiro projeto do módulo 1, as perguntas feitas retorna sua classificação no crime"
    elementoLink.href = 'https://github.com/GarconeAna/blueVS/blob/master/anaCarolinaGarcone-bluemod1-projeto1/projeto1Vscode-anaCarolinaGarcone.py'
    elementoBotao.value = 'terceiro'

  } else if(elementoBotao.value == 'terceiro'){
    elementoImagem.src = '../static/img/vote.png'
    elementoProjeto.innerText = "O projeto 'Votação' feito em python, recebe os votos de três candidatos e no final mostra os resultados, simulando uma urna."
    elementoLink.href = 'https://github.com/GarconeAna/blueVS/blob/master/anaCarolinaGarcone-bluemod1-projeto3/projeto3-anaCarolinaGarcone.py'
    elementoBotao.value = 'quarto'

  } else if(elementoBotao.value == 'quarto'){
    elementoImagem.src = '../static/img/jokenpo.png'
    elementoProjeto.innerText = "O projeto 'Jokênpo' em python, é o jogo pedra, papel ou tesoura. Escolha quantas rodadas e no final saiba o grande vencedor."
    elementoLink.href = 'https://github.com/GarconeAna/blueVS/blob/master/anaCarolinaGarcone-bluemod1-projeto2/projeto2-anaCarolinaGarcone.py'
    elementoBotao.value = 'quinto'

  } else if(elementoBotao.value == 'quinto'){
    elementoImagem.src = '../static/img/choice.png'
    elementoProjeto.innerText = "O projeto 'Comeu Morreu' em python, é um jogo interativo feito em grupo onde cada uma das escolhas tem resultados diferente."
    elementoLink.href = 'https://github.com/guilherme-correa-s/projeto-final'
    elementoBotao.value = 'sexto'

  } else {
    elementoImagem.src = '../static/img/face.png'
    elementoProjeto.innerText = "O projeto 'Jogo do Humor' mostra um personagem e suas emoções. O primeiro projeto do módulo 2 usando html, css e javascript."
    elementoLink.href = 'https://github.com/GarconeAna/personagem'
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