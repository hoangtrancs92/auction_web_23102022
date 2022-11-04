<?php

namespace App\Http\Controllers\api\v1\admins;

use App\Http\Controllers\Controller;
use App\Models\User;
use function response;

class UserManagerController extends Controller
{
    public function index(){
        $users = User::all();
        return response()->json($users);
    }

}
