document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('.btn-burger').addEventListener('click', function(){
    document.querySelector('.side-bar ').classList.toggle('non-active')
    document.querySelector('.btn-burger').classList.toggle('hide')
  })
})