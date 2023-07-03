# Introdução ao Laravel (22 de maio - segunda-feira)

## O que é um framework?

Um framework é uma estrutura de desenvolvimento de software que fornece um conjunto de ferramentas, bibliotecas e diretrizes para facilitar a criação de aplicativos ou sistemas. Ele oferece uma base sólida e organizada para desenvolver projetos, permitindo que os desenvolvedores se concentrem na lógica de negócios em vez de criar todo o código do zero.

Os frameworks são projetados para agilizar o desenvolvimento, promover a reutilização de código e aumentar a eficiência. Eles fornecem estruturas pré-definidas, bibliotecas de funções e padrões de design que ajudam a acelerar o processo de desenvolvimento. Com um framework, os desenvolvedores não precisam se preocupar em reinventar a roda a cada projeto, pois muitas tarefas comuns já estão implementadas e prontas para uso.

Os frameworks também promovem boas práticas de programação, como a adoção de padrões de arquitetura de software, como o MVC (Model-View-Controller). Eles fornecem uma estrutura organizada para dividir o código em componentes independentes, facilitando a manutenção, a escalabilidade e a colaboração entre desenvolvedores.

Além disso, os frameworks geralmente oferecem recursos adicionais, como gerenciamento de banco de dados, segurança, manipulação de sessões, autenticação de usuários, entre outros. Isso permite que os desenvolvedores se concentrem nas necessidades específicas do projeto, em vez de lidar com aspectos técnicos complexos.

Em resumo, um framework é uma ferramenta poderosa para simplificar e acelerar o processo de desenvolvimento de software, fornecendo uma estrutura organizada, recursos pré-definidos e promovendo boas práticas de programação.

## Qual a diferença de Framework para Biblioteca?

Um framework é uma estrutura abrangente que define a estrutura geral de um aplicativo, enquanto uma biblioteca é um conjunto de recursos reutilizáveis para tarefas específicas. O framework orienta o desenvolvimento, controlando o fluxo do aplicativo, enquanto a biblioteca é utilizada conforme necessário, integrada ao código existente.

## Quais os concorrentes do Laravel no mundo do PHP?

- Symfony: É um framework PHP robusto, de alto desempenho e flexível, que segue uma abordagem modular. Ele oferece uma ampla gama de componentes reutilizáveis e é conhecido por sua estabilidade e escalabilidade.

- CodeIgniter: É um framework PHP leve e fácil de usar, adequado para desenvolvedores que preferem uma abordagem minimalista. Ele oferece recursos essenciais para o desenvolvimento web rápido, sem impor muitas convenções.

- Yii: É um framework PHP de alto desempenho, projetado para construir aplicativos web modernos e escaláveis. O Yii enfatiza o desempenho, a segurança e a extensibilidade, e possui uma ampla gama de recursos e extensões disponíveis.

- Zend Framework: É um framework PHP de uso geral que oferece componentes modulares para o desenvolvimento de aplicativos web robustos e escaláveis. Ele segue uma abordagem orientada a objetos e promove a reutilização de código.

- CakePHP: É um framework PHP de código aberto e fácil de aprender, que segue a convenção sobre configuração. Ele enfatiza a facilidade de uso e a produtividade do desenvolvedor, fornecendo recursos como geração automática de código e scaffolding.

## Ranking dos Frameworks PHP no github (22/05/2023):

- Laravel - 529.0k repositórios
- Symfony - 78.9k repositórios
- CodeIgniter - 38.0k repositórios
- Yii - 41.4k repositórios
- Zend Framework - 15.3k repositórios
- CakePHP - 12.5k repositórios

## Concorrentes fora do mundo PHP:

- Express - 565k repositórios (Javascript) 
- Django - 689k repositórios (Python)
- Ruby on Rails - 460k repositórios (Ruby)
- Spring 1.3M repositórios (Java)
- ASP.NET 226k repositórios (C#)

## Criando seu primeiro projeto Laravel:

Pré Requisitos:
- Instalar o composer: https://getcomposer.org/download/
- Instale o NodeJS: https://nodejs.org/en/download/
- Crie um banco de dados no MySQL chamado "laravel"

Criação do projeto:
```
composer create-project laravel/laravel example-app
```

Instalação do Jetstream:
```
composer require laravel/jetstream
php artisan jetstream:install inertia --teams --dark
```

Executar Migrações:
```
php artisan migrate
```

Rodar o projeto localmente:
```
php artisan serve
```

## Arquitetura MVC:

O Laravel segue o padrão de arquitetura MVC (Model-View-Controller), que separa a aplicação em três camadas: Model, View e Controller. O MVC é um padrão de projeto que promove uma estrutura organizada, facilitando a manutenção e a escalabilidade do projeto.

- Model: É a camada de dados, que representa a estrutura de dados e a lógica de negócios da aplicação. Ela é responsável por acessar e manipular os dados do banco de dados, e geralmente é implementada com o uso de um ORM (Object-Relational Mapping) (Eloquent).

- View: É a camada de apresentação, que representa a interface do usuário. Ela é responsável por exibir os dados para o usuário, e geralmente é implementada com o uso de um template engine (Blade).

- Controller: É a camada de controle, que representa a lógica de controle da aplicação. Ela é responsável por receber as requisições do usuário, processá-las e retornar uma resposta, geralmente na forma de uma view.





