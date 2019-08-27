<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <link href="{{ asset('css/style.css') }}" rel="stylesheet">
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <!-- <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}">Register</a>
                        @endif
                    @endauth
                </div>
            @endif
        </div> -->

		<!-- start header -->
		<header id="top-bar" class="top-bar--light">
			<div id="top-bar__inner">
				<a id="top-bar__logo" class="site-logo" href="index.html">
					<img class="img-responsive" width="175" height="42" src="{{ asset('img/site_logo.png') }}" alt="demo" />
					<img class="img-responsive" width="175" height="42" src="{{ asset('img/site_logo_2.png') }}" alt="demo" />
				</a>

				<a id="top-bar__navigation-toggler" href="javascript:void(0);"><span></span></a>

				<div id="top-bar__navigation-wrap">
					<div>
						<!-- <nav id="top-bar__navigation" class="navigation" role="navigation">
							<ul>
								<li class="active">
									<a href="javascript:void(0);"><span>Home</span></a>

									<div class="submenu">
										<ul>
											<li><a href="index.html">Home Page</a></li>
											<li><a href="index_6.html">Home Slider</a></li>
											<li><a href="index_9.html">Agency</a></li>
											<li><a href="index_7.html">Landing Wallet</a></li>
											<li><a href="index_4.html">Landing ICO 1</a></li>
											<li><a href="index_3.html">Landing ICO 2</a></li>
											<li class="active"><a href="index_2.html">Landing ICO 3</a></li>
											<li><a href="index_5.html">Landing ICO 5</a></li>
											<li><a href="index_8.html">Mining Farm</a></li>
											<li><a href="wallet/index.html">Crypto Wallet</a></li>
										</ul>
									</div>
								</li>

								<li>
									<a href="javascript:void(0);"><span>Pages</span></a>

									<div class="submenu">
										<ul>
											<li><a href="about.html">About</a></li>
											<li><a href="services.html">Services</a></li>
											<li><a href="blog.html">Blog</a></li>
											<li><a href="blog_massonry.html">Blog Massonry</a></li>
											<li><a href="blog_details.html">Blog Post</a></li>
											<li><a href="pricing_table.html">Pricinag Tables</a></li>
											<li><a href="typography.html">Typography</a></li>
											<li><a href="404.html">404 page</a></li>
											<li><a href="widgets.html">Widgets</a></li>
											<li><a href="contacts.html">Contact</a></li>
											<li><a href="sign_in.html">Sign In</a></li>
											<li><a href="sign_up.html">Sign Up</a></li>
										</ul>
									</div>
								</li>

								<li>
									<a href="white_pappers.pdf" target="_blank"><span>White Pappers</span></a>
								</li>

								<li>
									<a href="faq.html"><span>FAQ’s</span></a>
								</li>

								<li>
									<a href="support.html"><span>Support</span></a>
								</li>
							</ul>
						</nav> -->

						<br class="hide--lg">

						<ul id="top-bar__subnavigation">
                        @if (Route::has('login'))
                        @auth
                            <a href="{{ url('/home') }}">Home</a>
                        @else
                            <li><a class="custom-btn custom-btn--small custom-btn--style-3" href="{{ route('login') }}">Login</a></li>
                            @if (Route::has('register'))
                            <li><a class="custom-btn custom-btn--small custom-btn--style-3" href="{{ route('register') }}">Sign up</a></li>
                            @endif
                        @endauth
                        @endif
							<!-- <li>
								<div id="top-bar__choose-lang">
									<div class="list-wrap">
										<ul class="list">
											<li><img class="img-responsive  circled" src="img/ico/flag/2.png" width="25" height="25" alt="demo" ></li>
											<li><img class="img-responsive  circled" src="img/ico/flag/3.png" width="25" height="25" alt="demo" ></li>
											<li><img class="img-responsive  circled" src="img/ico/flag/4.png" width="25" height="25" alt="demo" ></li>
										</ul>
									</div>

									<i><img class="img--active img-responsive  circled" src="img/ico/flag/1.png" width="25" height="25" alt="demo" ></i>
								</div>
							</li> -->
						</ul>
					</div>
				</div>
			</div>
		</header>
		<!-- end header -->

		<!-- start start screen -->
		<div id="start-screen" class="start-screen--light start-screen--style-2">
			<div class="start-screen__static-bg jarallax" data-speed="0.3" style="background-image: url(img/bg_3.jpg);">

				<div class="start-screen__content">
					<div class="start-screen__content__inner">
						<div class="grid grid--container">
							<div class="row row--xs-center">
								<div class="col col--md-7">
									<h1 class="__title">Blockchain Identity Verification</h1>

									<div class="row">
										<div class="col col--lg-11 col--xl-9">
											<div class="col-MB-25">
												Service that allows to verify users and to prevent fraud. It is based on blockchain technology as a tool for protecting and validating personal data of Internet users.
											</div>

											<div class="row row--xs-center">
												<div class="col col--xs-auto">
													<a class="custom-btn custom-btn--medium custom-btn--style-2" style="margin-top: 20px;" href="white_pappers.pdf" target="_blank">Get White Papper</a>
												</div>

												<div class="col col--xs-auto">
													<a class="btn-play" href="#" style="margin-top: 20px;"><i></i>Video Presentation</a>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="col hide--md col-MB-40"></div>

								<div class="col col--md-5 col--xl-4 col--xl-offset-1">
									<div class="sales">
										<h3 class="__title">Crypterium ICO ends:</h3>

										<p>Discount 47% from final price</p>

										<div class='countdown js-countdown' data-date="2019-05-12"></div>

										<!-- start progress -->
										<div class="progress progress--small">
											<div class="progress__inner">
												<div class="__bar __bar--animate" style="width: 40%"></div>

												<span class="__label" style="left: 10%"><strong>850K</strong></span>

												<span class="__max-val" style="line-height: 19px;"><strong>7M MAX</strong></span>
											</div>

											<span class="soft-cap">SOFT CAP</span>

											<span class="note fl-r" style="padding-top: 8px">Total raised: 1 864 866$</span>
										</div>
										<!-- end progress -->

										<p class="note">Fixed token edition 3.000.000 BITS</p>

										<p>
											<a class="custom-btn custom-btn--style-5 wide buy-btn" href="#">Buy Tokens</a>
										</p>

										<img class="img-responsive" src="img/Payement.png" alt="demo" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>

			<span class="scroll-discover hide show--md">scroll down <b></b></span>

		</div>
		<!-- end start screen -->

		<!-- start main -->

		<!-- end main -->

		<!-- start footer -->
		<footer id="footer" class="text--center text--lg-left">
			<div class="grid grid--container">

				<div class="row row--xs-middle row--lg-between">
					<div class="col col--sm-10 col--md-8 col--lg-6">
						<div class="__item">
							<span class="__copy">© 2018, Crypterium Theme by <a class="__dev" href="#" target="_blank">Artureanec</a></span>
						</div>
					</div>
				</div>
			</div>
		</footer>
		<!-- end footer -->

		<div id="btn-to-top-wrap">
			<a id="btn-to-top" class="circled" href="javascript:void(0);" data-visible-offset="800"></a>
		</div>

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
		<script>window.jQuery || document.write('<script src="{{ asset('js/jquery-2.2.4.js') }}"><\/script>')</script>

		<script type="text/javascript" src="{{ asset('js/main.js') }}"></script>
		<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->


    </body>
</html>
