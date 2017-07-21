/**
 * Tap Menu CSS
 */

$(function(){

  $('.css-tab-heading').on('click', function(e){

    e.preventDefault();

    var tabIndex = $(this).index('.css-tab-heading') ;

    $('.css-tab-heading>a').removeClass('on');
    $('.css-tab-heading').eq(tabIndex).children('a').addClass('on');

    $('.css-tab-content').removeClass('on');
    $('.css-tab-content').eq(tabIndex).addClass('on');

  });

});
/**
 * Tab Menu Jquery
 */

$(function(){

  $('.tab-heading').on('click', function(e){

    e.preventDefault();

    var tabIndex = $(this).index('.tab-heading') ;

    $('.tab-heading>a').removeClass('on');
    $('.tab-heading').eq(tabIndex).children('a').addClass('on');

    $('.tab-content').fadeOut(100);
    $('.tab-content').eq(tabIndex).fadeIn(300);

  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl90YWJfbWVudV9jc3MuanMiLCJfdGFiX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidGFiX21lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVGFwIE1lbnUgQ1NTXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcuY3NzLXRhYi1oZWFkaW5nJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHZhciB0YWJJbmRleCA9ICQodGhpcykuaW5kZXgoJy5jc3MtdGFiLWhlYWRpbmcnKSA7XHJcblxyXG4gICAgJCgnLmNzcy10YWItaGVhZGluZz5hJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKCcuY3NzLXRhYi1oZWFkaW5nJykuZXEodGFiSW5kZXgpLmNoaWxkcmVuKCdhJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgJCgnLmNzcy10YWItY29udGVudCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCgnLmNzcy10YWItY29udGVudCcpLmVxKHRhYkluZGV4KS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogVGFiIE1lbnUgSnF1ZXJ5XHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcudGFiLWhlYWRpbmcnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdmFyIHRhYkluZGV4ID0gJCh0aGlzKS5pbmRleCgnLnRhYi1oZWFkaW5nJykgO1xyXG5cclxuICAgICQoJy50YWItaGVhZGluZz5hJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKCcudGFiLWhlYWRpbmcnKS5lcSh0YWJJbmRleCkuY2hpbGRyZW4oJ2EnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICAkKCcudGFiLWNvbnRlbnQnKS5mYWRlT3V0KDEwMCk7XHJcbiAgICAkKCcudGFiLWNvbnRlbnQnKS5lcSh0YWJJbmRleCkuZmFkZUluKDMwMCk7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7Il19
