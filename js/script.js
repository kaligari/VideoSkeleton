jQuery(function(){

  center('#slide1');
  
  
  jQuery('.player').mb_YTPlayer();
  $('#arr-left').click(function(){         
    //$('#slide1').hide('slide',{direction: 'right', duration: 1000, easing: 'easeOutExpo'},function(){
    $('#slide1').fadeOut(function(){      
      $('#slide1').removeClass('active');
      $('#slide2').addClass('active');
      center('#slide2');      
      $('#slide2').fadeIn();//show('slide',{direction: 'left', duration: 1000, easing: 'easeOutExpo'});      
    });           
  });
  $('#arr-right').click(function(){
    //$('#slide2').hide('slide',{direction: 'left', duration: 1000, easing: 'easeOutExpo'},function(){
    $('#slide2').fadeOut(function(){
      $('#slide2').removeClass('active');
      $('#slide1').addClass('active');
      center('#slide1');      
      $('#slide1').fadeIn();//show('slide',{direction: 'right', duration: 1000, easing: 'easeOutExpo'});      
    });
  });
  
  function center(e){
    $(e).css('margin-top',($(document).height()-$(e).height())/2+'px');
  }    
});