$(document).ready(function () {


  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });


  $(window).on("load scroll", function () {
    $(".fa-bars").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");


    // meka mokakda kiyala danne na
    if($(window).scrollTop() > 30) {
      $('header').addClass('header-active');
      console.log("active")
    }else{
      $('header').removeClass('header-active');
      console.log("remove");
    }

    
  });

});
