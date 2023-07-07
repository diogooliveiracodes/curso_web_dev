<?php

use App\Http\Controllers\ProfileController;
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
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('publications', App\Http\Controllers\PublicationController::class);
    Route::put('/template', [App\Http\Controllers\BlogController::class, 'updateBlogTemplate'])
        ->name('template.update');
});


require __DIR__.'/auth.php';

Route::get('/{slug}', [App\Http\Controllers\BlogController::class, 'publicGetBlog'])
    ->name('public.get.blog');
Route::get('/{slug}/{publication}', [App\Http\Controllers\BlogController::class, 'publicGetPublication'])
    ->name('blog.publication.show');
