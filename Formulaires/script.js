 /*
 Modifiez le lien de wikipédia pour qu’il pointe vers le site français
 */
document.querySelector('#wiki').href = "https://fr.wikipedia.org/wiki/Wikipédia:Accueil_principal";

/*
Lors de l’appui sur le bouton, il faut vérifier que le texte dans l’étiquette (le premier input text)
soit « Oui » ou « Non ». Dans le cas contraire, il faut que le texte de l’étiquette soit « Il faut
mettre Oui ou Non » 
*/
document.querySelector('#btn').addEventListener('click', function() {
    let texte = document.querySelector('#premier').value;
    if (texte === 'Oui' || texte === 'Non' || texte === 'oui' || texte === 'non') {
        alert('Merci de votre réponse');
    } else {
         alert('Il faut mettre Oui ou Non');
    }
});

/*
En utilisant nextSibling (cf cours), modifiez Choix N°1, Choix N°2 et Choix N°3 par
Technologie du Web
Javascript
respectivement HP, Casque , Bluetooth. Ajoutez des id à l’HTML si nécessaire
*/
document.querySelector('#choix1').nextSibling.textContent = "HP";
document.querySelector('#choix2').nextSibling.textContent = "Casque";
document.querySelector('#choix3').nextSibling.textContent = "Bluetooth";

/*
Dès qu’un choix est réalisé, modifiez en dessous « Volume » en « Volume HP », Volume
Casque» ou Volume Bluetooth».
Aide :
- utilisez input[name="choix"]
- utilisez this.value == "1"
- nextSibling.nextSibling
*/
let choix = document.querySelectorAll('input[name="choix"]');
for (let i = 0; i < choix.length; i++) {
    choix[i].addEventListener('change', function() {
        let volumeInput = document.querySelector('#volume');
        let volumeTextNode = volumeInput.nextSibling;
        while (volumeTextNode && volumeTextNode.nodeType !== Node.TEXT_NODE) {
            volumeTextNode = volumeTextNode.nextSibling;
        }
        let texte = "";
        if (this.value === "choix1") {
            texte = "Volume HP";
        } else if (this.value === "choix2") {
            texte = "Volume Casque";
        } else if (this.value === "choix3") {
            texte = "Volume Bluetooth";
        }
        if (volumeTextNode) volumeTextNode.textContent = texte;
    });
}

/*
Modifiez le maximum du volume de 11 à 100. Affichez la valeur max dans la console.
Dès que cette barre est modifiée, sa valeur s’affiche juste en dessous.
Aide : utilisez this.value et comme événement OnInput (input).
*/
const volumeInput = document.getElementById('volume');
volumeInput.max = 100;
console.log(volumeInput.max);

let valeurAffichee = document.createElement('p');
valeurAffichee.id = "valeur-volume";
valeurAffichee.textContent = "Valeur du volume : " + volumeInput.value;
 
volumeInput.parentNode.parentNode.insertBefore(valeurAffichee, volumeInput.parentNode.nextSibling);

volumeInput.addEventListener('input', function() {
    valeurAffichee.textContent = "Valeur du volume : " + this.value;
});

/* 
Modifiez « Une case à cocher » en « Mute »
Aide : utilisez querySelector et label[for='ouinon'] si besoin
*/
const checkbox = document.getElementById('ouinon');
const label = document.querySelector("label[for='ouinon']");

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        label.textContent = "Mute";
    } else {
        label.textContent = "Une case à cocher";
    }
});

/* 
Un appui sur la case à cocher à droite de « Mute », désactive ou réactive le volume.
Aide : utilisez les attributs disabled et checked
*/
document.getElementById('desactiver').addEventListener('change', function() {
    volumeInput.disabled = this.checked;
});