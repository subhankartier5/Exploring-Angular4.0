<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::prefix('v1')->group(function (){
    Route::post('authenticate-user', 'Apiv1Controller@authenticate')->name('postAuthenticateUser');
    Route::get('technologies', 'Apiv1Controller@getTechnologies')->name('getTechnologies');
});
