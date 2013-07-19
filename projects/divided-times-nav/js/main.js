$(document).ready(function(){
		
	$('#primary-nav').on('click', 'li', function(e){
		var target = $('a', $(this)).attr('href');
		e.preventDefault();
		$(this).siblings().removeClass('active');
		$(this).toggleClass('active');
		if($(this).hasClass('active')) {
			if($('#slide-down').hasClass('open')) {
				$('#slide-down .drop.open').fadeOut({
					duration: 100,
					done: function(){
						$(this).removeClass('open');
						$(target).fadeIn(350).addClass('open');
					}
				});
			} else {
				$('#slide-down .drop').hide();
				$(target).show().addClass('open');
				$('#slide-down').slideDown(150).addClass('open');			
			}
		} else {
			$('#slide-down').slideUp(150).removeClass('open');
		}
	});
		
});