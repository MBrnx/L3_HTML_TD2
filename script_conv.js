document.addEventListener("DOMContentLoaded", () => {
    const bouton = document.getElementById("conv");

  bouton.addEventListener("click", () => {
    const euroInput = document.getElementById("euro");
    const ameInput  = document.getElementById("ame");
    const ausInput  = document.getElementById("aus");

    // Cherche le premier champ rempli
    const rempli = [euroInput, ameInput, ausInput].find(input => input.value.trim() !== "");

    if (!rempli) {
      alert("Aucun champ n'a été rempli.");
      return;
    }

    convertir(rempli); 
  });
});

function convertir(inputRempli) {
    const valeur = parseFloat(inputRempli.value);

    const euroInput = document.getElementById("euro");
    const ameInput  = document.getElementById("ame");
    const ausInput  = document.getElementById("aus");

    ameInput.value = (valeur * 1.18).toFixed(2);
    ausInput.value = (valeur * 1.77).toFixed(2);
}