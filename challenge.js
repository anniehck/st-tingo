// Task 1
var destination = $('input.destination').val();
var checkIn = $('input.in_date_field').val();
var checkOut = $('input.out_date_field').val();

// Task 2
var tagElement = $('.listing_summary');
var tagline = tagElement.find('h3').html();

var hotelListings = $('#hotel_listings');
var hotelCount = hotelListings.find('li.tabsParent').length;
var insertString = hotelCount + ' out of';
