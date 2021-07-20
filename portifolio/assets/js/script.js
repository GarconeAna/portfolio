let inputNome = document.querySelector('#nome')

inputNome.addEventListener('keyup', () => {
  if(inputNome.value.length < 2){
    inputNome.style.borderColor = 'red'
  } else {
    inputNome.style.borderColor = 'green'
  }
})