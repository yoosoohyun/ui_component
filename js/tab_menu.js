/**
 * Tap Menu CSS
 */



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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl90YWJfbWVudV9jc3MuanMiLCJfdGFiX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ0YWJfbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUYXAgTWVudSBDU1NcclxuICovXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIFRhYiBNZW51IEpxdWVyeVxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLnRhYi1oZWFkaW5nJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHZhciB0YWJJbmRleCA9ICQodGhpcykuaW5kZXgoJy50YWItaGVhZGluZycpIDtcclxuXHJcbiAgICAkKCcudGFiLWhlYWRpbmc+YScpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCgnLnRhYi1oZWFkaW5nJykuZXEodGFiSW5kZXgpLmNoaWxkcmVuKCdhJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgJCgnLnRhYi1jb250ZW50JykuZmFkZU91dCgxMDApO1xyXG4gICAgJCgnLnRhYi1jb250ZW50JykuZXEodGFiSW5kZXgpLmZhZGVJbigzMDApO1xyXG5cclxuICB9KTtcclxuXHJcbn0pOyJdfQ==
