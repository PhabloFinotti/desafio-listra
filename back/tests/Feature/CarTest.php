<?php

namespace Tests\Feature;

use App\Models\Car;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CarTest extends TestCase
{
    use RefreshDatabase;

    public function test_get_cars_index(): void
    {
        Car::factory()->count(3)->create();

        $response = $this->get('/api/cars');

        $response
        ->assertStatus(200)
        ->assertJsonCount(3)
        ->assertJsonStructure([
            '*' => ['id', 'brand', 'model'],
        ]);
    }

    public function test_get_cars_show(): void
    {
        $carData = [
            'picture' => 'https://via.placeholder.com/150',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
            'city' => 'Goiânia',
            'brand' => 'Ford',
            'model' => 'Edge',
            'year' => '2002',
            'mileage' => '120400',
            'transmission' => 'Automático',
            'price' => '8000000',
            'phone' => '(62) 99999-9999',
        ];

        Car::factory()->create($carData);

        $response = $this->get('/api/cars/1');

        $response->assertStatus(200);

        $response->assertJson($carData);
    }
}
