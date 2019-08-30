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
        @if($result_data[0]->trade == 0)
          <h3 class = "red_active">NON ACTIVATED<h3>
        @elseif($result_data[0]->trade == 1)
          <h3 class = "orange_active">PRE ACTIVATED<h3>
        @else
          <h3 class = "blue_active">ACTIVATED<h3>
        @endif

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

        <h5 style = "text-align:center">Username: <span>{{ Auth::user()->name }}<span></h5>

        @if($result_data[0]->status == 1)
            <h5 style = "text-align:center">Status: <span>OK<span></h5><br><br>

        @else

        <!-- {{$result_data[0]->status}} -->
        <h5 style = "text-align:center">Status: <span>Cancel <span></h5><br><br>

        @endif
      
        <h5 style = "text-align:center">or Register for 29$ month only</h5>
        
        
        <!-- payment start -->
        <div class="w3-container">
        @if ($message = Session::get('success'))
        <div class="w3-panel w3-green w3-display-container">
            <span onclick="this.parentElement.style.display='none'"
    				class="w3-button w3-green w3-large w3-display-topright">&times;</span>
            <p>{!! $message !!}</p>
        </div>
        <?php Session::forget('success');?>
        @endif

        @if ($message = Session::get('error'))
        <div class="w3-panel w3-red w3-display-container">
            <span onclick="this.parentElement.style.display='none'"
    				class="w3-button w3-red w3-large w3-display-topright">&times;</span>
            <p>{!! $message !!}</p>
        </div>
        <?php Session::forget('error');?>
        @endif

        
    	<form class="w3-container w3-display-middle w3-card-4 w3-padding-16" method="POST" id="payment-form"
          action="{!! URL::to('paypal') !!}">
    	  <!-- <div class="w3-container w3-teal w3-padding-16">Paywith Paypal</div> -->
    	  {{ csrf_field() }}  	
    	    <img class="img-responsive" style = "margin-left:29%" src="{{ asset('img/1.png') }}" alt="demo" />
    	  <!-- <button class="w3-btn w3-blue">Pay with PayPal</button> -->
        </form>
        <script>
            $(document).on('click','.img-responsive',function(){
                document.getElementById('payment-form').submit();
            })
        </script>
    </div>
<!-- payment end -->
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
            url: 'key_confirm',
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
