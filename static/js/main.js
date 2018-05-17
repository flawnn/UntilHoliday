var time = moment.unix(unix);
time.subtract(3, 'days');

$('#clock').countdown(time.toDate(), function(event) {
    var $this = $(this).html(event.strftime(''
      + '<span id="biggie" >%w</span>  weeks  '
      + '<span id="biggie">%d</span>  days  '
      + '<span id="biggie">%H</span>  hour  '
      + '<span id="biggie">%M</span>  min  '
      + '<span id="biggie">%S</span>  sec'));
  });