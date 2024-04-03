<?php

namespace Database\Seeders;

use App\Models\Car;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class CarSeeder extends Seeder
{
    protected $model = Car::class;


    public function run(): void
    {
    $famousBrands = [
            'Toyota',
            'Honda',
            'Ford',
            'Chevrolet',
            'Nissan',
            'BMW',
            'Mercedes-Benz',
            'Audi',
            'Volkswagen',
            'Tesla',
        ];

        foreach ($famousBrands as $brand) {
            Car::factory()->create([
                'brand' => $brand,
            ]);
        }
    }
}
