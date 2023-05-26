<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::get('/entrar', function () {
    return view('login');
})->name('login');

Route::post('/entrar', function () {
    echo 'Entrando...';
})->name('entrar');

Route::get('/alunos', function () {
    return view ('alunos');
})->name('listar.alunos');
