<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductPhoto extends Model
{
    use HasFactory;

        protected $fillable = [
            'company_id',
            'product_id',
            'path',
            'name',
        ];

        public function company()
        {
            return $this->belongsTo(Company::class);
        }

        public function product()
        {
            return $this->belongsTo(Product::class);
        }
}
