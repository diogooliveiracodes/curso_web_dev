<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return "Olá aos usuários";
    }

    public function show($id)
    {
        return "Exibindo o usuário de id: {$id}";
    }

    public function create()
    {
        return view ('users.create');
    }

    public function store(Request $request)
    {
        //Salva no banco de dados

        return response($request->primeiro + $request->segundo, 202);
    }
}
