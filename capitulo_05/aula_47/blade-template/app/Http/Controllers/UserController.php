<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request): View
    {
        $alunos = [
            (object)["nome"=>"Maria", "nota"=>10],
            (object)["nome"=>"José", "nota"=>7],
            (object)["nome"=>"João", "nota"=>5],
            (object)["nome"=>"Pedro", "nota"=>3],
            (object)["nome"=>"Bianca", "nota"=>9],
            (object)["nome"=>"Ana", "nota"=>8],
            (object)["nome"=>"Luiza", "nota"=>6],
            (object)["nome"=>"Paulo", "nota"=>4],
            (object)["nome"=>"Carlos", "nota"=>2],
            (object)["nome"=>"Márcio", "nota"=>1],
        ];

        return view('alunos', ['alunos' => $alunos]);
    }
}
