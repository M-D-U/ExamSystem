<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class moduleleader extends Model
{
    use HasFactory;
    protected $fillable = [
        'staffNumber', 'moduleCode'
    ];

    protected $table = 'moduleleader';
}
