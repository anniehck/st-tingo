// Task 1
var destination = $('input.destination').val();
var checkIn = $('input.in_date_field').val();
var checkOut = $('input.out_date_field').val();

// Task 2
var tagline = $('.listing_summary').find('h3').html();
var initial = tagline.length;

var replaceTagline = (initialLength) => {
  var tagElement = $('.listing_summary');
  var tagline = tagElement.find('h3').html();
  var hotelCount = $('#hotel_listings').find('li.tabsParent').length;
  var split;
  var resultString;
  if (tagline.length === initialLength) {
    var insertString = hotelCount + ' out of';
    split = tagline.split(' ');
    split.splice(1, 0, insertString);
    resultString = split.join(' ');
  } else {
    split = tagline.split(' ');
    split.splice(1, 1, hotelCount);
    resultString = split.join(' ');
  }
  tagElement.find('h3').html(resultString);
}

$(window).on("scroll", replaceTagline(initial), replaceTagline);

// Task 3
$('a.do_show_rates').attr('target', '_blank');
