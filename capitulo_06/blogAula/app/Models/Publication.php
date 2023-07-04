<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Publication extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'user_id',
        'blog_id',
        'slug',
        'is_active'
    ];

    public function blog()
    {
        return $this->belongsTo(Blog::class);
    }
}


