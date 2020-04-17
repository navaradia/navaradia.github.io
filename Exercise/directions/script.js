let color="purple";
let number=10;
let word="col";

$(".north").css("background-color",color);

if (number>10) {
    $(".east").text("whoah, that's a big number.")
} else {
    $(".east").text("just a regular number, please")
}

let direct;
if (word==="cool") {
    direct="south"
} else {
    direct="west"
}

$(`.${direct}`).text("Power of DOM")