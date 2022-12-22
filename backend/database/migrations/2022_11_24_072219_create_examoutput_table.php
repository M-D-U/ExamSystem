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
            $table->string('transactionID')->nullable()->primary();
            $table->string('startTime');
            $table->string('uploadTime');
            $table->string('answerPaperPDF')->nullable();
            $table->string('studentNumber')->index();
            $table->timestamps(false);
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
