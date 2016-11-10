// Task 1
var destination = $('input.destination').val();
var checkIn = $('input.in_date_field').val();
var checkOut = $('input.out_date_field').val();
console.log(`${destination}: ${checkIn} - ${checkOut}`);

// Task 2
function replaceTagline() {
  var tagline = $('.listing_summary').find('h3').html();
  var hotelTotal = tagline.split(' ')[1];
  var hotelCount = $('#hotel_listings').find('li.tabsParent').length;
  var split = tagline.split(' ');
  var stubLength;
  for (var i = 0; i < split.length; i++) {
    if (split[split.length - i] > 0) {
      stubLength = i;
      break;
    }
  }
  var stub = split.slice(-stubLength).join(' ');
  var insertString = `Searching ${hotelCount} out of `;
  var resultString = insertString + stub;
  $('.listing_summary').find('h3').html(resultString);
}

replaceTagline();
setInterval(replaceTagline, 1000);

// Task 3
var header = '<div class="header"></div>';
var content = '<div class="content"></div>';
$('.hotel_name_filter').after(`<div class="row" id="selected_hotels">${header} ${content}</div>`);
var selectedHotels = $('#selected_hotels');
var fillerText = '<li><em>Nothing selected yet!</em></li>';

selectedHotels.find('.header').append('<div class="title">Selected Hotels</div>');
selectedHotels.find('.content').html(`<ul id="selected">${fillerText}</ul>`).css({'line-height': '1.7em', 'font-size': '.9em'});
selectedHotels.find('em').css('color', '#bbb');

$(document).on('click', 'a.do_show_rates', function(e) {
  // Task 3-A
  e.preventDefault();
  window.open(e.target.href, '_blank');

  // Task 3-B
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
  if (!selected.includes(name)) {
    var link = `<a href="${e.target.href}" target="_blank">${name}</a>`;
    $('ul#selected').append(`<li>${link}</li>`).find('a').css('text-decoration', 'none');
  }
});
