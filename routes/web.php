<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::middleware('web')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth');
    Route::get('/user', [AuthController::class, 'user'])->middleware('auth');
});

// Catch-all must be last
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');