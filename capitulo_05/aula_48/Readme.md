# Aula 48: Controllers (26 de maio - sexta-feira)

## Introdução

Em vez de definir toda a lógica de manipulação de solicitações como fechamentos em seus arquivos de rota, convém organizar esse comportamento usando classes "controller". Os controladores podem agrupar a lógica de tratamento de solicitações relacionadas em uma única classe. Por exemplo, uma classe pode lidar com todas as solicitações de entrada relacionadas a usuários, incluindo mostrar, criar, atualizar e excluir usuários.

Para gerar rapidamente um novo controlador, você pode executar o comando Artisan:
```bash
php artisan make:controller UserController
```
Por padrão, todos os controladores para seu aplicativo são armazenados no diretório: App/Http/Controllers

## Sintaxe Básica

```php
<?php
 
namespace App\Http\Controllers;
 
use App\Models\User;
use Illuminate\View\View;
 
class UserController extends Controller
{
    /**
     * Show the profile for a given user.
     */
    public function show(string $id): View
    {
        return view('user.profile', [
            'user' => User::findOrFail($id)
        ]);
    }
}
```

Depois de escrever uma classe e um método de controlador, você pode definir uma rota para o método de controlador da seguinte forma:

```php	
use App\Http\Controllers\UserController;
 
Route::get('/user/{id}', [UserController::class, 'show']);
```