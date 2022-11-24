<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\examsetup;
use App\Http\Controllers\ExamSetupController;
use App\Http\Resources\ExamSetupResource;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/examsetup/{moduleCode}',function( examsetups $moduleCode){
    return new ExamSetupResource(examsetup::findorFail($moduleCode));
});

Route::get('/examsetups',function(){
    return ExamSetupResource::collection(examsetup::all());
});

Route::put('/examsetup/{moduleCode}',[ExamSetupController::class, 'update']);

Route::delete('/examsetup/{moduleCode}',[ExamSetupController::class,'destroy']);

Route::post('/examsetup',[ExamSetupController::class,'store']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
