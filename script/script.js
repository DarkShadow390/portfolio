let ecran = document.getElementById("ecran");
let codeButton = document.querySelectorAll("button");

ecran.addEventListener("input", function(){
    if(ecran.value.length > ecran.maxLength) ecran.value = ecran.value.slice(0, ecran.maxLength)
    
});



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

function valider() {
    //ajoute une animation au "circle7" si le motDePasse est exact 
    if(ecran.value.length > ecran.maxLength){
        alert("Le nombre maximum de caractères autorisés 4.");
    }
    if(ecran.value.length < ecran.maxLength){
        alert("Le nombre minimun de caractères requis  4.");
    }
    if (ecran.value == "1234") {
        document.getElementById("circle7").classList.add("animation");
        document.getElementById("circle2").classList.add("animation2");
        alert("bravo vous avez trouvez le code");
    }
    if (ecran.value == "1111") {
        document.getElementById("tout").classList.add("tout2");
    }
    if (ecran.value == "0000") {
        document.getElementById("circle7").classList.remove("animation");
        document.getElementById("circle2").classList.remove("animation2");
    }
    if (ecran.value == "00e+") {
        ecran.type = "number";
    }
    if (ecran.value == "1999") {
        ecran.type = "password";
    }
    if (ecran.value == "azer") {
        document.getElementById("tout").style.display ="none";
        document.querySelector("body").style.backgroundColor ="#0064ff87";
        
    }
    else {
        alert("mot de passe invalide");
    }
}

codeButton[11].addEventListener("click", valider);

document.body.addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        valider();
        console.log("valider");
    }
});