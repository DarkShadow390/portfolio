let ecran = document.getElementById("ecran");
let codeButton = document.querySelectorAll("button");


codeButton[0].addEventListener("click", function () {
    // ajoute le chiffre 1 dans le code
    ecran.value += 1;
});
codeButton[1].addEventListener("click", function () {
    // ajoute le chiffre 2 dans le code
    ecran.value += 2;
});
codeButton[2].addEventListener("click", function () {
    // ajoute le chiffre 3 dans le code 
    ecran.value += 3;
});
codeButton[3].addEventListener("click", function () {
    // ajoute le chiffre 4 dans le code 
    ecran.value += 4;
});
codeButton[4].addEventListener("click", function () {
    // ajoute le chiffre 5 dans le code 
    ecran.value += 5;
});
codeButton[5].addEventListener("click", function () {
    // ajoute le chiffre 6 dans le code 
    ecran.value += 6;
});
codeButton[6].addEventListener("click", function () {
    // ajoute le chiffre 7 dans le code 
    ecran.value += 7;
});
codeButton[7].addEventListener("click", function () {
    // ajoute le chiffre 8 dans le code 
    ecran.value += 8;
});
codeButton[8].addEventListener("click", function () {
    // ajoute le chiffre 9 dans le code 
    ecran.value += 9;
});
codeButton[9].addEventListener("click", function () {
    // ajoute le chiffre 0 dans le code 
    ecran.value += 0;
});
codeButton[10].addEventListener("click", function () {
    //effacer la value du motDePasse au click
    ecran.value = "";
});
codeButton[11].addEventListener("click", function () {
    //ajoute une animation au "circle7" si le motDePasse est exact

    if (ecran.value == "1234") {
        document.getElementById("circle7").classList.add("animation");
        document.getElementById("circle2").classList.add("animation2");
        alert("bravo vous avez trouvez le code");
    }
    if (ecran.value == "0000") {
        document.getElementById("circle7").classList.remove("animation");
        document.getElementById("circle2").classList.remove("animation2");
    }
    else {
        alert("mot de passe incorret");
    }
});

