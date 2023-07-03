<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Publication extends Model
{
    use HasFactory;

    protected $fillable = [
        'blog_id',
        'user_id',
        'title',
        'slug',
        'content',
        'is_active'
    ];

    public function blog()
    {
        return $this->belongsTo(Blog::class);
    }
}
