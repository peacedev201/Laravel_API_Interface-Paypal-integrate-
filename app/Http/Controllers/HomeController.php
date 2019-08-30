<?php

namespace App\Http\Controllers;

use Session;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\User;
use App\Data_table;
use DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $id = Auth::user()->id;
        Session::put('key', $id);
        $result_data = DB::table('data_tables')
                        ->join('users', 'data_tables.user_id', '=', 'users.id')
                        ->where('user_id', '=', $id)
                        ->get();
        return view('home')->with(array('result_data'=>$result_data));;
    }
    
    public function view()
    {
        $result_data = DB::table('data_tables')
                        ->join('users', 'data_tables.user_id', '=', 'users.id')
                        // ->orderby("user_id")
                        ->get();
        return $result_data;
    }
}
