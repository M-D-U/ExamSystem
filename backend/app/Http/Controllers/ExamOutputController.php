<?php

namespace App\Http\Controllers;

use App\Models\examoutput;
use Illuminate\Http\Request;

class ExamOutputController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
        // 
        $completeFileName = new examoutput;
        if($request->hasFile('answerPaperPDF')){
            $completeFileName->transactionID = $request->transactionID;
            $completeFileName->startTime = $request->startTime;
            $completeFileName->uploadTime = $request->uploadTime;
            $completeFileName = $request->file('answerPaperPDF')->getClientOriginalName();
            dd($completeFileName);
            $path = $request->file('answePaperPDF')->storeAs('public/answerPapersPDF', $completeFileName);
            // $uploadPaper->answePaperPDF = $completeFileName;
        }
        if($completeFileName->save()){
            return ['status' => true, 'message' => 'paper is saved'];
        }else{
            return ['status' => false, 'message' => 'paper is not saved'];
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\examoutput  $examoutput
     * @return \Illuminate\Http\Response
     */
    public function show(examoutput $examoutput)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\examoutput  $examoutput
     * @return \Illuminate\Http\Response
     */
    public function edit(examoutput $examoutput)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\examoutput  $examoutput
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, examoutput $examoutput)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\examoutput  $examoutput
     * @return \Illuminate\Http\Response
     */
    public function destroy(examoutput $examoutput)
    {
        //
    }
}