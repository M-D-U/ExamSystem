<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class examsetup extends Model
{
    use HasFactory;
    protected $fillable = [
        'dateExam', 'examPaperPDF','moduleCode'
    ];

    public function getRouteKeyName() {
        return 'moduleCode';
    }
    protected $table = 'examsetup';
}
