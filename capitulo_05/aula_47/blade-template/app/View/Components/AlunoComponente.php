<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class AlunoComponente extends Component
{
    public $message;

    public function __construct(string $message)
    {
        $this->message = $message;
    }


    public function render(): View|Closure|string
    {
        return view('components.aluno-componente');
    }
}
