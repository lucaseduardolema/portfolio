function remove1(){
    document.getElementById("saiMenor1").classList.remove("position-absolute", "top-50", "start-0", "translate-middle-y");
}
function remove2(){
    document.getElementById("saiMenor2").classList.remove("position-absolute", "top-50", "start-0", "translate-middle-y");
}
x = window.screen.width;
y = window.screen.height;

if(x < 768){
    document.getElementById("saiMenor1").classList.remove("position-absolute", "top-50", "start-0", "translate-middle-y");
    document.getElementById("saiMenor2").classList.remove("position-absolute", "top-50", "start-0", "translate-middle-y");
}
// if($(window).width() < 768){
//     remove1()
// }