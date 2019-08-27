@extends('layouts.app')

@section('content')
<div class="form" style = "max-width:750px; min-height: 725px;">
      
      <!-- <ul class="tab-group">
        <li class="tab active"><a href="#signup">Sign Up</a></li>
        <li class="tab"><a href="#login">Log In</a></li>
      </ul> -->
      <div class="wrapper">
            <h1>TRADING</h1>
            <h6>Signals Trading</h6>
            <nav class="tabs">
                <div class="selector blue_btn"></div>
                <a href="#trade"  id = "first_selector">TRADE</a>
                <a href="#signals">SIGNALS</a>
                <a href="#subscription">SUBSCRIPTION</a>
                <a href="#configuration">CONFIGURATION</a>
            </nav>
        </div>
      
      <div class="tab-content">
        <div id="trade">   
          <h4 style = "text-align:center">Current Trade:</h4>
          <h5 style = "text-align:center">TUSD/USDT BUY LIMIT: <span>1.0025<span></h5>

          <h3 class = "blue_active">ACTIVATED<h3>

        </div>
        <div id="signals" class = "hidden">   

        <h5 style = "text-align:center">Last month performance: <span>1.15<span>%</h5>
        <h5 style = "text-align:center">Last 3 months performance averaged: <span>2.14<span>%</h5><br>
        <h4 style = "text-align:center"></h4>
        <h4 style = "text-align:center">Trade List:</h4>
        <h5 style = "text-align:center; font-style:italic" >(Updated  <span>01/12/2019<span>)</h5>
        <div class="listbox-area">
        <div class="left-area">
            <ul id="ss_elem_list"
                tabindex="0"
                role="listbox"
                aria-labelledby="ss_elem"
                style = "margin-block-end: 0em;">
            <li id="ss_elem_Np" role="option">
            01/12/2019 TUSD/USDT BUY LIMIT:1.0025 REACHED
            </li>
            <li id="ss_elem_Pu" role="option">
            01/12/2019 TUSD/USDT BUY LIMIT:1.0025 REACHED
            </li>
            <li id="ss_elem_Am" role="option">
            01/12/2019 TUSD/USDT BUY LIMIT:1.0025 REACHED
            </li>
            <li id="ss_elem_Cm" role="option">
            01/12/2019 TUSD/USDT BUY LIMIT:1.0025 REACHED
            </li>
            <li id="ss_elem_Bk" role="option">
            01/12/2019 TUSD/USDT BUY LIMIT:1.0025 REACHED
            </li>
            <li id="ss_elem_Cf" role="option">
            01/12/2019 TUSD/USDT BUY LIMIT:1.0025 REACHED
            </li>
            <li id="ss_elem_Pu" role="option">
            01/12/2019 TUSD/USDT BUY LIMIT:1.0025 REACHED
            </li>
            <li id="ss_elem_Am" role="option">
            01/12/2019 TUSD/USDT BUY LIMIT:1.0025 REACHED
            </li>
            <li id="ss_elem_Cm" role="option">
            01/12/2019 TUSD/USDT BUY LIMIT:1.0025 REACHED
            </li>
            <li id="ss_elem_Bk" role="option">
            01/12/2019 TUSD/USDT BUY LIMIT:1.0025 REACHED
            </li>
            <li id="ss_elem_Cf" role="option">
            01/12/2019 TUSD/USDT BUY LIMIT:1.0025 REACHED
            </li>
            <li id="ss_elem_Pu" role="option">
            01/12/2019 TUSD/USDT BUY LIMIT:1.0025 REACHED
            </li>
            <li id="ss_elem_Am" role="option">
            01/12/2019 TUSD/USDT BUY LIMIT:1.0025 REACHED
            </li>
            <li id="ss_elem_Cm" role="option">
            01/12/2019 TUSD/USDT BUY LIMIT:1.0025 REACHED
            </li>
            <li id="ss_elem_Bk" role="option">
            01/12/2019 TUSD/USDT BUY LIMIT:1.0025 REACHED
            </li>
            <li id="ss_elem_Cf" role="option">
            01/12/2019 TUSD/USDT BUY LIMIT:1.0025 REACHED
            </li>
            <li id="ss_elem_Pu" role="option">
            01/12/2019 TUSD/USDT BUY LIMIT:1.0025 REACHED
            </li>
            <li id="ss_elem_Am" role="option">
            01/12/2019 TUSD/USDT BUY LIMIT:1.0025 REACHED
            </li>
            <li id="ss_elem_Cm" role="option">
            01/12/2019 TUSD/USDT BUY LIMIT:1.0025 REACHED
            </li>
            <li id="ss_elem_Bk" role="option">
            01/12/2019 TUSD/USDT BUY LIMIT:1.0025 REACHED
            </li>
            <li id="ss_elem_Cf" role="option">
            01/12/2019 TUSD/USDT BUY LIMIT:1.0025 REACHED
            </li>
            
            </ul>
        </div>
        </div>

        </div>
        <div id="subscription" class = "hidden"> 

        <h5 style = "text-align:center">Username: <span>{{ Auth::user()->roll }}<span></h5>
        <h5 style = "text-align:center">Status: <span>OK<span></h5><br><br>
        <h5 style = "text-align:center">or Register for 29$ month only</h5>
        <img class="img-responsive" style = "margin-left:29%" src="{{ asset('img/1.png') }}" alt="demo" />
        </div>

        <div id="configuration" class = "hidden">   

        <h5 style="width:60%; margin-left:20%" >&nbsp;&nbsp;To config automated trading. Create API key on an exchange and copy paste following details.</h5><br>
          
          <form  style="width:60%; margin-left:20%" id = "key_form">
          {{csrf_field ()}}
            <div class="field-wrap">
                <input id="api_key" type="text"  name="api" value="" class="form-control @error('api_key') is-invalid @enderror"  autofocus placeholder="API key" required/>
            </div>            
            <div class="field-wrap">
                <input id="secret_key" type="passward" class="form-control @error('secret_key') is-invalid @enderror" name="secret"  value=""  placeholder="Secret key" required/>
            </div>

            <input  type="checkbox" style = "width: 15px;height: 15px; display: inline-block;"  name="policy" value="">&nbsp; I authorize Signals to place the trade on my behalf through exchange API at signals rates.<br><br>

            <button type="submit" id = "submit" class="button button-block"/>Confirm</button>
          </form>

        </div>
        
      </div><!-- tab-content -->
<script type="text/javascript">
$(document).ready(function () {
    $('#key_form').on('submit',function(){
        // alert("click");
        id = "{{ Auth::user()->id }}";
        api_key = $("#api_key").val();
        secret_key = $("#secret_key").val();
        $.ajax({
            url: '/key_confirm',
            type: 'get',
            data: { id: id,
                api_key: api_key,
                secret_key:secret_key, },
            success: function(response)
            {
                // alert(response);
            },
            error: function() {
            alert('There was some error performing the AJAX call!');
            }
        });
    });
});
</script>      
</div> <!-- /form -->

@endsection
