var clock = document.querySelector('#time');

function getTime(){
  const time = new Date();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  clock.innerHTML = `${hour<10 ? `0${hour}`:hour} : ${minutes<10 ? `0${minutes}`:minutes} : ${seconds<10 ? `0${seconds}`:seconds}`

  // if(hour >= 6 && hour <= 11){
  //   $('.fnb-list>.inputbox:nth-of-type(1)').trigger("click");
  // }else if(hour >= 12 && hour <= 15){
  //   $('.fnb-list>.inputbox:nth-of-type(2)').trigger("click");
  // }else if(hour >= 16 && hour <= 19){
  //   $('.fnb-list>.inputbox:nth-of-type(3)').trigger("click");
  // }else{
  //   $('.fnb-list>.inputbox:nth-of-type(4)').trigger("click");
  // }
}

function init(){
  setInterval(getTime, 1000);
}

init();

$('.fnb-list .inputbox').click(function(e){
  e.preventDefault();
  $('.fnb-list .inputbox').removeClass('btn-primary');
  $('.fnb-list .inputbox').removeAttr('checked');

  $(this).addClass('btn-primary');
  $(this).children('input[type="radio"]').attr('checked', 'checked');
  if($(this).children('input[type="radio"]').val()==0){
    $('.back').css({"background-image":"url(./img/bg_morning.jpg)"});
    $('.clock-box').css({"background-image":"url(./img/phone_morning.png)"});
    $('.logo img').attr("src","./img/logo_b.png")
    $('header a').css("color","#000");
    $('main').css("color","#000");
    $('.gnb-main-item').removeClass('whiteline');
  }else if($(this).children('input[type="radio"]').val()==1){
    $('.back').css({"background-image":"url(./img/bg_afternoon.jpg)"});
    $('.clock-box').css({"background-image":"url(./img/phone_afternoon.png)"});
    $('.logo img').attr("src","./img/logo_b.png")
    $('header a').css("color","#000");
    $('main').css("color","#000");
    $('.gnb-main-item').removeClass('whiteline');
  }else if($(this).children('input[type="radio"]').val()==2){
    $('.back').css({"background-image":"url(./img/bg_evening.jpg)"});
    $('.clock-box').css({"background-image":"url(./img/phone_evening.png)"});
    $('.logo img').attr("src","./img/logo_b.png")
    $('header a').css("color","#000");
    $('main').css("color","#000");
    $('.gnb-main-item').removeClass('whiteline');
  }else if($(this).children('input[type="radio"]').val()==3){
    $('.back').css({"background-image":"url(./img/bg_night.jpg)"});
    $('.clock-box').css({"background-image":"url(./img/phone_night.png)"});
    $('.logo img').attr("src","./img/logo_w.png");
    $('header a').css("color","#fff");
    $('main').css("color", "#fff");
    $('.gnb-main-item').addClass('whiteline');
  }
});

