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
        // return examsetup::create($request->all());
        $examsetup = new examsetup();
        // $refString = "R";
        // $examout->transactionID = $request->input('transactionID') . $refString . '' . random_int(000000000000, 999999999999);//.trim(chunk_split($examout->transactionID), 3); //retrieving user inputs
        $examsetup->moduleCode = $request->input('moduleCode');  //retrieving user inputs
        $examsetup->dateExam = $request->input('dateExam');  //retrieving user inputs
            if($request->hasFile('examPaperPDF')){
                $completeFileName = $request->file('examPaperPDF')->getClientOriginalName();
                $fileNameOnly = pathinfo($completeFileName, PATHINFO_FILENAME);
                $extension = $request->file('examPaperPDF')->getClientOriginalExtension();
                $completePDF = str_replace('', '_', $fileNameOnly) . '_' . rand() . '_' . time() . '.' .$extension;
                $path = $request->file('examPaperPDF')->storeAs('public/examPapers', $completePDF);
                $examsetup->examPaperPDF = $completeFileName;
            }
        // $examout->studentNumber = $request->input('studentNumber');  //retrieving user inputs
        if($examsetup->save()){
                return ['status' => true, 'message' => 'Your exam paper is submitted successfully'];
            }else{
                return ['status' => false, 'message' => 'Exam paper is not saved, please try again'];
             }
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
        $examsetup = new examsetup();
        if(examsetup::where('id',$id)->exists()){
            $examsetup = examsetup::findOrFail($id);
            $examsetup->dateExam = $request->input('dateExam', '2023-01-19');
            //$examout->uploadTime = $request->input('uploadTime');  //retrieving user inputs
            if($request->hasFile('answerPaperPDF')){
                $completeFileName = $request->file('answerPaperPDF')->getClientOriginalName();
                $fileNameOnly = pathinfo($completeFileName, PATHINFO_FILENAME);
                $extension = $request->file('answerPaperPDF')->getClientOriginalExtension();
                $completePDF = str_replace('', '_', $fileNameOnly) . '_' . rand() . '_' . time() . '.' .$extension;
                $path = $request->file('answerPaperPDF')->storeAs('public/answerPapersPDF', $completePDF);
                $examsetup->answerPaperPDF = $completeFileName;
            }
            // $examsetup->moduleCode = 'ICT1117';
            $examsetup->moduleCode = $request->input('moduleCode', 'ICT1113');
            }            
            if($examsetup->save()){
                return response()->json(['message' => 'all went well'], 422);//['status' => true, 'message' => 'Your exam paper is saved'];
            }else{
                return ['status' => false, 'message' => 'Exam paper is not saved, please try again'];
             }
            /* $examsetup->save(){
                return response()->json(['message' => 'all went well'], 422);
            }else{
                
            return response()->json([
                "message" => "couldn't save your exam"
            ],200);
            } */
            
    
    
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
