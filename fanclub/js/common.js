$(function(){
	if (is_mode_pc) {
		$('#contents-nav a').each(function(){
			$(this).pageScroll($(this).attr('href'))
		})
	} else {
		$('#pta-list').click(function(){
			location.href = '?pta'
		})
		$('#pta-list').click(function(){
			location.href = '?pta'
		})
		
		// スマホの場合、テキストの途中に改行を入れます
		if (location.search) {
			$('th.n1').html('オリジナル<br>会員証の発行')
			$('th.n4').html('年1回<br>DVDの発送')
			$('th.n5').html('会員限定<br>イベント')
			$('#pta th.n6').html('会員限定<br>オリジナルグッズ<br>の販売')
			$('#world th.n6').html('会員限定<br>オリジナルグッズ<br>の販売<br>※1')
			$('#pta th.n7').html('LIVEのお知らせ<br>＆<br>チケット先行受付')
			$('#world th.n7').html('LIVEのお知らせ<br>＆<br>チケット先行受付<br>※2')
			$('#pta th.n8').html('テレビ、ラジオ<br>などの<br>公開番組の観覧')
			$('#world th.n8').html('テレビ、ラジオ<br>などの<br>公開番組の観覧<br>※3')
			$('#pta > div > strong').html('Perfume OFFICIAL FANCLUB<br>｢P.T.A.｣　会員特典')
			$('#world > div > strong').html('Perfume OFFICIAL FANCLUB<br>｢WORLD P.T.A.｣　会員特典')
		}
	}
})