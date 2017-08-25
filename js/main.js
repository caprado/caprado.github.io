// init isotope
// var $grid = $('.portfolio-item').isotope('layout');
//
// // filter items on button click
// $('.portfolio-filter').on( 'click', 'a', function(e) {
//   e.preventDefault();
//   var filterValue = $(this).attr('data-filter');
//   $grid.isotope({ filter: filterValue });
// });

// cache container
var $container = $('#portfolio-item');
// initialize isotope
$container.isotope({
  // options...
});

// filter items when filter link is clicked
$('#portfolio-filter a').click(function(e){
  e.preventDefault();
  $('#portfolio-filter li').removeClass('active');
  $(this).closest('li').addClass('active');
  var selector = $(this).attr('data-filter');
  $container.isotope({ filter: selector });
  return false;

  // $('#portfolio-filter li').removeClass('active');
  // $(this).closest('li').addClass('active');
});
