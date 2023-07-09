<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductPhoto extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'company_id',
        'product_id',
        'path',
        'name'
    ];

    /**
     * Get the company that owns the product photo.
     */
    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    /**
     * Get the product that owns the product photo.
     */
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
