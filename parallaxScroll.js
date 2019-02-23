$(window).scroll(function(){
    var scrollval = $(this).scrollTop();    // It will return scroll value

    $(".logo").css("transform",'translate(0px,-'+scrollval/15+'%)');
    $(".parallax").css("transform",'translate(0px,'+scrollval/50+'%)');
});
