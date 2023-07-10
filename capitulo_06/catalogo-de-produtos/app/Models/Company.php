<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'name',
    ];

    /**
     * Get the categories for the company.
     */
    public function categories()
    {
        return $this->hasMany(Category::class);
    }

    /**
     * Get the products for the company.
     */
    public function products()
    {
        return $this->hasMany(Product::class);
    }

    /**
     * Get the photos for the company.
     */
    public function photos()
    {
        return $this->hasMany(ProductPhoto::class);
    }

    /**
     * Get the users for the company.
     */
    public function users()
    {
        return $this->hasMany(User::class);
    }
}
