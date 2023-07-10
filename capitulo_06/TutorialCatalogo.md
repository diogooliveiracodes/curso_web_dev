## Comandos executados:
- Na pasta capitulo_06, crie o projeto com o comando:
```bash
composer create-project --prefer-dist laravel/laravel catalogo-de-produtos
```
- Entre na pasta do projeto:
```bash
cd catalogo-de-produtos
```
- Adicione o Breeze ao projeto:
```bash
composer require laravel/breeze --dev
```
- Instale o Breeze:
```bash
php artisan breeze:install blade --dark
```

- Configure o arquivo na raiz do projeto '.env' com o seguinte nome para o banco de dados:
```bash
DB_DATABASE=catalogo_de_produtos
```
- Crie as entidades:
```bash
php artisan make:model Company -a
php artisan make:model Category -a
php artisan make:model Product -a
php artisan make:model ProductPhoto -a
php artisan make:migration add_company_id_to_users_table
```

- Crie o banco de dados:
```bash
php artisan migrate
```
