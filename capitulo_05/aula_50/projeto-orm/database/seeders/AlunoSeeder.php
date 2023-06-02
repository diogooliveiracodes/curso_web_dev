<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AlunoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Aluno::factory(30)->create()->each(function ($aluno) {
            $aluno->endereco()->saveMany(\App\Models\Endereco::factory(1)->make());
            $aluno->matricula()->saveMany(\App\Models\Matricula::factory(5)->make());
        });
    }
}
