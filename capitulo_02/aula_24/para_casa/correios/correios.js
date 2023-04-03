"use strict";
var cep = "35701268";
window.addEventListener("load", function (e) {
    let form = document.querySelector("form");
    let inputCep = document.querySelector("input[name=cep]");
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!validaCep(inputCep.value)) {
            return console.log("CEP inválido");
        }
        console.log("Buscando CEP...");
        buscaCep(inputCep.value);
    });
});
function buscaCep(cep) {
    var url = "http://viacep.com.br/ws/" + cep + "/json/";
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data));
}
function validaCep(cep) {
    let validador = cep.replace("-", "");
    if (validador.length != 8) {
        return false;
    }
    return true;
}
