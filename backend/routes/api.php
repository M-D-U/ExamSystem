<?php

use App\Models\examoutput;
use App\Models\moduleinfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\examsetup;
use App\Http\Controllers\ExamSetupController;
use App\Http\Resources\ExamSetupResource;
use App\Http\Controllers\ExamOutputController;
use App\Http\Resources\ExamOutputResource;
use App\Http\Resources\ModuleInfoResource;

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




// module info  routes
Route::get('/moduleinfo',function(){
    return ModuleInfoResource::collection(moduleinfo::all());
});

// exam setup routes
Route::put('/examsetup/{id}',[ExamSetupController::class, 'update']);

Route::delete('/examsetup/{id}',[ExamSetupController::class,'destroy']);

Route::post('/examsetup',[ExamSetupController::class,'store']);

Route::get('/examsetups',function(){
    return ExamSetupResource::collection(examsetup::all());
});

Route::get('/examsetup/{id}',function($id){
    return new ExamSetupResource(examsetup::findorFail($id));
});

// exam output routes
Route::post('/examoutput',[ExamOutputController::class,'store']);

Route::get('/examoutputs',function(){
    return ExamOutputResource::collection(examoutput::all());
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
