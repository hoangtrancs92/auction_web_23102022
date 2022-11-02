<?php

namespace App\Http\Controllers\admins;

use App\Http\Controllers\Controller;
use App\Models\User;

class UserManagerController extends Controller
{
    public function index(){
        $users = User::all();
        return response()->json($users);
    }

}
