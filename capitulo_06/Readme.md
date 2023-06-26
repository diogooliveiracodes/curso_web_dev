# Capítulo 06 - Projeto Full Stack (26 de junho até 31 de julho) - 16 aulas

## Objetivos do capítulo:

- Criar projetos completos com as tecnologias aprendidas até o momento.

## Projeto 01 - Blog Multi-tenant

- Desenvolver uma aplicação de blog multi-tenant, onde cada usuário pode criar seu blog e publicar posts.
- O sistema fornecerá um subdomínio para cada usuário, onde ele poderá exibir seu blog.

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