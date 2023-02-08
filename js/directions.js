jQuery(document).ready(function () {
	jQuery('.tabs .tab-links a').on('click', function (e) {
		var currentAttrValue = jQuery(this).attr('href');

		// Show/Hide Tabs
		jQuery('.tabs ' + currentAttrValue).show().siblings().hide();

		// Change/remove current tab to active
		jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

		e.preventDefault();
	});
});
jQuery(document).ready(function () {
	jQuery('.tabs .directions-link a').on('click', function (e) {
		var currentAttrValue = jQuery(this).attr('href');

		// Show/Hide Tabs
		jQuery('.container ' + currentAttrValue).show().siblings().hide();

		// Change/remove current tab to active
		jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

		e.preventDefault();
	});
});
//directions accordion
$(document).ready(function(){
	$("#toggle1").click(function(){
	  $("#eastpie").slideToggle("slow");
	});
  });
  $(document).ready(function(){
	$("#toggle2").click(function(){
	  $("#westpie").slideToggle("slow");
	});
  });
  $(document).ready(function(){
	$("#toggle3").click(function(){
	  $("#ecp").slideToggle("slow");
	});
  });
  $(document).ready(function(){
	$("#toggle4").click(function(){
	  $("#tpe").slideToggle("slow");
	});
  });
