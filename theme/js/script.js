
$( document ).ready(function() {
$( ".menu-togle" ).click(function() {
    $( ".header-menu" ).toggleClass( "mobile-show" ); 
	 $( ".header" ).toggleClass( "mobile-h-show" ); 
	  $( "body" ).toggleClass( "mobile-f-menu" ); 
});



$( "ul.menu li a" ).click(function() {
    $( ".header-menu" ).removeClass( "mobile-show" ); 
	 $( ".header" ).removeClass( "mobile-h-show" ); 
	  $( "body" ).removeClass( "mobile-f-menu" ); 
});




$( ".foot-title" ).click(function() {
    $(this).parents( ).toggleClass( "showfm" ); 
	 
});

 $(".service-acard dd").hide().prev().click(function() {
	$(this).parents(".service-acard").find("dd").not(this).slideUp().prev().removeClass("active");
	$(this).next().not(":visible").slideDown().prev().addClass("active");
});


$('.news-carusel ').slick({
 
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
	    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
	],
	 slidesToShow: 4,
});










$('.why-carusel').slick({
 
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1
      }
    },
	    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
	],
	 slidesToShow: 8,
});
 


  


$('#modalv').on('hidden.bs.modal', function (e) {
  // do something...
})


 

function openYear(evt, yearName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(yearName).style.display = "block";
  evt.currentTarget.className += " active";
}



$('.siner').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
    duration: 2000,
    easing: 'swing',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});




});