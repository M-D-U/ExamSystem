<?php

namespace App\Http\Controllers;

use Dotenv\Util\Str;
use Illuminate\Http\Request;
use App\Models\examsetup;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

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
        return examsetup::all();
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
        return examsetup::create($request->all());
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
        return examsetup::find($id);
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
            if($request->hasFile('examPaperPDF')){
            $completeFileName = $request->file('examPaperPDF')->getClientOriginalName();
            //    $fileNameOnly = pathinfo($completeFileName, PATHINFO_ALL);
            //    $extension = $request->file('examPaperPDF')->getClientOriginalExtension();
            //    $filename = str_replace('','_',$fileNameOnly).'-'.rand().'_'.time().'.'.$extension;
            $path = $request->file('examPaperPDF')->storeAs('public/examPapers',$completeFileName);
            dd($path);
            }
            $examsetup->moduleCode = $request->moduleCode;
            
            $examsetup->save();
                return response()->json(['message' => 'all went well'], 422);
            }else{
                
            return response()->json([
                "message" => "couldn't save your exam"
            ],200);
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
        if(examsetup::where('id',$id)->exists()){
            $examsetup = examsetup::find($id);
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

    public function file(request $request){
        $examsetup = new examsetup;
        $examsetup->dateExam = $request->dateExam;
            if($request->hasFile('examPaperPDF')){
            $completeFileName = $request->file('examPaperPDF')->getClientOriginalName();
            //    $fileNameOnly = pathinfo($completeFileName, PATHINFO_ALL);
            //    $extension = $request->file('examPaperPDF')->getClientOriginalExtension();
            //    $filename = str_replace('','_',$fileNameOnly).'-'.rand().'_'.time().'.'.$extension;
            $path = $request->file('examPaperPDF')->storeAs('public/examPapers',$completeFileName);
            dd($path);
            }
            $examsetup->moduleCode = $request->moduleCode;
            
            $examsetup->save();
                return response()->json(['message' => 'all went well'], 422);
            /* else{
                
            return response()->json([
                "message" => "couldn't save your exam"
            ],200);
            } */
    }
    /* public function editExam(Request $request){
        $fileName = "ICT3715-22-Y_ Assessment 4.pdf";
        $path = $request->file('document')->move(public_path("/"), $fileName);
        $pdfURL = url('/'.$fileName);
        return response()->json([
            'url' => $pdfURL
        ],200);
    } */
}
