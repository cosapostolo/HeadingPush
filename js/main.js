$(function() {


	var active;
	var next;

	$.localScroll();

  var nav_container = $(".nav-container");
  var nav = $("nav");
  var content = $('#content');
  nav.waypoint({

    handler: function(event, direction) {
        nav.toggleClass('sticky', direction=='down');
        nav.toggleClass( 'grid_3' );
        content.toggleClass('prefix_3');

        $('.back').toggle();

    }

  });


  var fheading = $('.heading').first();
  var navigation_links = $('nav a');


  fheading.waypoint({
    handler: function(event, direction) {
		var active_section;
		active_section = $(this);
     	active_section.toggleClass('stickyheading', direction=='down');
     	$('#contentcontainer').toggleClass('padd', direction=='down');

     	active = active_section;
    }
 
  });



  var headings = $('.heading');
  headings.splice(0, 1);

headings.waypoint({
    handler: function(event, direction) {
		//console.log('yo!');

		next = $(this);
		next.toggleClass('fixed', direction=='down');
		animateChange(active, next);

    },
    offset: '5px;'
 
  });


 function animateChange()
  {
  	active.animate({top: -45},{duration: 'slow'});
  	next.animate({top: -33},{duration: 'slow'});


  	active = next;
  }




});


