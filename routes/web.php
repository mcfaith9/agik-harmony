<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('app'); // your main blade view that loads the Vue app
})->where('any', '.*');