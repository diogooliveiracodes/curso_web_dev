<?php

use App\Http\Controllers\ArtigoController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Models\Artigo;

Route::get('/', function () {
    return view('welcome');
});

// http://localhost:8000/ola/Diogo/Oliveira
Route::get('/novonome/{nome?}/{sobrenome?}', function ($nome = null, $sobrenome = 'Oliveira') {
    return 'Olá Mundo! '. $nome . ' - ' . $sobrenome ;
})->name('ola');



Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store'])->name('users.store');
Route::get('/users/create', [UserController::class, 'create'])->name('users.create');
// Route::get('/users/{id}', [UserController::class, 'show']);

Route::resource('artigos', ArtigoController::class);
