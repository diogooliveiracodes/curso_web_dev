<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PublicAccessController;
use App\Models\Contact;
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

Route::get('/leads', function(){
    $leads = Contact::orderBy('created_at', 'desc')->get();
    return view('lead.index', [
        'leads' => $leads
    ]);
})->name('lead.index');

// Route::resource('post', PostController::class);





// LARAVEL BREEZE
Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {

    Route::get('/post/create', [PostController::class, 'create'])->name('post.create');
    Route::post('/post', [PostController::class, 'store'])->name('post.store');
    Route::get('/post/{post}/edit', [PostController::class, 'edit'])->name('post.edit');
    Route::put('/post/{post}', [PostController::class, 'update'])->name('post.update');
    Route::delete('/post/{post}', [PostController::class, 'destroy'])->name('post.destroy');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/post', [PostController::class, 'index'])->name('post.index');
Route::get('/post/{post}', [PostController::class, 'show'])->name('post.show');

require __DIR__.'/auth.php';
