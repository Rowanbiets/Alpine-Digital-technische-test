<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AuthSimple
{
    public function handle(Request $request, Closure $next)
    {
        if (!$request->session()->has('user_id')) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
        return $next($request);
    }
}
