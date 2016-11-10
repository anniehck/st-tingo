// TASK 1
var destination = $('input.destination').val();
var checkIn = $('input.in_date_field').val();
var checkOut = $('input.out_date_field').val();
console.log(`${destination}: ${checkIn} - ${checkOut}`);

// TASK 2
function replaceTagline(initialLength) {
  var tagline = $('.listing_summary').find('h3').html();
  var hotelCount = $('#hotel_listings').find('li.tabsParent').length;
  var resultString;
  if (tagline.length === initialLength) {
    var insertString = hotelCount + ' out of';
    var split = tagline.split(' ');
    split.splice(1, 0, insertString);
    resultString = split.join(' ');
  } else {
    var split = tagline.split(' ');
    split.splice(1, 1, hotelCount);
    resultString = split.join(' ');
  }
  $('.listing_summary').find('h3').html(resultString);
}

var taglineLength = $('.listing_summary').find('h3').html().length;
replaceTagline(taglineLength);

$(window).scroll(replaceTagline);

// TASK 3
var header = '<div class="header"></div>';
var content = '<div class="content"></div>';
$('.hotel_name_filter').after('<div class="row" id="selected_hotels">' + header + content + '</div>');
var selectedHotels = $('#selected_hotels');
var fillerText = '<li><em>Nothing selected yet!</em></li>';

selectedHotels.find('.header').append('<div class="title">Selected Hotels</div>');
selectedHotels.find('.content').html('<ul id="selected">' + fillerText + '</ul>').css({'line-height': '1.7em', 'font-size': '.9em'});
selectedHotels.find('em').css('color', '#bbb');

$(document).on('click', 'a.do_show_rates', function(e) {
  // TASK 3-A
  e.preventDefault();
  window.open(e.target.href, '_blank');

  // TASK 3-B
  var hotelInfo = $(this).parent().parent().parent();
  var name = hotelInfo.find('.title').text();
  var list = $('ul#selected').find('li');
  var selected = [];

  if (list[0].textContent === 'Nothing selected yet!') {
   list[0].remove();
  }
  for (var i = 0; i < list.length; i++) {
    selected.push(list[i].innerText);
  }
  var link = `<a href="${e.target.href}" target="_blank">${name}</a>`;
  var link = '<a href="' + e.target.href + '" target="_blank">' + name + '</a>';
  if (!selected.includes(name)) {
    $('ul#selected').append('<li>' + link + '</li>').find('a').css('text-decoration', 'none');
  }
});
