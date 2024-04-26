let photo_perfil = document.getElementById("photo_perfil");

photo_perfil.onclick = function()
{
    document.body.classList.toggle("light_mode");
};

// Otra forma de hacerlo usando una arrow function
// photo_perfil.onclick = () => document.body.classList.toggle("light_mode");
