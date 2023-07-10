$(function(){
	$('.main_tabcontent > div').hide();
	$('.main_tabnav a').click(function () {
		$('.main_tabcontent > div').hide().filter(this.hash).fadeIn();
		$('.main_tabnav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':eq(0)').click();
  });
