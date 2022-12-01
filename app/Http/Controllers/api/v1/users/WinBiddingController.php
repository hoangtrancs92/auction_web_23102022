<?php

namespace App\Http\Controllers\api\v1\users;

use App\Http\Controllers\Controller;
use App\Models\WinBidding;
use Illuminate\Http\Request;

class WinBiddingController extends Controller
{
    public function index()
    {
        //
    }

    public function store(Request $request)
    {
        WinBidding::create([
            'id_bid' => $request->id,
            'id_payment'=> 1,
            'id_user' => $request->id_user,
            'id_transport_admin' => 1
        ]);
    }


    public function show(WinBidding $winBidding)
    {
        //
    }

}
