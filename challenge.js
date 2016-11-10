// Task 1
var destination = $('input.destination').val();
var checkIn = $('input.in_date_field').val();
var checkOut = $('input.out_date_field').val();

$(document).ready(function() {
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
    // 3-A
    $('a.do_show_rates').attr('target', '_blank');

    // 3-B
    var header = '<div class="header"></div>';
    var content = '<div class="content"></div>';
    $('.hotel_name_filter').after('<div class="row" id="selected_hotels">' + header + content + '</div>');
    var selectedHotels = $('#selected_hotels');
    var fillerText = '<li><em>Nothing selected yet!</em></li>';

    selectedHotels.find('.header').append('<div class="title">Selected Hotels</div>');
    selectedHotels.find('.content').html('<ul id="selected">' + fillerText + '</ul>').css({'line-height': '1.6em', 'font-size': '.9em'});
    selectedHotels.find('em').css('color', '#bbb');

    $('a.do_show_rates').click(function() {
      var hotelInfo = $(this).parent().parent().parent();
      var name = hotelInfo.find('.title').text();
      var list = $('ul#selected').find('li');
      var selected = [];

      if (list[0].textContent === 'Nothing selected yet!') {
       list[0].remove();
      }
      for (var i = 0; i < list.length; i++) {
        selected.push(list[i].innerHTML);
      }
      if (!selected.includes(name)) {
        $('ul#selected').append('<li>' + name + '</li>');
      }
    });
});
