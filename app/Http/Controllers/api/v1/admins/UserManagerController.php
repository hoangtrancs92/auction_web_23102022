<?php

namespace App\Http\Controllers\api\v1\admins;

use App\Http\Controllers\Controller;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use function response;

class UserManagerController extends Controller
{
    public function index(){
//        $users = DB::table('users')->get();
        $users =  User::orderBy("created_at", "desc")->get();

//        $users = User::all()->sortByDesc("created_at");
        return response()->json($users);
    }
    public function store(Request $request) {
        $user = new User([
            'firstname' => $request->input('firstname'),
            'lastname' => $request->input('lastname'),
            'email'    => $request->input('email'),
            'sex' => $request->input('sex'),
            'birthday' => $request->date('birthday'),
            'address' => $request->input('address'),
//            'image' => '../',
            'phone' => $request->input('phone'),
            'password'=> Hash::make(123456),
            'created_by' => 'admin'
        ]);
        $user->save();
        return response()->json('Tạo tài khoản thành công');
    }
    public function update($id,Request $request){
        $user = User::find($id);
        $user->update($request->all());
        return response()->json('Sửa thông tin thành công');
    }
        public function destroy($id) {
        $user = User::find($id);
        $user->delete();
        return response()->json('Xoá thành công');
    }
//    public function show($id) {
//        $account = Account::find($id);
//        return response()->json($account);
//    }
//    public function update($id, Request $request) {
//        $account = Account::find($id);
//        $account->update($request->all());
//        return response()->json('account updated!');
//    }


}
