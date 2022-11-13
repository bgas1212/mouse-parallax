// mouse parallax
document.addEventListener("mousemove", parallax);
    function parallax(e){
    document.querySelectorAll('.obj').forEach(function(move){
        var moving_value = move.getAttribute("data-speed")
        var x = (e.clientX * moving_value) / 200;
        var y = (e.clientY * moving_value) / 200;

        move.style.transform = "translateX(" + x +"px ) translateY(" + y +"px ) ";
    });
}

