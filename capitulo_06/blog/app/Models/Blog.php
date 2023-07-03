<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'template',
        'name',
        'slug'
    ];

    public function publications()
    {
        return $this->hasMany(Publication::class);
    }

}
