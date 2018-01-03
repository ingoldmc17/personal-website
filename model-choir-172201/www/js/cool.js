$( document ).ready(function() {
  console.log( 'ready!' );
  
  
  var callBtnHeight = $(".callBtn").height();
  var callBtnWidth = $(".callBtn").width();
  var emailBtnHeight = $(".emailBtn").height();
  var emailBtnWidth = $(".emailBtn").width();

  var msHeaderHeight = $("#moon-and-stone-header").height();

  $("#kannapolis-pawn-header").height(msHeaderHeight);
  $("#personal-website-header").height(msHeaderHeight);

  $(window).resize(
  	function() {
  	  var msNewHeaderHeight = $("#moon-and-stone-header").height();	
  	  $("#kannapolis-pawn-header").height(msNewHeaderHeight);
      $("#personal-website-header").height(msNewHeaderHeight);
  	}
  );

  $(".cool").hover(
  function() {
	  $("span.cool-text").html("😎");
    }, function() {
	  $("span.cool-text").html("cool");
	}  
  );
  
  $(".callBtn").hover(
	function() {
		$(this).height(callBtnHeight);
		$(this).width(callBtnWidth);
		$(this).addClass('smallerText');
		$(this).html("(980) 643-1067");
	}, function() {
		$(this).removeClass('smallerText');
		$(this).html('<i class="fa fa-phone"></i>&nbsp;Call Me');
	}
  );	
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});

