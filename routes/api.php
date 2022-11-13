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
    Route::group(['middleware' => ['auth:sanctum', 'IsAdmin']], function() {
        Route::get('/user-manager',[\App\Http\Controllers\api\v1\admins\UserManagerController::class,'index'])->name('user-manager');
        Route::post('/logout',[\App\Http\Controllers\api\v1\admins\auth\AdminAuthController::class,'logout'])->name('admin-logout');
        Route::post('/user-created',[\App\Http\Controllers\api\v1\admins\UserManagerController::class,'store'])->name('admin-user-created');
        Route::post('/user-updated/{id}',[\App\Http\Controllers\api\v1\admins\UserManagerController::class,'update'])->name('admin-user-updated');
        Route::delete('/user-deleted/{id}',[\App\Http\Controllers\api\v1\admins\UserManagerController::class,'destroy'])->name('admin-user-deleted');
        Route::post('/category-created',[\App\Http\Controllers\api\v1\admins\CategoryManagerController::class,'store'])->name('admin-categories-created');
        Route::post('/category-updated/{id}',[\App\Http\Controllers\api\v1\admins\CategoryManagerController::class,'update'])->name('admin-categories-updated');
        Route::delete('/category-deleted/{id}',[\App\Http\Controllers\api\v1\admins\CategoryManagerController::class,'destroy'])->name('admin-categories-deleted');
        Route::get('/shops',[\App\Http\Controllers\api\v1\admins\ShopController::class,'index'])->name('admin-shops-manager');
        Route::get('/products',[\App\Http\Controllers\api\v1\admins\ProductController::class,'index'])->name('admin-products-manager');
        Route::post('/product-created',[\App\Http\Controllers\api\v1\admins\ProductController::class,'store'])->name('admin-product-created');
    });
    Route::group(['middleware' => ['auth:sanctum', 'IsBoth']], function() {
        Route::get('/category-manager',[\App\Http\Controllers\api\v1\admins\CategoryManagerController::class,'index'])->name('admin-categories-manager');
    });
    Route::post('/login',[\App\Http\Controllers\api\v1\admins\auth\AdminAuthController::class,'login'])->name('admin-login');
});

Route::prefix('customer')->group(function () {
    Route::post('/login',[\App\Http\Controllers\api\v1\users\auth\UserAuthController::class,'login'])->name('customer-login');
    Route::post('/register',[\App\Http\Controllers\api\v1\users\auth\UserAuthController::class,'register'])->name('customer-register');
    Route::group(['middleware' => ['auth:sanctum']], function() {

    });
});

Route::prefix('shop')->group(function () {
    Route::post('/login',[\App\Http\Controllers\api\v1\admins\auth\AdminAuthController::class,'login'])->name('admin-login');
    Route::get('/user-manager',[\App\Http\Controllers\api\v1\admins\UserManagerController::class,'index'])->name('user-manager');
});
