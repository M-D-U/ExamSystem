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
        Schema::create('moduleleader', function (Blueprint $table) {
            // $table->string('moduleCode')->unsigned(); 
            // $table->foreign('staffNumber');
            $table->string('staffNumber')->index();
            $table->string('moduleCode')->index();
            // $table->foreignIdFor(moduleinfo::class)->constrained();
            // $table->foreignId('moduleCode')->index()->constrained()->cascadeOnDelete();
            // $table->foreign('moduleCode')->references('moduleCode')->on('moduleinfo')->onDelete('cascade');
            // $table->foreign('moduleCode')->references('moduleCode')->on('moduleinfo'); 
            // $table->string('moduleCode')->foreign();
            // $table->string('staffNumber')->foreign();
            // $table->string('moduleCode')->index();
            // $table->string('staffNumber')->unsigned()->nullable()->index();
            // $table->foreign('moduleCode')->references('moduleCode')->on('moduleinfo')->onUpdate()->onDelete('cascade');
            // $table->foreign('staffNumber')->references('staffNumber')->on('staffinfo')->onUpdate()->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('moduleleader');
    }
};
