var menu = document.getElementById("menu");
var plus = document.getElementById("plus");
var abc = 0;

function expand() {
    if (abc === 0) {
        menu.style.transform = "scale(3)";
        plus.style.transform = "rotate(360deg)";
        abc = 1;
    } else {
        menu.style.transform = "scale(1)";
        plus.style.transform = "rotate(0deg)";
        abc = 0;
    }
}

// Attach the function to an event listener, for example:
plus.addEventListener("click", expand);
