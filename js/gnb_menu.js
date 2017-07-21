/**
 * Gnb Menu CSS
 */

$(function(){

  var timeID; // setInterval, clearInterval에서 사용할 변수

  $('.css-menu-depth1-link').on('mouseenter', function(){
    // removeClass 하기위해 실행되고 있는 setInterval 취소
    clearInterval(timeID);



    // promise() : 앞선 동작이 모두 끝난 후 특정 기능을 실행 시킬 때 사용
    $(this).next().addClass('on').promise().done(function(){

      var $depth2Wrap = $(this).parent().siblings().children('.css-menu-depth2-wrap');

      // setTimeout() : ~초 이후에 한 번만 실행

      /*
       1. 타이머 함수 실행 횟수/취소
       2. 실행문의 횟수/시간 을 실행/취소

       를 고려해서 알고리즘 만들기

        1. 일반 코딩
         setInterval(function(){
          실행문
         }, 단위시간);

          - 단위 시간마다 setInterval과 실행문이 매번 실행

          ex) 단위시간 1000(1초), 회수 10 => 10초동안 setInterval 10번 실행, 실행문 10번 실행

              3초 시점에서 clearInterval => setInterval 3번, 실행문 3번 실행

        2. 시간이 취소되는 기능 구현 코딩

         setInterval(function(){
          if( i == 10 ){
            실행문
          }
          i++;
         }, 단위시간);

         - 단위시간마다 setInterval은 매전 실행되지만 실행문은 i가 10일때 한 번 실행행

         ex) 3.5초 시점에서 clearInterval 실행 => setInterval 3번, 실행문 0번(실행 취소)

       */

      var count = 0;
      timeID = setInterval(function(){
        if( count == 300 ){
          $depth2Wrap.removeClass('on')
        }
        count++;
      }, 1);

    });

  });

  $('.css-menu-depth1').on('mouseleave', function(){

    $('.css-menu-depth2-wrap').removeClass('on');

  });

});
/**
 * Gnb Menu jQuery
 */


$(function(){


  $('.menu-depth1-link').on('mouseenter', function(){
    // depth1 border 늘어나는 모션 효과
    $(this).children('.menu-depth1-border').stop().animate({
      width:64
    }, 300);

    // depth2 메뉴 늘어나는 모션 효과
    var depth1Index = $(this).index('.menu-depth1-link');
    var motionHeight = 54;

    if( depth1Index == 1 ){
      motionHeight = 80;
    }

    $(this).next('.menu-depth2-wrap').css({'z-index' : 10}).stop().animate({
      height:motionHeight,
      opacity : 1
    }, 300, function(){
      // $(this) => .menu-depth2-wrap
      $(this).parent().siblings().children('.menu-depth2-wrap').css({'z-index' : 0}).stop().animate({
        height : 0,
        opacity : 0
      }, 200);
    });

  });

  $('.menu-depth1-link').on('mouseleave', function(){
    // depth1 border 줄어드는 모션효과
    $(this).children('.menu-depth1-border').stop().animate({
      width : 0
    }, 300);
  });

  $('.menu-depth1').on('mouseleave', function(){
    // depth2 메뉴 줄어드는 모션 효과
    $('.menu-depth2-wrap').stop().animate({
      height : 0,
      opacity : 0
    }, 300);
  });




});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9nbmJfbWVudV9jc3MuanMiLCJfZ25iX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ25iX21lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogR25iIE1lbnUgQ1NTXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgdGltZUlEOyAvLyBzZXRJbnRlcnZhbCwgY2xlYXJJbnRlcnZhbOyXkOyEnCDsgqzsmqntlaAg67OA7IiYXHJcblxyXG4gICQoJy5jc3MtbWVudS1kZXB0aDEtbGluaycpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuICAgIC8vIHJlbW92ZUNsYXNzIO2VmOq4sOychO2VtCDsi6TtlonrkJjqs6Ag7J6I64qUIHNldEludGVydmFsIOy3qOyGjFxyXG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lSUQpO1xyXG5cclxuXHJcblxyXG4gICAgLy8gcHJvbWlzZSgpIDog7JWe7ISgIOuPmeyekeydtCDrqqjrkZAg64Gd64KcIO2bhCDtirnsoJUg6riw64ql7J2EIOyLpO2WiSDsi5ztgqwg65WMIOyCrOyaqVxyXG4gICAgJCh0aGlzKS5uZXh0KCkuYWRkQ2xhc3MoJ29uJykucHJvbWlzZSgpLmRvbmUoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIHZhciAkZGVwdGgyV3JhcCA9ICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmNzcy1tZW51LWRlcHRoMi13cmFwJyk7XHJcblxyXG4gICAgICAvLyBzZXRUaW1lb3V0KCkgOiB+7LSIIOydtO2bhOyXkCDtlZwg67KI66eMIOyLpO2WiVxyXG5cclxuICAgICAgLypcclxuICAgICAgIDEuIO2DgOydtOuouCDtlajsiJgg7Iuk7ZaJIO2an+yImC/st6jshoxcclxuICAgICAgIDIuIOyLpO2WieusuOydmCDtmp/siJgv7Iuc6rCEIOydhCDsi6Ttlokv7Leo7IaMXHJcblxyXG4gICAgICAg66W8IOqzoOugpO2VtOyEnCDslYzqs6Drpqzsppgg66eM65Ok6riwXHJcblxyXG4gICAgICAgIDEuIOydvOuwmCDsvZTrlKlcclxuICAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgICAgIOyLpO2WieusuFxyXG4gICAgICAgICB9LCDri6jsnITsi5zqsIQpO1xyXG5cclxuICAgICAgICAgIC0g64uo7JyEIOyLnOqwhOuniOuLpCBzZXRJbnRlcnZhbOqzvCDsi6TtlonrrLjsnbQg66ek67KIIOyLpO2WiVxyXG5cclxuICAgICAgICAgIGV4KSDri6jsnITsi5zqsIQgMTAwMCgx7LSIKSwg7ZqM7IiYIDEwID0+IDEw7LSI64+Z7JWIIHNldEludGVydmFsIDEw67KIIOyLpO2WiSwg7Iuk7ZaJ66y4IDEw67KIIOyLpO2WiVxyXG5cclxuICAgICAgICAgICAgICAz7LSIIOyLnOygkOyXkOyEnCBjbGVhckludGVydmFsID0+IHNldEludGVydmFsIDPrsogsIOyLpO2WieusuCAz67KIIOyLpO2WiVxyXG5cclxuICAgICAgICAyLiDsi5zqsITsnbQg7Leo7IaM65CY64qUIOq4sOuKpSDqtaztmIQg7L2U65SpXHJcblxyXG4gICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgaWYoIGkgPT0gMTAgKXtcclxuICAgICAgICAgICAg7Iuk7ZaJ66y4XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpKys7XHJcbiAgICAgICAgIH0sIOuLqOychOyLnOqwhCk7XHJcblxyXG4gICAgICAgICAtIOuLqOychOyLnOqwhOuniOuLpCBzZXRJbnRlcnZhbOydgCDrp6TsoIQg7Iuk7ZaJ65CY7KeA66eMIOyLpO2WieusuOydgCBp6rCAIDEw7J2865WMIO2VnCDrsogg7Iuk7ZaJ7ZaJXHJcblxyXG4gICAgICAgICBleCkgMy417LSIIOyLnOygkOyXkOyEnCBjbGVhckludGVydmFsIOyLpO2WiSA9PiBzZXRJbnRlcnZhbCAz67KILCDsi6TtlonrrLggMOuyiCjsi6Ttlokg7Leo7IaMKVxyXG5cclxuICAgICAgICovXHJcblxyXG4gICAgICB2YXIgY291bnQgPSAwO1xyXG4gICAgICB0aW1lSUQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKCBjb3VudCA9PSAzMDAgKXtcclxuICAgICAgICAgICRkZXB0aDJXcmFwLnJlbW92ZUNsYXNzKCdvbicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvdW50Kys7XHJcbiAgICAgIH0sIDEpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmNzcy1tZW51LWRlcHRoMScpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKCcuY3NzLW1lbnUtZGVwdGgyLXdyYXAnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogR25iIE1lbnUgalF1ZXJ5XHJcbiAqL1xyXG5cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcblxyXG4gICQoJy5tZW51LWRlcHRoMS1saW5rJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgLy8gZGVwdGgxIGJvcmRlciDripjslrTrgpjripQg66qo7IWYIO2aqOqzvFxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm1lbnUtZGVwdGgxLWJvcmRlcicpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgd2lkdGg6NjRcclxuICAgIH0sIDMwMCk7XHJcblxyXG4gICAgLy8gZGVwdGgyIOuplOuJtCDripjslrTrgpjripQg66qo7IWYIO2aqOqzvFxyXG4gICAgdmFyIGRlcHRoMUluZGV4ID0gJCh0aGlzKS5pbmRleCgnLm1lbnUtZGVwdGgxLWxpbmsnKTtcclxuICAgIHZhciBtb3Rpb25IZWlnaHQgPSA1NDtcclxuXHJcbiAgICBpZiggZGVwdGgxSW5kZXggPT0gMSApe1xyXG4gICAgICBtb3Rpb25IZWlnaHQgPSA4MDtcclxuICAgIH1cclxuXHJcbiAgICAkKHRoaXMpLm5leHQoJy5tZW51LWRlcHRoMi13cmFwJykuY3NzKHsnei1pbmRleCcgOiAxMH0pLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgaGVpZ2h0Om1vdGlvbkhlaWdodCxcclxuICAgICAgb3BhY2l0eSA6IDFcclxuICAgIH0sIDMwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgLy8gJCh0aGlzKSA9PiAubWVudS1kZXB0aDItd3JhcFxyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5tZW51LWRlcHRoMi13cmFwJykuY3NzKHsnei1pbmRleCcgOiAwfSkuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgIGhlaWdodCA6IDAsXHJcbiAgICAgICAgb3BhY2l0eSA6IDBcclxuICAgICAgfSwgMjAwKTtcclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLm1lbnUtZGVwdGgxLWxpbmsnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyBkZXB0aDEgYm9yZGVyIOykhOyWtOuTnOuKlCDrqqjshZjtmqjqs7xcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5tZW51LWRlcHRoMS1ib3JkZXInKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIHdpZHRoIDogMFxyXG4gICAgfSwgMzAwKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLm1lbnUtZGVwdGgxJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG4gICAgLy8gZGVwdGgyIOuplOuJtCDspITslrTrk5zripQg66qo7IWYIO2aqOqzvFxyXG4gICAgJCgnLm1lbnUtZGVwdGgyLXdyYXAnKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIGhlaWdodCA6IDAsXHJcbiAgICAgIG9wYWNpdHkgOiAwXHJcbiAgICB9LCAzMDApO1xyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxufSk7Il19
