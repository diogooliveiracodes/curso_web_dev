window.addEventListener('load', function(){
    var $button = document.getElementById('botao')
    // var $button = document.querySelector('.botao') // classe
    // var $button = document.querySelector('button') // tag
    // var $button = document.querySelector('#botao') // id
    $button.addEventListener('click', clicou)

})



function clicou(){
    // innerHTML = conteúdo interno
    document.getElementById('demo').innerHTML += `<p>Hello World!</p>`

    // textContent = conteúdo de texto
    // document.getElementById('demo2').textContent = Date()
}