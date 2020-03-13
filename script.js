 $(document).ready(function(){ //function for page navigation
		    $(".nav").on("click","a", function (event) {
		        event.preventDefault();
		        var id  = $(this).attr('href'),
		            top = $(id).offset().top;
		        $('body,html').animate({scrollTop: top}, 1500);
		    });
		});

 $(document).ready(function(){ //function for btn "Contact Us"
		   $(".intro__item").on("click","a", function (event) {
	        event.preventDefault();
	        var id  = $(this).attr('href'),
	            top = $(id).offset().top;
	        $('body,html').animate({scrollTop: top}, 1500);
		    });
		});

$(document).ready(function(){ //function for btn "Learn more"
		   $(".services__item").on("click","a", function (event) {
	        event.preventDefault();
	        var id  = $(this).attr('href'),
	            top = $(id).offset().top;
	        $('body,html').animate({scrollTop: top}, 1500);
		    });
		});

    