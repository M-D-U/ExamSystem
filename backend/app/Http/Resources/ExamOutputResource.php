<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ExamOutputResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'transactionID' => $this->transactionID,
            'startTime' => $this->startTime,
            'uploadTime' => $this->uploadTime,
            'answerPaperPDF' => $this->answerPaperPDF,
            'studentNumber' => $this->studentNumber,
        ];
    }
}
