# Aula 4: Trabalhando com tabelas (13 de fevereiro - segunda-feira)

### Criando tabelas no HTML: 
O que são tabelas: As tabelas são elementos HTML utilizados para exibir dados em formato de linhas e colunas, de maneira organizada e fácil de ler. Elas são amplamente utilizadas para exibir dados estruturados, como listas de produtos, horários de funcionamento, tabelas de preços, entre outros.

Como estruturar uma tabela usando tags HTML: Para criar uma tabela, é necessário utilizar as tags <table>, <tr>, <th> e <td>. A tag <table> é usada para definir o início e o fim da tabela. A tag <tr> é usada para definir uma linha na tabela, e as tags <th> e <td> são utilizadas para definir cabeçalhos e células, respectivamente. É importante notar que os cabeçalhos são geralmente usados para exibir informações de colunas, enquanto as células são utilizadas para exibir dados propriamente ditos.

### Estilizando tabelas com CSS: 
Como aplicar estilos de fontes, cores e bordas nas tabelas: Utilizando seletores CSS é possível aplicar estilos de fontes, cores e bordas nas tabelas. Por exemplo, para mudar a cor da fonte dos cabeçalhos, pode-se utilizar o seletor table th e definir a propriedade color com o valor desejado.
Para mudar a cor de fundo de uma célula, pode-se utilizar o seletor table td e definir a propriedade background-color com o valor desejado.
Para mudar a cor da borda da tabela, pode-se utilizar o seletor table e definir a propriedade border-color com o valor desejado.

Exemplo de código CSS para estilizar uma tabela:
table {
    width: 100%;
    border-collapse: collapse;
}

table th {
    background-color: #ddd;
    color: #333;
    font-weight: bold;
    text-align: left;
}

table td {
    border: 1px solid #ccc;
    padding: 8px;
}

Como alinhar o conteúdo dentro das células: Utilizando a propriedade text-align é possível alinhar o conteúdo dentro das células. Pode-se utilizar os valores left, center ou right para alinhar o conteúdo à esquerda, no centro ou à direita, respectivamente.

table td {
    text-align: center;
}

-É importante lembrar que esses são apenas exemplos básicos de estilo, existem muitas outras propriedades e seletores que podem ser usados para estilizar tabelas e personalizar a sua aparência.

### Utilizando o componente de tabela do Bootstrap: 
Como utilizar o componente de tabela do Bootstrap para criar tabelas responsivas e com estilo pré-definido. Explicar como utilizar classes do Bootstrap para estilizar a tabela e mostrar exemplos de código.

CDN
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

## Exercícios práticos: 
1 - Crie uma tabela simples usando HTML com 5 linhas e 3 colunas, preencha as células com conteúdo de sua escolha. Adicione estilos com CSS para melhorar a aparência da tabela, como bordas, cores e alinhamentos. Certifique-se de que a tabela está formatada corretamente e fácil de ler.

2 - Crie uma tabela HTML com cabeçalhos e rodapés, usando as tags <thead>, <tbody> e <tfoot>. Adicione estilos para destacar essas áreas da tabela. Certifique-se de que os cabeçalhos e rodapés estão sendo exibidos corretamente e que o conteúdo está sendo exibido na área correta.

3 - Crie uma tabela HTML com colunas que se ajustam automaticamente ao tamanho do conteúdo usando o atributo 'table-layout:auto'. Certifique-se de que as colunas estão se ajustando corretamente ao conteúdo e que a tabela está sendo exibida de forma responsiva.

4 - Crie uma tabela HTML com células que se estendem por mais de uma linha ou coluna usando o atributo 'colspan' e 'rowspan'. Certifique-se de que as células estão se estendendo corretamente e que a tabela está sendo exibida corretamente.
