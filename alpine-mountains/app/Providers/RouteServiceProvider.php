<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * Dit pad wordt gebruikt na login (optioneel, voor web redirect)
     */
    public const HOME = '/home';

    /**
     * Bootstrap de route bindings, middleware enz.
     */
    public function boot(): void
    {
        parent::boot();
    }

    /**
     * Definieer de routes voor de applicatie.
     */
    public function map(): void
    {
        $this->mapApiRoutes();
        $this->mapWebRoutes();
    }

    /**
     * API routes
     */
    protected function mapApiRoutes(): void
    {
        Route::prefix('api')
            ->middleware('api')
            ->group(base_path('routes/api.php'));
    }

    /**
     * Web routes
     */
    protected function mapWebRoutes(): void
    {
        Route::middleware('web')
            ->group(base_path('routes/web.php'));
    }

    
}
