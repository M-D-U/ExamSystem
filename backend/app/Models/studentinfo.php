<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class studentinfo extends Model
{
    use HasFactory;
    protected $fillable = [
        'studentNumber', 'StudentName', 'studentEmail', 'password'
    ];

    protected $table = 'studentinfo';
    protected $primaryKey = 'studentNumber';
    protected $keyType = 'string';
    public $incrementing = false;
}
