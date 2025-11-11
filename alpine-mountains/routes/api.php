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

// ---------------------- AUTHENTICATIE ----------------------
// Registratie
Route::post('register', [AuthController::class, 'register']);

// Login
Route::post('login', [AuthController::class, 'login']);

// Logout (alleen voor ingelogde gebruikers)
Route::middleware('auth:sanctum')->post('logout', [AuthController::class, 'logout']);

// ---------------------- BERGEN CRUD ----------------------
// Alles onder auth middleware
Route::middleware('auth:sanctum')->group(function () {
    Route::get('mountains', [MountainController::class, 'index']); // Alle bergen
    Route::get('mountains/{id}', [MountainController::class, 'show']); // Detail
    Route::post('mountains', [MountainController::class, 'store']); // Nieuwe berg
    Route::put('mountains/{id}', [MountainController::class, 'update']); // Bewerken
    Route::delete('mountains/{id}', [MountainController::class, 'destroy']); // Verwijderen
});
