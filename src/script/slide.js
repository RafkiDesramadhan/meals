  $(document).ready(function(){
    var index = 0,
        items = $('.container div'),
        total = items.length;

    function slide() {
      var item = $('.container div').eq(index);
      items.hide();
      item.css('display', 'block');
    }

    var autoslide = setInterval(function(){
      index += 1;
      if(index > total-1) index=0;
      slide();
    },2000)

  $('#next').click(function(){
    index += 1;
    if(index > total-1) index=0;
    slide();
  })
  
  $('#prev').click(function(){
    index -= 1;
    if(index < 0) index=total-1;
    slide();
  })
});