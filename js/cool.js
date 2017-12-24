$( document ).ready(function() {
  console.log( 'ready!' );
  
  
  var callBtnHeight = $(".callBtn").height();
  var callBtnWidth = $(".callBtn").width();
  var emailBtnHeight = $(".emailBtn").height();
  var emailBtnWidth = $(".emailBtn").width();

  
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
		$(this).html("(704) 433-6315");
	}, function() {
		$(this).removeClass('smallerText');
		$(this).html('<i class="fa fa-phone"></i>&nbsp;Call Me');
	}
  );	
  
  /*
  $(".emailBtn").hover(
	function() {
		$(this).height(emailBtnHeight);
		$(this).width(emailBtnWidth);
		$(this).addClass('smallerText');
		$(this).html("ingoldmc17@gmail.com");
	}, function() {
		$(this).removeClass('smallerText');
		$(this).html('<i class="fa fa-envelope-o"></i>&nbsp;Email Me');
	}	
	)
	*/


/*
$("img")
	.hover(function() {
		$(this).attr("src","images/myFace2.jpg");
	}, function() {
		$(this).attr("src","images/myFace1.jpg");
	} )
*/
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});

