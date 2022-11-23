<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class moduleinfo extends Model
{
    use HasFactory;
    protected $fillable = [
        'moduleCode', 'description'
    ];

    protected $table = 'moduleinfo';
    protected $primaryKey = 'moduleCode';
    protected $keyType = 'string';
    public $incrementing = false;
}
