//anchor

$('a[href^="#"]').on('click', function(event) {
    event.preventDefault()
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top - $('header.site-header').height()
    $('html, body').animate({scrollTop: dn}, 700)
});


 
//services-tab

(function($){				
    jQuery.fn.lightTabs = function(options){
        
        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children(".services-content").children("div").removeClass("active");
                $(tabs).children(".services-content").children("div").eq(i).addClass("active");
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }
            
            showPage(0);				
            
            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });				
        };		
        return this.each(createTabs);
    };	
})(jQuery);
$(document).ready(function(){
    $(".services-tabs").lightTabs();
});



//event-slider

$('.events-slider').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, 
    arrows: true,
    prevArrow: '<div class="prev icon rounded btn slick-prev fas fa-chevron-left"></div>',
    nextArrow: '<div class="next icon rounded btn slick-next fas fa-chevron-right"></div>',
    dots: false,
    responsive: [
        {
        breakpoint: 767,
        settings: {  
            slidesToShow: 1,
        }
    },
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
        }
    }

]
    
});


//preloader

window.onload = function() {

    $('#ctn-preloader').addClass('loaded')
    $('#ctn-preloader').fadeOut(400)

    setTimeout(function() {
        var timer = 0


        $('#preloader').each(function() {
            var elem = $(this)

            setTimeout(function() {
                elem.addClass('animate')
            }, timer)

            timer += 200
        })
    }, 600)

}
