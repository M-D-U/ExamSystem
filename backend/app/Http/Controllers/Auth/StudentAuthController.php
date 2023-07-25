<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator; 

class StudentAuthController extends Controller
{
    //
    public function login(Request $request)
    {
        $credentials = $request->only('studentEmail', 'studentPassword');

    // Validate the presence of 'studentEmail' field
    // $validator = Validator::make($credentials, [
    //     'studentEmail' => 'required|email',
    //     'studentPassword' => 'required|password'
    // ]);

    // if ($validator->fails()) {
    //     return response()->json(['error' => 'Invalid credentials'], 400);
    // }

    // // Treat NULL password as an empty string
    // if ($request->input('studentPassword') === null) {
    //     $credentials['studentPassword'] = '';
    // }

    if (!$token = JWTAuth::attempt($credentials)) {
        return response()->json(['error' => 'Unauthorized user'], 401);
    }

    return response()->json(['token' => $token]);
    }
}