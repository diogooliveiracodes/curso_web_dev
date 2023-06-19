# Aula 49: Rotas (29 de maio - segunda-feira)

## Preparação para a aula:
Criar projeto laravel com o comando:
```bash
composer create-project --prefer-dist laravel/laravel projeto-rotas
```
Abrir o diretório do novo projeto:
```bash
cd projeto-rotas
```
Iniciar o servidor:
```bash
php artisan serve
```

## Introdução

Rotas são entradas para seu aplicativo. Cada rota define uma resposta para uma determinada solicitação HTTP. Por exemplo, a seguinte rota responde a solicitações HTTP para a URL /ola com um texto simples "Olá Mundo!":

```php
use Illuminate\Support\Facades\Route;
 
Route::get('/ola', function () {
    return 'Olá Mundo!';
});
```

Todas as rotas do Laravel são definidas em seus arquivos de rota, que estão localizados no diretório de rotas. Esses arquivos são carregados automaticamente pelo App\Providers\RouteServiceProvider do seu aplicativo. O arquivo routes/web.php define as rotas que são para sua interface web. Essas rotas são atribuídas ao grupo de middleware da web, que fornece recursos como estado da sessão e proteção CSRF.

Para a maioria dos aplicativos, você começará definindo rotas em seu arquivo routes/web.php. As rotas definidas em routes/web.php podem ser acessadas inserindo a URL da rota definida em seu navegador. Por exemplo, você pode acessar a seguinte rota navegando para http://localhost:8000/ola em seu navegador:

As rotas em routes/api.php são utilizadas para rotas de API. Essas rotas são automaticamente atribuídas ao grupo de middleware da API, que fornece recursos como proteção de taxa de acesso e serialização de resposta JSON. As rotas da API também são isoladas do estado da sessão do aplicativo. E todas elas por padrão respondem com o prefixo /api.

## Passando parâmetros para rotas

Rotas podem aceitar parâmetros, que são inseridos na URL da rota. Por exemplo, considere a seguinte rota definida no arquivo routes/web.php:

```php
Route::get('/ola/{nome}', function ($nome) {
    return 'Olá ' . $nome;
});
```

Você pode acessar essa rota definindo uma rota que contém um valor de nome. Por exemplo, você pode acessar essa rota navegando para http://localhost:8000/ola/Diogo em seu navegador. Observe que o valor de nome é passado para a função de retorno de chamada como um argumento.

Você pode definir quantos parâmetros de rota desejar. Você não está limitado a apenas um. Por exemplo, você pode definir a seguinte rota no arquivo routes/web.php:

```php
Route::get('/ola/{nome}/{sobrenome}', function ($nome, $sobrenome) {
    return 'Olá ' . $nome . ' ' . $sobrenome;
});
```

Você pode acessar essa rota definindo uma rota que contém um valor de nome e sobrenome. Por exemplo, você pode acessar essa rota navegando para http://localhost:8000/ola/Diogo/Oliveira em seu navegador. Observe que os valores de nome e sobrenome são passados para a função de retorno de chamada como argumentos.

## Parâmetros opcionais

Às vezes, você pode desejar definir um parâmetro de rota que é opcional. Você pode fazer um parâmetro opcional colocando um ponto de interrogação após o nome do parâmetro. Certifique-se de dar a seu parâmetro opcional um valor padrão:

```php
Route::get('/ola/{nome?}', function ($nome = null) {
    return 'Olá ' . $nome;
});
```

Você pode acessar essa rota definindo uma rota que contém um valor de nome. Por exemplo, você pode acessar essa rota navegando para http://localhost:8000/ola/Diogo em seu navegador. Observe que o valor de nome é passado para a função de retorno de chamada como um argumento.

Você também pode definir um valor padrão para um parâmetro de rota opcional. Isso permite que você defina uma rota que corresponda a uma rota que sempre forneça um valor para um determinado parâmetro de rota. Por exemplo, você pode definir a seguinte rota no arquivo routes/web.php:

```php
Route::get('/ola/{nome?}', function ($nome = 'Diogo') {
    return 'Olá ' . $nome;
});
```
## Métodos disponíveis para rotas

O Laravel fornece vários métodos convenientes para definir uma rota:

```php
Route::get($uri, $callback);
Route::post($uri, $callback);
Route::put($uri, $callback);
Route::patch($uri, $callback);
Route::delete($uri, $callback);
Route::options($uri, $callback);
```

Às vezes, você pode precisar registrar uma rota que responda a vários verbos HTTP. Você pode fazer isso usando o método match. Ou, você pode até mesmo registrar uma rota que responda a todos os verbos HTTP usando o método any:

```php
Route::match(['get', 'post'], '/', function () {
    //
});

Route::any('/', function () {
    //
});
```

## Rotas nomeadas

Rotas nomeadas permitem gerar facilmente URLs ou redirecionar para rotas específicas. Você pode especificar um nome para uma rota definindo o nome da rota após o método de rota:

```php
Route::get('/ola', function () {
    //
})->name('ola');
```

Você pode gerar uma URL para uma rota nomeada usando o método route em uma instância do URL helper:

```php
$url = route('ola');
```

Se a rota nomeada define parâmetros, você pode passar os parâmetros como o segundo argumento para o método route. Os valores de parâmetro serão inseridos automaticamente na URL gerada:

```php
Route::get('/ola/{nome}', function ($nome) {
    //
})->name('ola');

$url = route('ola', ['nome' => 'Diogo']);
```

## Utilizando Controllers

Em vez de definir toda a lógica de roteamento em uma única rota, você pode organizar esse comportamento usando classes de controller. Os controllers podem agrupar a lógica de roteamento relacionada em uma única classe. Os controllers são armazenados no diretório app/Http/Controllers.

Observe que o primeiro parâmetro trata-se da url e o segundo parâmetro trata-se do controller e do método que será executado.

Route::get( Rota, [ Controller, Método do Controller' ]);
```php
use App\Http\Controllers\UserController;

Route::get('/users', [UserController::class, 'index']);
```

Você pode utilizar mais de um método na mesma rota e responder com o mesmo controller utilizando um método do controller diferente.

```php
use App\Http\Controllers\UserController;

Route::post('/users', [UserController::class, 'store']);
```

## Resource

O Laravel fornece uma maneira simples de declarar um conjunto de rotas de "recurso" para um controller. Em vez de declarar rotas separadas para seus métodos de controller, você pode declarar um único rota de recurso para lidar com todos os métodos que podem ser executados em um controller.

```php
Route::resource('photos', PhotoController::class);
```

Este método irá gerar as seguintes rotas:

```php
Verb          Path                        Action  Route Name
GET           /photos                     index   photos.index
GET           /photos/create              create  photos.create
POST          /photos                     store   photos.store
GET           /photos/{photo}             show    photos.show
GET           /photos/{photo}/edit        edit    photos.edit
PUT|PATCH     /photos/{photo}             update  photos.update
DELETE        /photos/{photo}             destroy photos.destroy
```

Obs: Com um único comando no console você consegue criar o Modelo, Controller e as Migrations.

```php
php artisan make:model Photo -mcr
```

## Existem diversas outras funcionalidades que podem ser utilizadas no Laravel, para saber mais acesse a documentação oficial do Laravel.

### Tópicos importantes:

- Grupos de rotas.
- Rotas de subdomínio.
- Prefixos.


https://laravel.com/docs/10.x/routing




