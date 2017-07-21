/**
 * Accordion menu CSS
 */

$(function(){
  // 선언부
  function init(){
    // 처음 로딩되었을 때 상태
    $('.css-lnb-depth1-link').data({'open':'false'});

    // each() : 요소 개수만큼 반복하는 함수
    $('.css-lnb-depth2').each(function(index){
      $(this).data({'height' : $(this).height()}).css({height : 0});
    });
  }

  function menuOpen( $depth1Link ){
    $depth1Link.next().css({
      height : $depth1Link.next().data('height')
    });

    $depth1Link.data({'open' : 'true'}).addClass('up');
  }

  function menuClose( $depth1Link ){
    $depth1Link.parent().siblings().children('.css-lnb-depth2').css({
      height:0
    });

    $depth1Link.parent().siblings().children('.css-lnb-depth1-link').data('open', 'false').removeClass('up');


  }

  function menuSelfClose( $depth1Link ){
    $depth1Link.next().css({
      height : 0
    });
    $depth1Link.data({'open' : 'false'}).removeClass('up');
  }

// 실행부
  init();

  $('.css-lnb-depth1-link').on('click', function(e){

    e.preventDefault();

    if( $(this).data('open') == 'false'){

      menuOpen( $(this) );
      menuClose( $(this) );



    } else{
      menuSelfClose( $(this) );

    }
  });
});

/**
 * Accordion menu jQuery
 */

/*
  ※ show/hide 형태의 아코디언 메뉴
  ※ CSS 코딩 : styling, hide

  1. 마우스 클릭했을 때 sub 메뉴가 show / hide
  2. 클릭한 1 depth 의 sub 메뉴가 보일 때 다른 1 depth 의 sub 메뉴는 안 보여야 함
  3. sub 메뉴가 보일 대 화살표는 윗 방향 화살표로 변경
  4. sub 메뉴가 안 보이게 될 때 화살표는 아랫 방향 화살표로 변경
 */

/*
  ※ sub 메뉴의 영역이 늘어났다/줄어들었다 형태의 아코디언 메뉴
  ※ CSS 코딩 : styling, 줄어듬(높이 : 0)

  1. 마우스를 클릭했을 때 sub 메뉴의 상태에 따라 sub 메뉴가 늘어남/줄어듬
  2. 클릭한 1 depth의 sub 메뉴가 늘어날 때 다른 1 depth의 sub 메뉴는 줄어들어야 함.
  3. sub 메뉴가 보일 대 화살표는 윗 방향 화살표로 변경
  4. sub 메뉴가 안 보이게 될 때 화살표는 아랫 방향 화살표로 변경
 */
$(function(){

  // 선언부
  function init(){
    // 처음 로딩되었을 때 상태
    $('.lnb-depth1-link').data({'open':'false'});

    // each() : 요소 개수만큼 반복하는 함수
    $('.lnb-depth2').each(function(index){
      $(this).data({'height' : $(this).height()}).css({height : 0});
    });
  }

  function menuOpen( $depth1Link ){
    $depth1Link.next().stop().animate({
      height : $depth1Link.next().data('height')
    });

    $depth1Link.data({'open' : 'true'}).addClass('up');
  }

  function menuClose( $depth1Link ){
    $depth1Link.parent().siblings().children('.lnb-depth2').stop().animate({
      height:0
    });

    $depth1Link.parent().siblings().children('.lnb-depth1-link').data('open', 'false').removeClass('up');


  }

  function menuSelfClose( $depth1Link ){
    $depth1Link.next().stop().animate({
      height : 0
    });
    $depth1Link.data({'open' : 'false'}).removeClass('up');
  }


  // 실행부
  init();

  $('.lnb-depth1-link').on('click', function(e){

    e.preventDefault();

    if( $(this).data('open') == 'false'){

      menuOpen( $(this) );
      menuClose( $(this) );



    } else{
      menuSelfClose( $(this) );

    }
  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hY2NfbWVudV9jc3MuanMiLCJfYWNjX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhY2NfbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBBY2NvcmRpb24gbWVudSBDU1NcclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgLy8g7ISg7Ja467aAXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgLy8g7LKY7J2MIOuhnOuUqeuQmOyXiOydhCDrlYwg7IOB7YOcXHJcbiAgICAkKCcuY3NzLWxuYi1kZXB0aDEtbGluaycpLmRhdGEoeydvcGVuJzonZmFsc2UnfSk7XHJcblxyXG4gICAgLy8gZWFjaCgpIDog7JqU7IaMIOqwnOyImOunjO2BvCDrsJjrs7XtlZjripQg7ZWo7IiYXHJcbiAgICAkKCcuY3NzLWxuYi1kZXB0aDInKS5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcclxuICAgICAgJCh0aGlzKS5kYXRhKHsnaGVpZ2h0JyA6ICQodGhpcykuaGVpZ2h0KCl9KS5jc3Moe2hlaWdodCA6IDB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudU9wZW4oICRkZXB0aDFMaW5rICl7XHJcbiAgICAkZGVwdGgxTGluay5uZXh0KCkuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogJGRlcHRoMUxpbmsubmV4dCgpLmRhdGEoJ2hlaWdodCcpXHJcbiAgICB9KTtcclxuXHJcbiAgICAkZGVwdGgxTGluay5kYXRhKHsnb3BlbicgOiAndHJ1ZSd9KS5hZGRDbGFzcygndXAnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVDbG9zZSggJGRlcHRoMUxpbmsgKXtcclxuICAgICRkZXB0aDFMaW5rLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5jc3MtbG5iLWRlcHRoMicpLmNzcyh7XHJcbiAgICAgIGhlaWdodDowXHJcbiAgICB9KTtcclxuXHJcbiAgICAkZGVwdGgxTGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcuY3NzLWxuYi1kZXB0aDEtbGluaycpLmRhdGEoJ29wZW4nLCAnZmFsc2UnKS5yZW1vdmVDbGFzcygndXAnKTtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudVNlbGZDbG9zZSggJGRlcHRoMUxpbmsgKXtcclxuICAgICRkZXB0aDFMaW5rLm5leHQoKS5jc3Moe1xyXG4gICAgICBoZWlnaHQgOiAwXHJcbiAgICB9KTtcclxuICAgICRkZXB0aDFMaW5rLmRhdGEoeydvcGVuJyA6ICdmYWxzZSd9KS5yZW1vdmVDbGFzcygndXAnKTtcclxuICB9XHJcblxyXG4vLyDsi6TtlonrtoBcclxuICBpbml0KCk7XHJcblxyXG4gICQoJy5jc3MtbG5iLWRlcHRoMS1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmKCAkKHRoaXMpLmRhdGEoJ29wZW4nKSA9PSAnZmFsc2UnKXtcclxuXHJcbiAgICAgIG1lbnVPcGVuKCAkKHRoaXMpICk7XHJcbiAgICAgIG1lbnVDbG9zZSggJCh0aGlzKSApO1xyXG5cclxuXHJcblxyXG4gICAgfSBlbHNle1xyXG4gICAgICBtZW51U2VsZkNsb3NlKCAkKHRoaXMpICk7XHJcblxyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuIiwiLyoqXHJcbiAqIEFjY29yZGlvbiBtZW51IGpRdWVyeVxyXG4gKi9cclxuXHJcbi8qXHJcbiAg4oC7IHNob3cvaGlkZSDtmJXtg5zsnZgg7JWE7L2U65SU7Ja4IOuplOuJtFxyXG4gIOKAuyBDU1Mg7L2U65SpIDogc3R5bGluZywgaGlkZVxyXG5cclxuICAxLiDrp4jsmrDsiqQg7YG066at7ZaI7J2EIOuVjCBzdWIg66mU64m06rCAIHNob3cgLyBoaWRlXHJcbiAgMi4g7YG066at7ZWcIDEgZGVwdGgg7J2YIHN1YiDrqZTribTqsIAg67O07J28IOuVjCDri6TrpbggMSBkZXB0aCDsnZggc3ViIOuplOuJtOuKlCDslYgg67O07Jes7JW8IO2VqFxyXG4gIDMuIHN1YiDrqZTribTqsIAg67O07J28IOuMgCDtmZTsgrTtkZzripQg7JyXIOuwqe2WpSDtmZTsgrTtkZzroZwg67OA6rK9XHJcbiAgNC4gc3ViIOuplOuJtOqwgCDslYgg67O07J206rKMIOuQoCDrlYwg7ZmU7IK07ZGc64qUIOyVhOueqyDrsKntlqUg7ZmU7IK07ZGc66GcIOuzgOqyvVxyXG4gKi9cclxuXHJcbi8qXHJcbiAg4oC7IHN1YiDrqZTribTsnZgg7JiB7Jet7J20IOuKmOyWtOuCrOuLpC/spITslrTrk6Tsl4jri6Qg7ZiV7YOc7J2YIOyVhOy9lOuUlOyWuCDrqZTribRcclxuICDigLsgQ1NTIOy9lOuUqSA6IHN0eWxpbmcsIOykhOyWtOuTrCjrhpLsnbQgOiAwKVxyXG5cclxuICAxLiDrp4jsmrDsiqTrpbwg7YG066at7ZaI7J2EIOuVjCBzdWIg66mU64m07J2YIOyDge2DnOyXkCDrlLDrnbwgc3ViIOuplOuJtOqwgCDripjslrTrgqgv7KSE7Ja065OsXHJcbiAgMi4g7YG066at7ZWcIDEgZGVwdGjsnZggc3ViIOuplOuJtOqwgCDripjslrTrgqAg65WMIOuLpOuluCAxIGRlcHRo7J2YIHN1YiDrqZTribTripQg7KSE7Ja065Ok7Ja07JW8IO2VqC5cclxuICAzLiBzdWIg66mU64m06rCAIOuztOydvCDrjIAg7ZmU7IK07ZGc64qUIOyclyDrsKntlqUg7ZmU7IK07ZGc66GcIOuzgOqyvVxyXG4gIDQuIHN1YiDrqZTribTqsIAg7JWIIOuztOydtOqyjCDrkKAg65WMIO2ZlOyCtO2RnOuKlCDslYTrnqsg67Cp7ZalIO2ZlOyCtO2RnOuhnCDrs4Dqsr1cclxuICovXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgLy8g7ISg7Ja467aAXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgLy8g7LKY7J2MIOuhnOuUqeuQmOyXiOydhCDrlYwg7IOB7YOcXHJcbiAgICAkKCcubG5iLWRlcHRoMS1saW5rJykuZGF0YSh7J29wZW4nOidmYWxzZSd9KTtcclxuXHJcbiAgICAvLyBlYWNoKCkgOiDsmpTshowg6rCc7IiY66eM7YG8IOuwmOuzte2VmOuKlCDtlajsiJhcclxuICAgICQoJy5sbmItZGVwdGgyJykuZWFjaChmdW5jdGlvbihpbmRleCl7XHJcbiAgICAgICQodGhpcykuZGF0YSh7J2hlaWdodCcgOiAkKHRoaXMpLmhlaWdodCgpfSkuY3NzKHtoZWlnaHQgOiAwfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVPcGVuKCAkZGVwdGgxTGluayApe1xyXG4gICAgJGRlcHRoMUxpbmsubmV4dCgpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgaGVpZ2h0IDogJGRlcHRoMUxpbmsubmV4dCgpLmRhdGEoJ2hlaWdodCcpXHJcbiAgICB9KTtcclxuXHJcbiAgICAkZGVwdGgxTGluay5kYXRhKHsnb3BlbicgOiAndHJ1ZSd9KS5hZGRDbGFzcygndXAnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVDbG9zZSggJGRlcHRoMUxpbmsgKXtcclxuICAgICRkZXB0aDFMaW5rLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5sbmItZGVwdGgyJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBoZWlnaHQ6MFxyXG4gICAgfSk7XHJcblxyXG4gICAgJGRlcHRoMUxpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmxuYi1kZXB0aDEtbGluaycpLmRhdGEoJ29wZW4nLCAnZmFsc2UnKS5yZW1vdmVDbGFzcygndXAnKTtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudVNlbGZDbG9zZSggJGRlcHRoMUxpbmsgKXtcclxuICAgICRkZXB0aDFMaW5rLm5leHQoKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIGhlaWdodCA6IDBcclxuICAgIH0pO1xyXG4gICAgJGRlcHRoMUxpbmsuZGF0YSh7J29wZW4nIDogJ2ZhbHNlJ30pLnJlbW92ZUNsYXNzKCd1cCcpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIOyLpO2Wieu2gFxyXG4gIGluaXQoKTtcclxuXHJcbiAgJCgnLmxuYi1kZXB0aDEtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiggJCh0aGlzKS5kYXRhKCdvcGVuJykgPT0gJ2ZhbHNlJyl7XHJcblxyXG4gICAgICBtZW51T3BlbiggJCh0aGlzKSApO1xyXG4gICAgICBtZW51Q2xvc2UoICQodGhpcykgKTtcclxuXHJcblxyXG5cclxuICAgIH0gZWxzZXtcclxuICAgICAgbWVudVNlbGZDbG9zZSggJCh0aGlzKSApO1xyXG5cclxuICAgIH1cclxuICB9KTtcclxuXHJcbn0pOyJdfQ==
