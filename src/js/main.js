$(document).ready(function() {

  var clickEventType = (( window.ontouchstart!==null ) ? 'click':'touchend');

  $(window).load(function(){
    $('html,body').animate({ scrollTop: 0 }, '1');
  });

  /*------------------------------------Movie-----------------------------------*/
  var options = { videoId: 'TdzxRf_jyyc'};
  $('#home').tubular(options);
  var _ovc = $('<div id="bgOverlayContainer">').appendTo($('body'));
  _ovc.addClass('overlayPattern');
  $(window).on('resize', function(){
    _ovc.css({
      height : window.innerHeight
    });
  });

  /*-------------------------------- Page Preloader ----------------------------------*/
  $(window).load(function(){
    $('#page-loader').fadeOut(1000,function(){
    });
  })

  /*------------------------------- Navigation Functions --------------------------------*/
  if ($(window).scrollTop()< ($(window).height()-50)){
    $('#main-nav').removeClass('scrolled');
  }
  else{
    $('#main-nav').addClass('scrolled');
  }
  $(window).scroll(function(){
    if ($(window).scrollTop()< ($(window).height()-50)){
      $('#main-nav').removeClass('scrolled');
    }
    else{
      $('#main-nav').addClass('scrolled');
    }
  });

  /*------------------------------- ScrollTo Links -------------------------------*/
  $('a.scrollto').on(clickEventType, function(e){
    $('html,body').scrollTo(this.hash, this.hash, {gap:{y:-70}});
    e.preventDefault();
    if ($('.navbar-collapse').hasClass('in')){
      $('.navbar-collapse').removeClass('in').addClass('collapse');
    }
  });

  /*--------------------------------------- home ----------------------------------------*/
  $('#home').height($(window).height()+50);
  $(window).scroll( function() {
    var st = $(this).scrollTop();
    $('#home .container').css({ 'opacity' : (1.4 - st/400) });
  });
  var st = $(this).scrollTop();
  $('#home .container').css({ 'opacity' : (1.4 - st/400) });

  /*--------------------------------------- footer ----------------------------------------*/
  $('.gotop').on(clickEventType, function () {
    $('body, html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });

  /*---------------------- add and  remove class -----------------------------------*/
  /*---- Map size ----*/
  $(window).load(function(){
    var x = $(window).width();
    var y = 812;
    if (x < y) {
      $('#addClass-map').addClass('embed-responsive-1by1').removeClass('embed-responsive-16by9');
    }else{
      $('#addClass-map').addClass('embed-responsive-16by9').removeClass('embed-responsive-1by1');
    }
  });
  $(window).resize(function(){
    var x = $(window).width();
    var y = 812;
    if (x < y) {
      $('#addClass-map').addClass('embed-responsive-1by1').removeClass('embed-responsive-16by9');
    }else{
      $('#addClass-map').addClass('embed-responsive-16by9').removeClass('embed-responsive-1by1');
    }
  });

});
