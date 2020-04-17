let images=[];
let step=2;
images[0]=''
images[1]='./Photos/chronis-yan-2.jpg'
images[2]='./Photos/chronis-yan-1.jpg'
images[3]='./Photos/patrick-robert-doyle-1.jpg'
images[4]='./Photos/chronis-yan-3.jpg'
images[5]='./Photos/dan-price-1.jpg'
images[6]='./Photos/jacek-smoter-1.jpg'
images[7]='./Photos/manik-rathee-1.jpg'
images[8]='./Photos/neil-thomas-1.jpg'
images[9]='./Photos/tiago-b-1.jpg'

let images_texts=[]
images_texts[1]="This is the number 1's text's"
images_texts[2]="This is the number 2's text's"
images_texts[3]="This is the number 3's text's"
images_texts[4]="This is the number 4's text's"
images_texts[5]="This is the number 5's text's"
images_texts[6]="This is the number 6's text's"
images_texts[7]="This is the number 7's text's"
images_texts[8]="This is the number 8's text's"
images_texts[9]="This is the number 9's text's"

//betöltéskor
$('.image_viewer').append(`<img class="image_own" src="${images[step]}" width="580" height="380" alt="">`)
$('.image_viewer').append(`<div class="image_viewer_text">${images_texts[step]} </div>`)

$('.left_arrow').on('click',() =>{
    console.log("You pushed the left arrow")
    console.log(step)
    step--;
    if (step<=0) {
        step=(images.length-1);
        console.log("itt változik meg a step értéke")
        console.log(step)
    }
    $('.image_own').remove();
    $('.image_viewer').append(`<img class="image_own" src="${images[step]}" width="580" height="380" alt="">`)
    $('.image_viewer_text').remove();
    $('.image_viewer').append(`<div class="image_viewer_text">${images_texts[step]} </div>`)
})

$('.right_arrow').on('click',() =>{
    console.log("You pushed the right arrow")
    console.log(step)
    step++;
    if (step>=images.length) {
        step=1;
    }
    $('.image_own').remove();
    $('.image_viewer').append(`<img class="image_own" src="${images[step]}" width="580" height="380" alt="">`)
    $('.image_viewer_text').remove();
    $('.image_viewer').append(`<div class="image_viewer_text">${images_texts[step]} </div>`)
})

//ez a thumbnails-ek létrehozását készíti el
for (let i = 1; i <= (images.length-1); i++) {
    $('.thumbnails_ul').append(`<li class="thumbnails_li_${i}" ><img src="${images[i]}" width="50" height="50" alt="bocsi, nem tudtam megjeleníteni"> </li>`);
    console.log(i);
    console.log(images.length); 
}

for (let i = 0; i < images.length; i++) {
    //ez a képek betöltéséért felelős
    $(`.thumbnails_li_${i}`).on('click',()=>{
        $('.image_own').remove();
        $('.image_viewer').append(`<img class="image_own" src="${images[i]}" width="580" height="380" alt="">`)
        //meg lehetne azt is csinálni hogy maga a szövegmező mindig ott legyen és csak a text legyen újratöltve
        //plusz egy div-vel
        $('.image_viewer_text').remove();
        $('.image_viewer').append(`<div class="image_viewer_text">${images_texts[i]} </div>`)
    })
    
    //ez meg a kiemelésért
    $(`.thumbnails_li_${i}`).mouseenter(function() {
        console.log("mouseenter works")
        $(`.thumbnails_li_${i}`).append('<div class="arrow_box"></div>')
    })
    
    $(`.thumbnails_li_${i}`).mouseleave(function() {
        console.log("mouseleave works")
       $('.arrow_box').remove()
    })
}
 