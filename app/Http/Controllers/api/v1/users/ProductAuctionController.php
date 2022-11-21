<?php

namespace App\Http\Controllers\api\v1\users;

use App\Http\Controllers\Controller;
use App\Models\ProductAuction;
use Illuminate\Support\Facades\DB;

class ProductAuctionController extends Controller
{
    public function index() {
        $product_auctions =DB::table('product_auctions as pa')
            ->select([
                'pa.id',
                'pa.id_auction as id_auction',
                'p.id as id_product',
                'p.name as name_product',
                'p.image as image_product',
                'a.time_start as time_start_auction',
                'a.time_end as time_end_auction',
                'p.price',
                'pa.time_start as time_start_product',
                'pa.time_end as time_end_product',
                'pa.status',
                'ct.name as name_category',
            ])
            ->join('products as p','pa.id_product','p.id')
            ->join('categories as ct','p.id_category','ct.id')
            ->join('auctions as a','pa.id_auction','a.id')
            ->where('status', 1)
            ->get();
        return response()->json($product_auctions);
    }
    public function show($id) {
        $product_detail =DB::table('product_auctions as pa')
            ->select([
                'pa.id',
                'pa.id_auction as id_auction',
                'p.id as id_product',
                'p.name as name_product',
                'p.image as image_product',
                'a.time_start as time_start_auction',
                'a.time_end as time_end_auction',
                'p.price',
                'pa.time_start as time_start_product',
                'pa.time_end as time_end_product',
                'ct.name as name_category'
            ])
            ->join('products as p','pa.id_product','p.id')
            ->join('categories as ct','p.id_category','ct.id')
            ->join('auctions as a','pa.id_auction','a.id')
            ->where('pa.id',$id)
            ->get();
            return response()->json($product_detail);
    }
}
