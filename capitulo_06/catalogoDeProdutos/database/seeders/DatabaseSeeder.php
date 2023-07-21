<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Category;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $company = \App\Models\Company::create([
            'name' => 'Test Company',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        \App\Models\User::create([
            'name'=>'Test User',
            'email'=>'teste@email.com',
            'password'=>bcrypt('123456789'),
            'created_at'=> now(),
            'updated_at'=>now(),
            'company_id'=> $company->id
        ]);

        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        Category::factory(10)->create();
        \App\Models\Product::factory(200)->create();
    }
}
