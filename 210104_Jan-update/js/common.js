$(function () {

	new WOW().init();

	$("#la_nav").load("nav.html",
		function (responseText, textStatus, XMLHttpRequest) {
			console.log(XMLHttpRequest);
			if (textStatus == "success") {

				$('#jquery_jplayer_1').jPlayer({
					ready: function (event) {
						$(this).jPlayer('setMedia', {
							// title: "Bubble",
							// m4a: 'media/bgm.mp3',
							oga: 'media/bgm.mp3'
						});
					},
					swfPath: '../../dist/jplayer',
					supplied: 'm4a, oga',
					wmode: 'window',
					useStateClassSkin: true,
					autoBlur: false,
					smoothPlayBar: true,
					keyEnabled: true,
					remainingDuration: true,
					toggleDuration: true
				});

				$('.soon').on('click', function (e) {
					e.preventDefault();
					alert('敬請期待！');
				});

			}
			if (textStatus == "error") {
				// oh noes!
			}
		});

	if ($(window).width() > 1000) {
		$(document).on('mouseenter', '.navbar .dropdown', function () {
			$(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
		}).on('mouseleave', '.dropdown', function () {
			$(this).find('.dropdown-menu').first().stop(true, true).slideUp(150);
		});
	}

	$('.introduce-btn a').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.introduce-menu').fadeToggle();
	});

	$(window).on('resize', function () {
		if ($(window).width() < 480) {
			$('.introduce-menu a').on('click', function (e) {
				$('.introduce-btn a').removeClass('active');
				$('.introduce-menu').hide();
			});
		} else {
			$('.introduce-menu').show();
		}
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$("#gotop").fadeIn();
		} else {
			$("#gotop").fadeOut();
		}
	});

	$("#gotop").click(function () {
		$('body, html').animate({
			scrollTop: 0
		}, 500);
	});

});