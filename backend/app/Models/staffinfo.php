<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class staffinfo extends Model
{
    use HasFactory;
    protected $fillable = [
        'staffNumber', 'staffEmail', 'staffPassword'
    ];

    protected $table = 'staffinfo';
    protected $primaryKey = 'staffNumber';
    protected $keyType = 'string';
    public $incrementing = false;
}
