<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::prefix('admin')->group(function () {
    Route::get('/user-manager',[\App\Http\Controllers\admins\UserManagerController::class,'index'])->name('user-manager');
});
Route::prefix('user')->group(function () {
    Route::get('/user-manager',[\App\Http\Controllers\admins\UserManagerController::class,'index'])->name('user-manager');
});Route::prefix('shop')->group(function () {
    Route::get('/user-manager',[\App\Http\Controllers\admins\UserManagerController::class,'index'])->name('user-manager');
});
