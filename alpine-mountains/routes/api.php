<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MountainController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Hier definieer je alle API-routes voor je applicatie.
|
*/

// ---------------------- AUTH ----------------------
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

// Middleware "auth" kan je later toevoegen
Route::middleware('auth.simple')->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);

    // ---------------------- BERGEN CRUD ----------------------
    Route::get('mountains', [MountainController::class, 'index']);
    Route::get('mountains/{id}', [MountainController::class, 'show']);
    Route::post('mountains', [MountainController::class, 'store']);
    Route::put('mountains/{id}', [MountainController::class, 'update']);
    Route::delete('mountains/{id}', [MountainController::class, 'destroy']);
});
