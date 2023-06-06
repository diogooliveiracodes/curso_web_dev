<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class PublicAccessController extends Controller
{
    public function home()
    {
        return view('publicviews.home');
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
