<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class examoutput extends Model
{
    use HasFactory;
    protected $fillable = [
        'transactionID', 'startTime','uploadTime','answerPaperPDF','studentNumber'
    ];

    protected $table = 'examoutput';
}
