window.addEventListener('load', function() {
    var $button = document.querySelector('button');
    $button.addEventListener('click', listarAlunos);
});

var alunos = ['Maria', 'João', 'José', 'Pedro', 'Ana', 'Paulo', 'Carlos', 'Marcos']

// function listarAlunos() {
//     var $divAlunos = document.querySelector('#alunos');
//     for(var i = 0; i < alunos.length; i++) {
//         $divAlunos.innerHTML += `<li>${alunos[i]}</li>`;
//     }
//     setTimeout(colorirBotao, 3000);
// }

function listarAlunos() {
    var $divAlunos = document.querySelector('#alunos');
    var $ul = document.createElement('ul');
    $divAlunos.appendChild($ul)

    for(var i = 0; i < alunos.length; i++) {
        var $li = document.createElement('li');
        $li.innerHTML = `<li>${alunos[i]}</li>`;
        $ul.appendChild($li);
        // $li.classList.add('vermelho')
    }

}

function colorirBotao(){
    var $button = document.querySelector('button');
    $button.classList.add('vermelho')
}

