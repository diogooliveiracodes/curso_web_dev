var cep:string;
window.addEventListener("load",function() {
  let form = document.getElementById("formulario");
  let inputCep = document.getElementById("cep");
     
  form?.addEventListener("submit", function (e){
    e.preventDefault();
    
    if (!validaCep(inputCep.value)) {
        return console.log("CEP Inválido")
      }
    console.log("Consultando CEP...");
    consultaCep(inputCep.value);

  });
});

function consultaCep(cep:string):void {
    var url:string = "http://viacep.com.br/ws/"+cep+"/json/";
    fetch (url)
    .then(resposta => resposta.json())
    .then(data => console.log(data));

   
}

function validaCep (cep:string): boolean {
    let validaFormato = cep.replace("-","");
    if (validaFormato.length !=8) {
        return false;
    }
    return true;
}


