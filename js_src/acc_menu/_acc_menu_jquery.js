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