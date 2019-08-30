<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Data_table;
use DB;
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

class DataController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin');
    }

    public function update_payment(Request $data){
        $user_id = $data['id'];
        if((int)(Data_table::where('user_id', '=', $user_id)->pluck("payment")[0]) == 0){
            Data_table::where('user_id', '=', $user_id)->update(['payment' => 1]);
            Data_table::where('user_id', '=', $user_id)->update(['trade' => 1]);
        } 
        else{
            Data_table::where('user_id', '=', $user_id)->update(['payment' => 0]);
            Data_table::where('user_id', '=', $user_id)->update(['trade' => 0]);
            
        }
        $result_data = DB::table('data_tables')
                        ->join('users', 'data_tables.user_id', '=', 'users.id')
                        ->get();
        return $result_data;
    }

    public function update_trade(Request $data){
        $user_id = $data['id'];
        if((int)(Data_table::where('user_id', '=', $user_id)->pluck("trade")[0]) == 0){
            Data_table::where('user_id', '=', $user_id)->update(['trade' => 1]);
            Data_table::where('user_id', '=', $user_id)->update(['place_order' => 0]);
            Data_table::where('user_id', '=', $user_id)->update(['cancel_order' => 0]);
        } 
        else if((int)(Data_table::where('user_id', '=', $user_id)->pluck("trade")[0]) == 1){
            Data_table::where('user_id', '=', $user_id)->update(['trade' => 2]);
            Data_table::where('user_id', '=', $user_id)->update(['place_order' => 1]);
            Data_table::where('user_id', '=', $user_id)->update(['cancel_order' => 1]);
        }
        else{
            Data_table::where('user_id', '=', $user_id)->update(['trade' => 0]);
            Data_table::where('user_id', '=', $user_id)->update(['place_order' => 0]);
            Data_table::where('user_id', '=', $user_id)->update(['cancel_order' => 0]);
        }
        $result_data = DB::table('data_tables')
                        ->join('users', 'data_tables.user_id', '=', 'users.id')
                        ->get();
        return $result_data;
    }

    public function update_place_order(Request $data){
        $user_id = $data['id'];
        Data_table::where('user_id', '=', $user_id)->update(['place_order' => 0]);
        Data_table::where('user_id', '=', $user_id)->update(['status' => 1]);
        $result_data = DB::table('data_tables')
                        ->join('users', 'data_tables.user_id', '=', 'users.id')
                        ->get();
        return $result_data;
    }

    public function update_cancel_order(Request $data){
        $user_id = $data['id'];
        Data_table::where('user_id', '=', $user_id)->update(['cancel_order' => 0]);
        Data_table::where('user_id', '=', $user_id)->update(['status' => 2]);
        $result_data = DB::table('data_tables')
                        ->join('users', 'data_tables.user_id', '=', 'users.id')
                        ->get();
        return $result_data;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $data)
    {
        
        $user_id = $data['id'];
        // echo($user_id); exit;
        $table_data = Data_table::where('user_id', '=', $user_id)->get();
        // echo($data['api_key']); exit;
        if(($table_data->count()<>0)){
            // $today_score = $score_data->points;
            Data_table::where('user_id', '=', $user_id)->update(['api_key' => $data['api_key'],'secret_key' => $data['secret_key']]);
        }
        
        else{
            // echo($data['api_key']); exit;
            Data_table::create([
                'user_id' => $data['id'],
                'api_key' => $data['api_key'],
                'secret_key' => $data['secret_key'],
            ]);
        }
        // exit;
        return $data['api_key'];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
