<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MountainController;


Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);

    Route::get('mountains', [MountainController::class, 'index']);
    Route::get('mountains/{id}', [MountainController::class, 'show']);
    Route::post('mountains', [MountainController::class, 'store']);
    Route::put('mountains/{id}', [MountainController::class, 'update']);
    Route::delete('mountains/{id}', [MountainController::class, 'destroy']);
});
