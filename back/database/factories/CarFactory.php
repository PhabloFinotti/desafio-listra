<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Car>
 */
class CarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'picture' => $this->faker->imageUrl(),
            'description' => $this->faker->text(),
            'city' => $this->faker->city(),
            'brand' => $this->faker->word(),
            'model' => $this->faker->word(),
            'year' => $this->faker->year(),
            'mileage' => $this->faker->numberBetween(0, 100000),
            'transmission' => $this->faker->randomElement(['Manual', 'Automático']),
            'price' => $this->faker->numberBetween(0, 100000),
            'phone' => $this->faker->phoneNumber(),
        ];
    }
}
