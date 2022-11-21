<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class ProductAuction extends Model
{
    use HasFactory, HasApiTokens, Notifiable;
    protected $fillable = [
        'id_product',
        'id_auction',
        'time_start',
        'time_end',
        'status'
    ];


}
