## Blog Multi Tenant

- Desenvolver uma aplicação de blog multi-tenant, onde cada usuário pode criar seu blog e publicar posts.
- O sistema fornecerá um subdomínio para cada usuário, onde ele poderá exibir seu blog.

## Comandos executados:

### Criar projeto do zero:
```bash
composer create-project --prefer-dist laravel/laravel blog
composer require laravel/breeze --dev
php artisan breeze:install --dark
php artisan migrate
php artisan serve
```

### Clonando repositório:
```bash
git clone ...
composer install
php artisan migrate
npm install
npm run dev
php artisan serve
```