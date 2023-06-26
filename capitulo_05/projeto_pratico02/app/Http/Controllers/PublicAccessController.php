<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Contact;
use Illuminate\Http\Request;

class PublicAccessController extends Controller
{
    
    public function home()
    {
       $posts = Post::orderBy('created_at','desc')->get()->take(4);
       
        return view('publicViews.home',['posts'=>$posts]);
    }

    public function about()
    {

    }

    public function contact()
    {
        return view('publicViews.contact');
    }

    public function createContact(Request $request)
    {
        Contact::create($request->all());

        return redirect()->route('home');
    }
}
