<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aluno extends Model
{
    use HasFactory;
    protected $fillable = ['nome', 'email'];
    protected $hidden = ['password'];

    // Um para um
    public function endereco()
    {
        return $this->hasOne(Endereco::class);
    }

    // Um para muitos
    public function matriculas()
    {
        return $this->hasMany(Matricula::class);
    }
}
