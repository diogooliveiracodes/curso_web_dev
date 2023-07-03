<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Post;
use Illuminate\Http\Request;

class PublicAccessController extends Controller
{
    public function home()
    {
        $posts = Post::orderBy('created_at', 'desc')->get()->take(3);

        // FIFO = First in First Out
        // FILO = First in Last Out

        return view('publicviews.home', [
            'posts' => $posts
        ]);
    }

    public function about()
    {

    }

    public function contact()
    {
        return view('publicviews.contact');
    }

    public function createContact(Request $request)
    {
        Contact::create($request->all());

        return redirect()->route('home');
    }
}
