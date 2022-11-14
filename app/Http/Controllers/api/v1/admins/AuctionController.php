<?php

namespace App\Http\Controllers\api\v1\admins;

use App\Enums\AdminRole;
use App\Http\Controllers\Controller;
use App\Models\admin;
use App\Models\Auction;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuctionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $auction = Auction::all();
        return response()->json($auction);
    }

    public function store(Request $request)
    {
        if(Auth::user()->admin_type === AdminRole::Admin) {
            $time_start = Carbon::parse($request->input('time_start')) ;
            $time_end = Carbon::parse($request->input('time_end'));
            try {
                $id_admin = admin::query()->where('id',$request->input('id_admin'))->first();
                if($time_end->gt($time_start) === true && $id_admin !== '') {
                    $auction = new Auction([
                        'time_start' => $time_start,
                        'time_end' => $time_end,
//                    'price_start' => 1000,
                        'id_admin' => $request->input('id_admin')
                    ]);
                    $auction->save();
                    return response()->json($auction,201);
                }
                if($time_end->gt($time_start) === false) {
                    return response()->json('Thời gian kết thúc không thể nhỏ hơn thời gian bắt đầu',500);

                }
            }
            catch(\Illuminate\Database\QueryException $ex){
                return response()->json(['errors'=> $ex,'title'=>'lỗi truy vấn'],500);
            }
        }
        else {
            return response()->json('Không đủ thẩm quyền',401);
        }

    }

    public function show(Auction $auction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Auction  $auction
     * @return \Illuminate\Http\Response
     */
    public function edit(Auction $auction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Auction  $auction
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Auction $auction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Auction  $auction
     * @return \Illuminate\Http\Response
     */
    public function destroy(Auction $auction)
    {
        //
    }
}
