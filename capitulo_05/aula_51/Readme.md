# Aula 51: Migrations, Seeders e Factories (02 de junho - sexta-feira)

## Migrations

- Migrations são arquivos que contém instruções para criação de tabelas no banco de dados.
- As migrations são criadas dentro do diretório `database/migrations`.
- Para criar uma migration, basta executar o comando `php artisan make:migration nome_da_migration`.
- Para executar as migrations, basta executar o comando `php artisan migrate`.
- Para desfazer a última migration, basta executar o comando `php artisan migrate:rollback`.
- Para desfazer todas as migrations, basta executar o comando `php artisan migrate:reset`.
- Para desfazer todas as migrations e executar novamente, basta executar o comando `php artisan migrate:refresh`.

Fonte:
- Documentação Laravel - Migrations:
https://laravel.com/docs/10.x/migrations#creating-tables

## Seeders

- Seeders são arquivos que contém instruções para inserção de dados no banco de dados.
- Os seeders são criados dentro do diretório `database/seeds`.
- Para criar um seeder, basta executar o comando `php artisan make:seeder nome_do_seeder`.
- Para executar os seeders, basta executar o comando `php artisan db:seed`.
- Para executar um seeder específico, basta executar o comando `php artisan db:seed --class=nome_do_seeder`.

## Factories

- Factories são arquivos que contém instruções para criação de dados falsos no banco de dados.
- As factories são criadas dentro do diretório `database/factories`.
- Para criar uma factory, basta executar o comando `php artisan make:factory nome_da_factory`.
- Para executar as factories, basta executar o comando `php artisan db:seed`.
