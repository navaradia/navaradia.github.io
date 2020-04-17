console.log("Hy world!!!");

let names =['Andras', 'Andy', 'Bogi', 'Laci', 'Tamara', 'Rita'];

names.forEach(element =>console.log(element));

//$('body').append("<li>teszt</li>");
for (let i = 0; i < names.length; i++) {
    if (names[i]==="Andras") {
        names[i]= "<strong>" + names[i] + "</strong>";
    }
}


names.forEach(element =>
        $('.the_big_ul').append(
        `<li> ${element} </li>`
        )
    );

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery libary. How awesome!"
};

let words=additionalBlock.text;

let first_cycle=true;

while (first_cycle) {
    
    first_cycle=false;
}

$('body').append('<div class="sth"></div>')
$('.sth').append("<h1>" + additionalBlock.title + "</h1>"); 
$('.sth').append("<p class='sth_p'>" + additionalBlock.text + "</p>");
$('.sth_p').css('background-color','blue');
$('.sth_p').css('font-size','50px');
$('.sth').append("<button class='sth_button'>This is a button </button>");
let clicked=0;
$('.sth').append("<br><p class='this_is_the_button_paragraph'>This times clicked you the button: <p>")
$('.sth').append("<span class='clicked'> " + clicked + "</span>")
$('.sth').append("<br><button class='sth_button_2'>This is another button</button>")



$('.sth_button').on('click',() => {
    clicked++;
    console.log(clicked);
    console.log('Yeah, you clicked me!!');
    $('.clicked').text(clicked);
    //--------------------------------------------
    $('.changes').text("An other button was clicked");
})  

$('.sth_button_2').on('click',()=> {
    $('.sth_button').text("An other button was clicked");
})

$('.sth').append('<br><button class="sth_button_3">This is the third/color button</button>')

$('.sth_button_3').on('click',()=>{
    $('.sth_button').css('background-color','aqua');
    $('.sth_button_2').css('background-color', 'coral');
    $('.sth_button_3').css('background-color', 'darkgray');
})

