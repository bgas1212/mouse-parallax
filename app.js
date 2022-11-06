// mouse parallax
document.addEventListener("mousemove", parallax);
    function parallax(e){
    document.querySelectorAll('#obj').forEach(function(move){
        var moving_value = move.getAttribute("data-speed")
        var x = (e.clientX * moving_value) / 200;
        var y = (e.clientY * moving_value) / 200;

        move.style.transform = "translateX(" + x +"px ) translateY(" + y +"px ) ";
    });
}

// scroll parallax
// window.addEventListener('scroll', function()){
//     var value = window.scrollY;

//     obj.style.top = value * 0.5 + 'px';

// }

// coba tes
const parallax = document.querySelector(".obj");


window.onscroll = () => {
 let scrollTop = document.documentElement.scrollTop;


 obj.style.backgroundPositionY = scrollTop * 0.3 + "px";
 console.log(scrollTop);
};