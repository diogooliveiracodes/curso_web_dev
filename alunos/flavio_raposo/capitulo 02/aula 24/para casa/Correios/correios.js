"use strict";
var cep;
window.addEventListener("load", function () {
    let form = document.getElementById("formulario");
    let inputCep = document.getElementById("cep");
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!validaCep(inputCep.value)) {
            return console.log("CEP Inválido");
        }
        console.log("Consultando CEP...");
        consultaCep(inputCep.value);
    });
});
function consultaCep(cep) {
    var url = "http://viacep.com.br/ws/" + cep + "/json/";
    fetch(url)
        .then(resposta => resposta.json())
        .then(data => console.log(data));
}
function validaCep(cep) {
    let validaFormato = cep.replace("-", "");
    if (validaFormato.length != 8) {
        return false;
    }
    return true;
}
