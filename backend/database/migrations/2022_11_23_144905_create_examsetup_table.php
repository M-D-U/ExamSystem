<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('examsetup', function (Blueprint $table) {
            $table->date('dateExam')->nullable();
            $table->string('examPaperPDF')->nullable();
            $table->string('moduleCode')->index();//this syntax allows relationships between the tables
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('examsetup');
    }
};
