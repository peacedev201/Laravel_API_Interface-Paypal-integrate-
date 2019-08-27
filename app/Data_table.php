<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Data_table extends Model
{
    //
    protected $fillable = [
        'user_id', 'api_key', 'secret_key','payment','trade','status','place_order','cancel_order',
    ];
}
