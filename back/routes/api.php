<?php

use App\Http\Controllers\CarController;
use Illuminate\Support\Facades\Route;

Route::prefix('cars/')
        ->controller(CarController::class)
        ->name('car.')
        ->group(function () {
            Route::get('/', 'index')->name('index');
            Route::get('/{car}', 'show')->name('show');
        });
