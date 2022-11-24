<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class studentmodule extends Model
{
    use HasFactory;
    protected $fillable = [
        'studentNumber', 'moduleCode'
    ];

    protected $table = 'studentmodule';
}
