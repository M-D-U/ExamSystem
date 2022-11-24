<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\examsetup;

class ExamSetupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return examsetup()::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        return examsetup()::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return examsetup()::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if(examsetup::where('id',$id)->exists()){
            $examsetup = examsetup::find($id);
            $examsetup->dateExam = $request->dateExam;
            $examsetup->examPaperPDF = $request->examPaperPDF;
            $examsetup->moduleCode = $request->moduleCode;

            $examsetup->save();
            return response()->json([
                "message" => "exam updated successfully"
            ],200);
        }else{
            return response()->json([
                "message" => "exam not found"
            ],404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(examsetup::where('moduleCode',$moduleCode)->exists()){
            $examsetup = examsetup::find($moduleCode);
            $examsetup->delete();

            return response()->json([
                "message" => "exam has been successfully deleted"
            ],200);
        }else{
            return response()->json([
                "message"=>"exam was not deleted"
            ],404);
        }
    }
}
