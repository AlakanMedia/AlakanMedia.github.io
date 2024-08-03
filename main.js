let photo_perfil = document.getElementById("photo_perfil");

photo_perfil.onclick = function() {
    document.body.classList.toggle("light_mode");
};

let to_top = document.getElementById("to_top");
to_top.style.display = "none";

window.addEventListener("scroll", () =>{
    if (this.scrollY > 500) {
        to_top.style.display = "block";
    } else {
        to_top.style.display = "none";
    }
});

to_top.onclick = function() {
    window.scrollTo({
        top: 0
    });
};

// Otra forma de hacerlo usando una arrow function
// photo_perfil.onclick = () => document.body.classList.toggle("light_mode");
