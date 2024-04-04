<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Cache;

class CarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        return Cache::remember('cars', 60, function () {
            return response()->json(Car::all(['id', 'brand', 'model']));
        });
    }

    /**
     * Display the specified resource.
     */
    public function show(Car $car)
    {
        return Cache::remember('car-'.$car->id, 60, fn () => response()->json($car));
    }
}
