<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Matricula extends Model
{
    use HasFactory;

    protected $fillable = ['aluno_id', 'descricao'];

    public function aluno()
    {
        return $this->belongsTo(Aluno::class);
    }
}
