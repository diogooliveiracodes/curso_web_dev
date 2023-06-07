<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PublicAccessController;
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

Route::get('/', [PublicAccessController::class, 'home'])->name('home');
Route::get('/about', [PublicAccessController::class, 'about'])->name('about');
Route::get('/contact', [PublicAccessController::class, 'contact'])->name('contact');
Route::post('/contact', [PublicAccessController::class, 'createContact'])->name('create.contact');

Route::resource('post', PostController::class);

// Route::get('/post', [PostController::class, 'index'])->name('post.index');
// Route::post('/post', [PostController::class, 'store'])->name('post.store');

// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__.'/auth.php';
