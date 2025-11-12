<!DOCTYPE html>
<html lang="en">
<head prefix="og: http://ogp.me/ns#">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php
		$titlePage = 'Perfume Official Site';
		$url = $_SERVER['REQUEST_URI'];
		if(strstr($url,'news')==true) $titlePage = 'News ｜ ' . $titlePage;
		if(strstr($url,'discography')==true) $titlePage = 'Discography ｜ ' . $titlePage;
		if(strstr($url,'live')==true) $titlePage = 'Live ｜ ' . $titlePage;
		if(strstr($url,'video')==true) $titlePage = 'Video ｜ ' . $titlePage;
		if(strstr($url,'profile')==true) $titlePage = 'Profile ｜ ' . $titlePage;
		if(isset($title)){
			$titlePage = strip_tags($title) . $titlePage;
		}
	?>
	<title><?php echo $titlePage ?></title>
	<meta name="description" content="所属事務所アミューズによるPerfumeオフィシャルサイト">
	<meta name="keywords" content="Perfume,パフューム,パヒューム,ぱふゅーむ,あ〜ちゃん,のっち,かしゆか、a-chan,KASHIYUKA,NOCCHi,テクノポップ,P.T.A.," />
	<meta name="Copyright" content="© AMUSE Inc. All Rights Reserved.">
	<link rel="shortcut icon" href="https://www.perfume-web.jp/cam/closet/assets/img/meta/favicon.ico" type="image/vnd.microsoft.icon"/>
    <link rel="icon" href="https://www.perfume-web.jp/cam/closet/assets/img/meta/favicon.ico" type="image/vnd.microsoft.icon"/>
    <link rel="apple-touch-icon" href="https://www.perfume-web.jp/cam/closet/assets/img/meta/apple-touch-icon.png"/>
    <link rel="apple-touch-icon" sizes="57x57" href="https://www.perfume-web.jp/cam/closet/assets/img/meta/apple-touch-icon-57x57.png"/>
    <link rel="apple-touch-icon" sizes="72x72" href="https://www.perfume-web.jp/cam/closet/assets/img/meta/apple-touch-icon-72x72.png"/>
    <link rel="apple-touch-icon" sizes="76x76" href="https://www.perfume-web.jp/cam/closet/assets/img/meta/apple-touch-icon-76x76.png"/>
    <link rel="apple-touch-icon" sizes="114x114" href="https://www.perfume-web.jp/cam/closet/assets/img/meta/apple-touch-icon-114x114.png"/>
    <link rel="apple-touch-icon" sizes="120x120" href="https://www.perfume-web.jp/cam/closet/assets/img/meta/apple-touch-icon-120x120.png"/>
    <link rel="apple-touch-icon" sizes="144x144" href="https://www.perfume-web.jp/cam/closet/assets/img/meta/apple-touch-icon-144x144.png"/>
    <link rel="apple-touch-icon" sizes="152x152" href="https://www.perfume-web.jp/cam/closet/assets/img/meta/apple-touch-icon-152x152.png"/>
    <link rel="apple-touch-icon" sizes="180x180" href="https://www.perfume-web.jp/cam/closet/assets/img/meta/apple-touch-icon-180x180.png"/>
	<meta property="og:title" content="<?php echo $titlePage ?>">
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://www.perfume-web.jp/">
	<meta property="og:image" content="/assets/img/ogimage.jpg">
	<meta property="og:site_name" content="Perfume Official Site">
	<meta property="og:description" content="所属事務所アミューズによるPerfumeオフィシャルサイト">
	<meta property="og:locale" content="ja_JP">
	<meta property="fb:app_id" content="">
	<meta name="twitter:card" content="summary">
	<link rel="stylesheet" href="https://use.typekit.net/yrv0iiq.css">
	<script>
		(function(d) {
			var config = {
				kitId: 'flq3bub',
				scriptTimeout: 3000,
				async: true
			},
			h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
		})(document);
	</script>
	
<?php if($url == "/fanclub/"){ ?>
	
	<meta name="robots" content="INDEX,FOLLOW,NOARCHIVE,NOIMAGEINDEX,NOIMAGECLICK,NOMEDIAINDEX">
	<meta name="google-site-verification" content="JfzUIU0JtHkDGOPONIJq5u5ZysRte_iaMNaseJCVLQ4">
	<link href="css/1.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Strait" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700" rel="stylesheet">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css" rel="stylesheet">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/css/uikit.min.css" rel="stylesheet">
	<link href="//cdn.jsdelivr.net/fontawesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">
	<script src="//cdn.jsdelivr.net/jquery/1.12.4/jquery.min.js"></script>
	<script src="//cdn.jsdelivr.net/jquery.ui/1.11.4/jquery-ui.min.js"></script>
	<script src="//cdn.jsdelivr.net/jquery.jscrollpane/2.0.19/jquery.jscrollpane.min.js"></script>
	<script src="//cdn.jsdelivr.net/mousewheel/3.1.13/jquery.mousewheel.min.js"></script>
	<script src="//cdn.jsdelivr.net/jquery.cookie/1.4.1/jquery.cookie.min.js"></script>
	<script src="//cdn.jsdelivr.net/lazysizes/2.0.0/lazysizes.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/js/uikit.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/js/uikit-icons.min.js"></script>
	<script> var add_prefix = '../' </script>
	<script src="../asset/js/11.js"></script>
	<script src="js/1.js"></script>
	<link rel="stylesheet" href="/assets/css/common.css?ver=1.3">
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-12742550-2"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	
	  gtag('config', 'UA-12742550-2');
	</script>
	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-N29ZRMS');</script>
	<!-- End Google Tag Manager -->
	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-PKLD7G8');</script>
	<!-- End Google Tag Manager -->
</head>
<body class="fadeout">
	<!-- Google Tag Manager (noscript) -->
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N29ZRMS"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<!-- End Google Tag Manager (noscript) -->
	<!-- Google Tag Manager (noscript) -->
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PKLD7G8"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<!-- End Google Tag Manager (noscript) -->
	
<?php }else{ ?>
	
	<link rel="stylesheet" href="/assets/css/style.css">
	<link rel="stylesheet" href="/assets/css/common.css?ver=1.3">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css">
	<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-12742550-2"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	
	  gtag('config', 'UA-12742550-2');
	</script>
	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-N29ZRMS');</script>
	<!-- End Google Tag Manager -->
	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-PKLD7G8');</script>
	<!-- End Google Tag Manager -->
</head>
<body class="fadeout">
	<!-- Google Tag Manager (noscript) -->
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N29ZRMS"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<!-- End Google Tag Manager (noscript) -->
	<!-- Google Tag Manager (noscript) -->
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PKLD7G8"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<!-- End Google Tag Manager (noscript) -->
	<span class="js-bg" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: white; z-index: 9998;"></span>
	<div class="c-loading js-loading">
		<img loading="lazy" class="c-loading__logo" src="/assets/img/logo_white.svg" alt="">
	</div>
	<!--▼ Header ▼-->
	<header class="c-header js-header">
		<h1 class="c-header__logo">
			<a href="/">
				<img loading="lazy" class="c-header__logo__black" src="/assets/img/logo@2x.png" alt="Logo">
				<img loading="lazy" class="c-header__logo__white" src="/assets/img/logo_white@2x.png" alt="Logo">
			</a>
		</h1>
		<div class="c-header__language">
			<a href="#" data-stt-changelang="ja" data-stt-ignore>Jp</a><span>/</span><a href="#" data-stt-changelang="en" data-stt-ignore>En</a>
		</div>

		<button class="c-header__button js-header__button">
			<span></span>
			<span></span>
		</button>
		<nav class="c-gnavi js-gnavi">
			<ul class="c-gnavi__navi">
				<li><a href="/news/">News</a></li>
				<li><a href="/discography/">Discography</a></li>
				<li><a href="/live/">Live</a></li>
				<li><a href="/video/">Video</a></li>
				<li><a href="/profile/">Profile</a></li>
				<li><a href="https://www.asmart.jp/Form/Product/ProductList.aspx?shop=0&cat=100106" target="_blank">Shop</a></li>
				<li><a href="https://www.perfume-web.jp/login/" target="_blank">Fanclub</a></li>
			</ul>
			<span class="c-gnavi__seq"></span>
			<div class="c-gnavi__download">
				<a href="#" class="js-download-show">Download / Stream <span class="c-download-icon">▲</span></a>
			</div>
			<span class="c-gnavi__seq"></span>
			<div class="c-gnavi__language">
				<a href="#" data-stt-changelang="ja" data-stt-ignore>Jp</a><span>/</span><a href="#" data-stt-changelang="en" data-stt-ignore>En</a>
			</div>
			<div class="c-gnavi__sns c-gnavi__snstop">
				<a href="https://lin.ee/jHY431n" target="_blank"><img loading="lazy" src="/assets/img/icons/line_black.png" alt=""></a>
				<div class="c-gnavi__snsmore">
					<img loading="lazy" src="/assets/img/icons/x_black@2x.png" alt="">
					<div class="c-gnavi__tooltip">
						<a href="https://twitter.com/Perfume_Staff" target="_blank">@Perfume_Staff  (JP)</a>
						<a href="https://twitter.com/perfumeofficial" target="_blank">@perfumeofficial  (EN)</a>
					</div>
				</div>
				<a href="https://www.youtube.com/channel/UCxOjoraUPd0Dq9PAyIhC6tQ" target="_blank"><img loading="lazy" src="/assets/img/icons/youtube_black@2x.png" alt=""></a>
				<a href="https://www.facebook.com/Perfume.global/" target="_blank"><img loading="lazy" src="/assets/img/icons/facebook_black@2x.png" alt=""></a>
				<div class="c-gnavi__snsmore">
					<img loading="lazy" src="/assets/img/icons/instagram_black@2x.png" alt="">
					<div class="c-gnavi__tooltip c-gnavi__tooltip--ig">
						<a href="https://www.instagram.com/prfm_official/" target="_blank">@prfm_official</a>
						<a href="https://www.instagram.com/a_chan.prfm_p000001/" target="_blank">@a_chan.prfm_p000001</a>
						<a href="https://www.instagram.com/nocchi.prfm_p000002/" target="_blank">@nocchi.prfm_p000002</a>
						<a href="https://www.instagram.com/kashiyuka.prfm_p000003/" target="_blank">@kashiyuka.prfm_p000003</a>
					</div>
				</div>
				<div class="c-gnavi__snsmore">
					<img loading="lazy" src="/assets/img/icons/tiktok_black@2x.png" alt="">
					<div class="c-gnavi__tooltip c-gnavi__tooltip--tiktok">
						<a href="https://www.tiktok.com/@perfumeofficial" target="_blank">@perfumeofficial</a>
						<a href="https://www.tiktok.com/@perfume_info_official" target="_blank">@perfume_info_official</a>
					</div>
				</div>
				<a href="https://www.weibo.com/perfumejp" target="_blank"><img loading="lazy" src="/assets/img/icons/other_black@2x.png" alt=""></a>
			</div>
			<div class="c-gnavi__title">Official Account</div>
			<div class="c-gnavi__sns">
				<a href="https://lin.ee/jHY431n" target="_blank"><img loading="lazy" src="/assets/img/icons/line_black.png" alt=""></a>
				<div class="c-gnavi__snsmore c-gnavi__snsmore--menu">
					<img loading="lazy" src="/assets/img/icons/x_black@2x.png" alt="">
					<div class="c-gnavi__tooltip--2">
						<a href="https://twitter.com/Perfume_Staff" target="_blank">@Perfume_Staff  (JP)</a>
						<a href="https://twitter.com/perfumeofficial" target="_blank">@perfumeofficial  (EN)</a>
					</div>
				</div>
				<a href="https://www.youtube.com/channel/UCxOjoraUPd0Dq9PAyIhC6tQ" target="_blank"><img loading="lazy" src="/assets/img/icons/youtube_black@2x.png" alt=""></a>
				<a href="https://www.facebook.com/Perfume.global/" target="_blank"><img loading="lazy" src="/assets/img/icons/facebook_black@2x.png" alt=""></a>
				<div class="c-gnavi__snsmore c-gnavi__snsmore--menu">
					<img loading="lazy" src="/assets/img/icons/instagram_black@2x.png" alt="">
					<div class="c-gnavi__tooltip--2 c-gnavi__tooltip2--ig">
						<a href="https://www.instagram.com/prfm_official/" target="_blank">@prfm_official</a>
						<a href="https://www.instagram.com/a_chan.prfm_p000001/" target="_blank">@a_chan.prfm_p000001</a>
						<a href="https://www.instagram.com/nocchi.prfm_p000002/" target="_blank">@nocchi.prfm_p000002</a>
						<a href="https://www.instagram.com/kashiyuka.prfm_p000003/" target="_blank">@kashiyuka.prfm_p000003</a>
					</div>
				</div>
				<div class="c-gnavi__snsmore c-gnavi__snsmore--menu">
					<img loading="lazy" src="/assets/img/icons/tiktok_black@2x.png" alt="">
					<div class="c-gnavi__tooltip--2 c-gnavi__tooltip2--tiktok">
						<a href="https://www.tiktok.com/@perfumeofficial" target="_blank">@perfumeofficial</a>
						<a href="https://www.tiktok.com/@perfume_info_official" target="_blank">@perfume_info_official</a>
					</div>
				</div>
				<a href="https://www.weibo.com/perfumejp" target="_blank"><img loading="lazy" src="/assets/img/icons/other_black@2x.png" alt=""></a>
			</div>
			<div class="c-gnavi__copy">©︎ <a href="https://www.amuse.co.jp/" target="_blank">AMUSE INC.,</a> All Rights Reserved.</div>
		</nav>
	</header>
	<!--▲ Header ▲-->

	<div class="c-download-button js-download-button">
		<a href="#" class="js-download-show">Download / Stream <span class="c-download-icon">▲</span></a>
	</div>

	<div class="c-download-modal js-download-modal">
		<button class="c-download-modal__close js-download-close">
			<span></span>
			<span></span>
		</button>
		<div class="c-download-modal__scroll">
			<div class="c-download-modal__wrapper">
				<div class="c-download-modal__thumbnail">
					<img loading="lazy" class="c-download-modal__img" src="/assets/img/top/profile_download.jpg" alt="">
					<img loading="lazy" class="c-download-modal__logo" src="/assets/img/logo_white.svg" alt="">
				</div>
				<div class="c-download-modal__inner">
					<h3 class="c-download-modal__title">Download / Stream</h3>
					<a href="https://music.apple.com/jp/artist/perfume/351343399" class="c-download-modal__link" target="_blank"><img loading="lazy" src="/assets/img/download_logo1@2x.png" alt=""></a>
					<a href="https://recochoku.jp/artist/2000006195" class="c-download-modal__link" target="_blank"><img loading="lazy" src="/assets/img/download_logo2@2x.png" alt=""></a>
					<a href="https://music.amazon.co.jp/artists/B07S8K9CFJ/perfume" class="c-download-modal__link" target="_blank"><img loading="lazy" src="/assets/img/download_logo3@2x.png" alt=""></a>
					<a href="https://mora.jp/artist/419390/" class="c-download-modal__link" target="_blank"><img loading="lazy" src="/assets/img/download_logo4@2x.png" alt=""></a>
					<a href="https://music.apple.com/jp/artist/perfume/351343399" class="c-download-modal__link" target="_blank"><img loading="lazy" src="/assets/img/download_logo5@2x.png" alt=""></a>
					<a href="https://music.line.me/artist/mi000000000d6cdd61" class="c-download-modal__link" target="_blank"><img loading="lazy" src="/assets/img/download_logo6@2x.png" alt=""></a>
					<a href="https://open.spotify.com/artist/2XMxWKPKCxoLkSdpCViCnr" class="c-download-modal__link" target="_blank"><img loading="lazy" src="/assets/img/download_logo7@2x.png" alt=""></a>
					<a href="https://music.youtube.com/channel/UCrht-oKwaPy5TqVp80yOuLg" class="c-download-modal__link" target="_blank"><img loading="lazy" src="/assets/img/download_logo8@2x.png" alt=""></a>
					<a href="https://s.awa.fm/artist/61fa4767d1482cc74862/" class="c-download-modal__link" target="_blank"><img loading="lazy" src="/assets/img/download_logo9@2x.png" alt=""></a>
					<a href="https://kkbox.fm/0r0jro" class="c-download-modal__link" target="_blank"><img loading="lazy" src="/assets/img/download_logo10@2x.png" alt=""></a>
					<a href="https://au.utapass.auone.jp/" class="c-download-modal__link" target="_blank"><img loading="lazy" src="/assets/img/download_logo15@2x.png" alt=""></a>
					<a href="https://dhits.docomo.ne.jp/artist/2000006195" class="c-download-modal__link" target="_blank"><img loading="lazy" src="/assets/img/download_logo12@2x.png" alt=""></a>
					<a href="https://music.tower.jp/artist/detail/2000006195" class="c-download-modal__link" target="_blank"><img loading="lazy" src="/assets/img/download_logo16@2x.png" alt=""></a>
					<a href="https://music.rakuten.co.jp/link/artist/3160682/" class="c-download-modal__link" target="_blank"><img loading="lazy" src="/assets/img/download_logo14@2x.png" alt=""></a>
					<button class="c-download-modal__inner__close js-download-close">Close</button>
				</div>
			</div>
		</div>
	</div>
	
<?php } ?>