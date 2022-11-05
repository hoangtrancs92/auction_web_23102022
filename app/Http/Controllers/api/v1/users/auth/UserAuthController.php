<?php

namespace App\Http\Controllers\api\v1\users\auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserAuthController extends Controller
{
    public function login( Request $request ){
        try {
            $request->validate([
                'email' => 'required',
                'password' => 'required'
            ],
                [
                    'email.required' => 'Bạn phải nhập email vào',
                    'password.required' => 'Bạn phải nhập password vào',
                ]);
            $credentials = request(['email', 'password']);
//            if (!Auth::attempt($credentials)) {
//                return response()->json([
//                    'status_code' => 500,
//                    'message' => 'Sai thông tin đăng nhập'
//                ]);
//            }
            $admin = user::where('email', $request->email)->first();
            if (!Hash::check($request->password, $admin->password, [])) {
                throw new \Exception('Error in Login loi dell gi vay');
            }
            $tokenResult = $admin->createToken('authToken', ['server:update'])->plainTextToken;
            return response()->json([
                'admin' => $admin,
                'status_code' => 200,
                'access_token' => $tokenResult,
                'token_type' => 'Bearer',
            ]);
        } catch (\Exception $error) {
            return response()->json([
                'status_code' => 500,
                'message' => 'Error in Login',
                'error' => $error->getMessage(),
            ]);
        }
    }
}
