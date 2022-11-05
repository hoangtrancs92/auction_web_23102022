<?php

namespace App\Http\Controllers\api\v1\admins;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use function response;

class UserManagerController extends Controller
{
    public function index(){
        $users = User::all();
        return response()->json($users);
    }
    public function store(Request $request) {
        $user = new User([
            'firstname' => $request->input('name'),
            'lastname' => $request->input('lastname')
        ]);
        $user->save();
        return response()->json('user created!');
    }

}
