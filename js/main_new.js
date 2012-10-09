$(function() {



	$.localScroll();

  var headings = $('.heading').length;

  var currentHeading = 0;


var lastScrollTop = 0;
var st;
$(window).scroll(function(event){
  st = $(this).scrollTop();
  lastScrollTop = st;
  
});



  $('.navigation').scrollToFixed({  
    marginTop: 50,
    preFixed : function() { 
      $('.back').toggleClass('show');
    },
    postFixed: function() { 
      $('.back').toggleClass('show');
    }
  });

  $($('.heading')[0]).scrollToFixed({ 
     marginTop: 50, 
    offsetLeft : 0,
    limit: $($('.heading')[1]).offset().top - 33,
    postFixed: function() { 
      $(this).bind('unfixed', function() { $(this).css('left', ''); });
    },
    fixed: function() { 
      $($('#navlinks>li')[0]).show('fast')
    },
    preAbsolute: function() { 
      $($('#navlinks>li')[0]).hide();
      $($('#navlinks>li')[1]).addClass('firstLi');
    }

  });

  $($('.heading')[1]).scrollToFixed({ 
     marginTop: 50, 
    offsetLeft : 0,
    limit: $($('.heading')[2]).offset().top - 33,
    postFixed: function() { 
      $(this).bind('unfixed', function() { $(this).css('left', ''); });
      $($('#navlinks>li')[1]).removeClass('firstLi');

      
    },
    fixed: function() { 
      $($('#navlinks>li')[1]).show('fast');
      $($('#navlinks>li')[1]).addClass('firstLi');
      
    },
    preAbsolute: function() { 
      $($('#navlinks>li')[1]).hide();
      $($('#navlinks>li')[2]).addClass('firstLi');
      
    }

    
  });

  $($('.heading')[2]).scrollToFixed({ 
     marginTop: 50, 
    offsetLeft : 0,
    limit: $($('.heading')[3]).offset().top - 33,
    postFixed: function() { 
      $(this).bind('unfixed', function() { $(this).css('left', ''); });
      $($('#navlinks>li')[2]).removeClass('firstLi');
    },
    fixed: function() { 
      $($('#navlinks>li')[2]).show('fast');
      $($('#navlinks>li')[2]).addClass('firstLi');
      
    },
    preAbsolute: function() { 
      $($('#navlinks>li')[2]).hide();
      $($('#navlinks>li')[3]).addClass('firstLi');
      
    }
  });

  $($('.heading')[3]).scrollToFixed({ 
     marginTop: 50, 
    offsetLeft : 0,
    limit: $($('.heading')[4]).offset().top - 33,
    postFixed: function() { 
      $(this).bind('unfixed', function() { $(this).css('left', ''); });
      $($('#navlinks>li')[3]).removeClass('firstLi');
    },
    fixed: function() { 
      $($('#navlinks>li')[3]).show('fast');
      $($('#navlinks>li')[3]).addClass('firstLi');
      
    },
    preAbsolute: function() { 
      $($('#navlinks>li')[3]).hide();
      $($('#navlinks>li')[4]).addClass('firstLi');
      
    }
  });

  $($('.heading')[4]).scrollToFixed({ 
     marginTop: 50, 
    offsetLeft : 0,
    postFixed: function() { 
      $(this).bind('unfixed', function() { $(this).css('left', ''); });
      $($('#navlinks>li')[4]).removeClass('firstLi');
    },
    fixed: function() { 
      $($('#navlinks>li')[4]).show('fast');
      $($('#navlinks>li')[4]).addClass('firstLi');
      
    },
    preAbsolute: function() { 
      $($('#navlinks>li')[4]).hide();
      
    }
  });











  // function yo()
  // {
  //   $($('.heading')[currentHeading]).scrollToFixed({ 
  //    marginTop: 50, 
  //   limit: $($('.heading')[currentHeading + 1]).offset().top - 33,
  //   postFixed: function() { $(this).css('color', 'red'); currentHeading++;  yo(); }
  // });
  // }
$(window).scroll();
  $(window).resize();
       $(window).scroll();
});




