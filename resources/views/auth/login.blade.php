@extends('layouts.app')

@section('content')

<div class="form">
      
      <!-- <ul class="tab-group">
        <li class="tab active"><a href="#signup">Sign Up</a></li>
        <li class="tab"><a href="#login">Log In</a></li>
      </ul> -->
      <div class="wrapper">
            <h1>SIGNALS</h1>
            <h6>Signals Trading</h6>
            <nav class="tabs">
                <div class="selector"></div>
                <a href="#login"  id = "first_selector">Log In</a>
                <a href="#signup">Sign Up</a>
            </nav>
        </div>
      
      <div class="tab-content">
        <div id="login">   
          <h2>Login to your account!</h2>
          
          <form action="{{ route('login') }}" method="POST">
          @csrf
          
            <div class="field-wrap">
            <label>
              Email Address
            </label>
            <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus placeholder="Email"/>
          </div>
          
          <div class="field-wrap">
            <label>
              Password
            </label>
            <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password"/>
          </div>
          
          <button class="button button-block"/>Log In</button>
          <p class="option-login" ><span style="font-size: 25px; margin-left:46%">O R</span></p>
          <button class="button button-block btn-blue"/><i class="fa fa-facebook">&nbsp;&nbsp;&nbsp;</i> Log in with Facebook</button>
          <div style = "height: 50px"></div>
          </form>

        </div>
        <div id="signup">   

          <h2>Sign Up for Free</h2>
          
          <form action="{{ route('register') }}" method="POST">
          @csrf
          
          <div >
            <div class="field-wrap">
              <label class = "active">
                Name
              </label>
              <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus placeholder="Name"/>
              @error('name')
                  <span class="invalid-feedback" role="alert">
                      <strong>{{ $message }}</strong>
                  </span>
              @enderror
            </div>
          </div>

          <div class="field-wrap">
            <label>
              Email Address
            </label>
            <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="Email"/>
          </div>
          
          <div class="field-wrap">
            <label>
              Set A Password
            </label>
            <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="Password"/>
            @error('password')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
          </div>
          <div class="field-wrap">
            <label>
              Confirm Password
            </label>
            <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password" placeholder="Reenter Password"/>
            @error('password')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
          </div>
          
          <button type="submit" class="button button-block"/>Sign Up</button>
          <div style = "height: 50px"></div>
          </form>

        </div>
        
      </div><!-- tab-content -->
      
</div> <!-- /form -->

@endsection
