<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ExamSetupResource extends JsonResource
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
            'id' => $this->id,
            'dateExam' => $this->dateExam,
            'examPaperPDF' => $this->examPaperPDF,
            'moduleCode' => $this->moduleCode,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
