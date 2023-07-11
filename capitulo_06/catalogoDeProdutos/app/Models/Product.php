<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

        protected $fillable = [
            'company_id',
            'category_id',
            'name',
            'description',
        ];

        public function company()
        {
           return $this->belongsTo(Company::class); 
        }

        public function category()
        {
            return $this->belongsTo(Category::class);
        }

        public function photos()
        {
            return $this->hasMany(ProductPhoto::class);
        }
}
