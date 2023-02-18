const cepForm = document.getElementById("cep-form");
		const cepInput = document.getElementById("cep-input");
		const resultDiv = document.getElementById("result-div");

		cepForm.addEventListener("submit", function(event) {
			event.preventDefault(); // impede que o formulário seja enviado

			const cep = cepInput.value.replace(/\D/g, "");

			const xhr = new XMLHttpRequest();
			xhr.open("GET", `https://viacep.com.br/ws/${cep}/json/`, true);

			xhr.onload = function() {
				if (xhr.status == 200) {
					const data = JSON.parse(xhr.responseText);

					if (data.erro) {
						resultDiv.innerHTML = "CEP não encontrado";
					} else {
						resultDiv.innerHTML = `Endereço: ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
					}
				} else {
					resultDiv.innerHTML = "Erro ao consultar o CEP";
				}
			};

			xhr.send();
		});