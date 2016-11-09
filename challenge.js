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

var header = '<div class="header"></div>';
var content = '<div class="content"></div>';

$('.hotel_name_filter').after('<div class="row" id="selected_hotels">' + header + content + '</div>');

var selectedHotels = $('#selected_hotels');
selectedHotels.find('.header').append('<div class="title">Selected Hotels</div>');

var fillerText = '<li><em>Nothing selected yet!</em></li>';
selectedHotels.find('.content').html(`<ul id="selected">${fillerText}</ul>`).css('color', '#bbb');

$('a.do_show_rates').on('click', function(event) {
  event.preventDefault();
  var hotelInfo = $(this).parent().parent().parent();
  var name = hotelInfo.find('.title').text();
  console.log(name);
  var list = $('ul#selected').find('li');
  var selected = [];

  if (list[0].textContent === 'Nothing selected yet!') {
   list[0].remove();
  }

  for (var i = 0; i < list.length; i++) {
    selected.push(list[i].innerHTML);
  }
  if (!selected.includes(name)) {
    $('ul#selected').append(`<li>${name}</li>`);
  }
});
