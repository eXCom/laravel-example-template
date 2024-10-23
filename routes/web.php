<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('welcome'); // or your Vue entry point
})->where('any', '.*');

require __DIR__.'/auth.php';
