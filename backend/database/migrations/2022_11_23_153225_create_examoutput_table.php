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
        Schema::create('examoutput', function (Blueprint $table) {
            $table->string('transactionID')->primary();
            $table->dateTime('startTime')->nullable();
            $table->dateTime('uploadTime')->nullable();
            $table->string('answerPaperPDF')->nullable();
            $table->string('studentNumber')->index();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('examoutput');
    }
};
