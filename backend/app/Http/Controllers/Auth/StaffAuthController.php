<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class StaffAuthController extends Controller
{
    //
    public function login(Request $request)
    {
        $credentials = $request->only('staffEmail', 'staffPassword');

        if (!$token = Auth::guard('staff')->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return response()->json(['token' => $token]);
    }
}
