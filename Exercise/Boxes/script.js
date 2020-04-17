//$('.div_c').hover($('.div_c').append('<div class="arrow_box"></div>'))


$('.div_c').hover(() => {
    console.log("Az arrow_box-ban vagy benne")
    //$('.div_c').append('<div class="arrow_box"></div>')
}) 


$('.div_c').mouseenter(function() {
    console.log("mouseenter works")
    $('.div_c').append('<div class="arrow_box"></div>')
})

$('.div_c').mouseleave(function() {
    console.log("mouseleave works")
    $('.arrow_box').remove()
})