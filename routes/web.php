<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();
Route::get('/', function () {
    return view('landing');
});


// Route::get('/admin', function () {
//     return view('admin');
// });


Route::get('/admin', 'DataController@index')->name('admin');

Route::get('/home', 'HomeController@index')->name('home');
Route::get('key_confirm', 'DataController@create');
Route::get('score', 'DataController@index');
Route::get('update_payment', 'DataController@update_payment');
Route::get('update_trade', 'DataController@update_trade');
Route::get('update_place_order', 'DataController@update_place_order');
Route::get('update_cancel_order', 'DataController@update_cancel_order');

Route::get('admin_view', 'HomeController@view');

Route::post('paypal', 'PaymentController@payWithpaypal');
Route::get('status', 'PaymentController@getPaymentStatus');

