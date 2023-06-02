<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aluno extends Model
{
    use HasFactory;

    protected $fillable = ['nome', 'email'];
    protected $hidden = ['password'];
    protected $connection = 'mysql';
    protected $table = 'estudantes';

}
