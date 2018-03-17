<?php

use Faker\Generator as Faker;

$factory->define(App\Invoice::class, function (Faker $faker) {

    static $password;

    return [

        'invoice_number' => $faker->randomLetter . $faker->randomLetter . '-' . $faker->randomNumber(3) . $faker->month,

        'client_name' => $faker->company,

        'client_address' => $faker->address,

        'amount' => $faker->randomFloat(null, 1, 3),

        'invoice_date' => $faker->year . '-' . $faker->month('now') . '-' . $faker->dayOfMonth,

        'due_date' => $faker->year . '-' . $faker->month('now') . '-' . $faker->dayOfMonth

    ];

});
