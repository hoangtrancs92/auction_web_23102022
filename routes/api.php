<?php

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
    Route::group(['middleware' => ['auth:sanctum']], function() {
        Route::get('/user-manager',[\App\Http\Controllers\api\v1\admins\UserManagerController::class,'index'])->name('user-manager');
        Route::post('/logout',[\App\Http\Controllers\api\v1\admins\auth\AdminAuthController::class,'logout'])->name('admin-logout');
    });
    Route::post('/login',[\App\Http\Controllers\api\v1\admins\auth\AdminAuthController::class,'login'])->name('admin-login');
});

Route::prefix('customer')->group(function () {
    Route::post('/login',[\App\Http\Controllers\api\v1\users\auth\UserAuthController::class,'login'])->name('customer-login');
    Route::group(['middleware' => ['auth:sanctum']], function() {

    });
});

Route::prefix('shop')->group(function () {
    Route::post('/login',[\App\Http\Controllers\api\v1\admins\auth\AdminAuthController::class,'login'])->name('admin-login');
    Route::get('/user-manager',[\App\Http\Controllers\api\v1\admins\UserManagerController::class,'index'])->name('user-manager');
});
