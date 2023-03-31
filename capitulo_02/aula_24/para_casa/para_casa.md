# Para Casa

## Requisições assíncronas

### Correios
- 1- Crie uma requisição para a API dos correios, que retorne o endereço completo de um CEP.
- 2- Adicione um formulário para que o usuário possa inserir o CEP e a requisição passe a funcionar através do evento "submit".
- 3- Adicione validações para verificar a quantidade de caracteres do CEP e se o CEP é válido.

### Pokemon
- 1- Crie uma requisição para a API do Pokemon, que retorne um Pokemon através do nome.
- 2- Adicione um formulário para que o usuário possa inserir o nome do Pokemon e a requisição passe a funcionar através do evento "submit".
- 3- Adicione validações para verificar se o nome do Pokemon é válido.
- 4- Adicione um botão para que o usuário possa limpar o campo de nome do Pokemon.
- 5- Imprima na tela a foto do Pokemon e alguns atributos do mesmo.

## Typescript

### Tipos
- 1- Crie uma função que receba dois números como parâmetros e retorne a soma deles. Defina o tipo de dados dos parâmetros e do retorno da função.
- 2- Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Defina o tipo de dados dos parâmetros e do retorno da função.
- 3- Crie uma função que receba um número e retorne se ele é par ou ímpar. Defina o tipo de dados do parâmetro e do retorno da função.
- 4- Crie uma função que receba um número e retorne seu fatorial. Defina o tipo de dados do parâmetro e do retorno da função.
- 5- Crie uma função que receba uma string e retorne seu tamanho. Defina o tipo de dados do parâmetro e do retorno da função.
- 6- Crie uma função que receba uma string e retorne ela em letras maiúsculas. Defina o tipo de dados do parâmetro e do retorno da função.

### Classes, Módulos, Namespace e Interfaces no TypeScript
- 1- Crie uma classe chamada "Pessoa" que tenha as propriedades "nome" e "idade".
- 2- Crie uma classe chamada "Funcionario" que herde da classe "Pessoa" e tenha a propriedade adicional "salario". Defina o tipo de dados dessa propriedade e crie um construtor que aceite valores para todas as propriedades.
- 3- Crie uma classe chamada "Cliente" que herde da classe "Pessoa" e tenha a propriedade adicional "cpf". Defina o tipo de dados dessa propriedade e crie um construtor que aceite valores para todas as propriedades.
- 4- Crie uma classe chamada "Produto" que tenha as propriedades "nome" e "valor".
- 5- Crie uma classe chamada "Carrinho" que tenha as propriedades "itens" e "cliente". A propriedade "itens"" deve ser um ARRAY de objetos do tipo "Produto". A propriedade "cliente" deve ser um objeto do tipo "Cliente".
- 6- Crie uma classe chamada "Venda" que tenha as propriedades "cliente", "vendedor", "valorTotal", "comissaoVendedor" e "itens". A propriedade "cliente" deve ser um objeto do tipo "Cliente". A propriedade "vendedor" deve ser um objeto do tipo "Funcionario". A propriedade "valorTotal" deve ser um número. A propriedade "comissaoVendedor" deve ser um número. A propriedade "itens" deve ser um ARRAY de objetos do tipo "Produto".
- 7- Crie uma função para efetuar uma venda.
- 8- Separe as classes em arquivos diferentes e crie um arquivo chamado "app.ts" para importar as classes e executar a função de venda.
- 9- Crie um namespace chamado "CPF" e crie uma função chamada "validar" que receba um CPF como parâmetro e retorne se ele é válido ou não. Defina o tipo de dados do parâmetro e do retorno da função.
- 10- Crie um namespace chamado "CNPJ" e crie uma função chamada "validar" que receba um CNPJ como parâmetro e retorne se ele é válido ou não. Defina o tipo de dados do parâmetro e do retorno da função.
- 11- Adicione uma validação para verificar se o CPF ou CNPJ do cliente é válido.