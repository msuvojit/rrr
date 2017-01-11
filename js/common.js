$(function() {

if (window.matchMedia("(max-width: 991px)").matches){
  $('ul.sf-menu').slicknav();
}
else{$("ul.sf-menu").superfish({
    delay: 400
  });}


	$("#getting-started")
  .countdown("2017/02/02", function(event) {
    $(this).text(
      event.strftime('%H:%M:%S')
    );
  });

  $('#tab-container').easytabs({
  	animate: false
  });

  $('.tab .spans_review').equalHeights();




 $('.bxslider').bxSlider({
  pager: false
 });

 if (window.matchMedia("(max-width: 991px)").matches){
    $('.product_row_slider').bxSlider({
    minSlides: 1,
    maxSlides: 1,
    slideWidth: 327,
    slideMargin: 30
 });
}
else{
  $('.product_row_slider').bxSlider({
    minSlides: 4,
    maxSlides: 4,
    slideWidth: 327,
    slideMargin: 30
 });
}


 $('.slider_products').bxSlider({
  pager: false,
  minSlides: 5,
  maxSlides: 5,
  slideWidth: 352,
  slideMargin: 30,
  auto: true
 });







  $('.less').click(function(){
    $('.hidden__text').slideToggle();
    $('.more').addClass('visible__text');
  });

  $('.more').click(function(){
    $('.hidden__text').slideToggle();
    $(this).removeClass('visible__text');
  });

});
