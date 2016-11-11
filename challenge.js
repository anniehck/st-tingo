// TASK 1
var destination = $('input.destination').val();
var checkIn = $('input.in_date_field').val();
var checkOut = $('input.out_date_field').val();
console.log(`${destination}: ${checkIn} - ${checkOut}`);

// TASK 2
function updateTagline() {
  var tagline = $('.listing_summary > h3').html();
  var hotelCount = $('#hotel_listings').find('li.tabsParent').length;
  var tagWords = tagline.split(' ');
  if (tagWords.includes('Searching')) {
    // replace initial tagline
    var newTagline = `Showing ${hotelCount} out of`;
    $('.listing_summary > h3').html(tagline.replace('Searching', newTagline));
  } else {
    // update just the current hotel count
    tagWords.splice(1, 1, hotelCount);
    $('.listing_summary > h3').html(tagWords.join(' '));
  }
}

// update tagline, execute func on interval
updateTagline();
setInterval(updateTagline, 1000);

// TASK 3
// create empty sidebar divs
var header = '<div class="header"></div>';
var content = '<div class="content"></div>';
$('.hotel_name_filter').after(`<div class="row" id="selected_hotels">${header} ${content}</div>`);

var selectedHotels = $('#selected_hotels');
var fillerText = '<li><em>Nothing selected yet!</em></li>';

// fill header w title, content w filler text
selectedHotels.find('.header').append('<div class="title">Selected Hotels</div>');
selectedHotels.find('.content').html(`<ul id="selected">${fillerText}</ul>`).css({'line-height': '1.7em', 'font-size': '.9em'});
selectedHotels.find('em').css('color', '#bbb');

$(document).on('click', 'a.do_show_rates', function(e) {
  // TASK 3A - open hotel details in new window
  e.preventDefault();
  window.open(e.target.href, '_blank');

  // TASK 3B - add hotel to sidebar list
  // find selected hotel name
  var hotelInfo = $(this).parent().parent().parent();
  var name = hotelInfo.find('.title').text();
  var list = $('ul#selected > li');
  var selected = [];

  // remove filler text from list
  if (list[0].textContent === 'Nothing selected yet!') {
   list[0].remove();
  }
  // add hotel name to array
  for (var i = 0; i < list.length; i++) {
    selected.push(list[i].innerText);
  }
  // check array to avoid duplication, add hotel link to list
  if (!selected.includes(name)) {
    var link = `<a href="${e.target.href}" target="_blank">${name}</a>`;
    $('ul#selected').append(`<li>${link}</li>`).find('a').css('text-decoration', 'none');
  }
});
