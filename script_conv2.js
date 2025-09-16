document.addEventListener("DOMContentLoaded", function() {
  const euro = document.querySelector("#euro");
  const ame = document.querySelector("#ame");
  const aus = document.querySelector("#aus");

  euro.addEventListener("input", function() { convertir(euro); });
  ame.addEventListener("input", function() { convertir(ame); });
  aus.addEventListener("input", function() { convertir(aus); });

  function convertir(inputRempli) {
    const valeur = parseFloat(inputRempli.value);

    const euroInput = document.getElementById("euro");
    const ameInput  = document.getElementById("ame");
    const ausInput  = document.getElementById("aus");

    switch (inputRempli.id) {
      case "euro":
        ameInput.value = (valeur * 1.18).toFixed(2);
        ausInput.value = (valeur * 1.77).toFixed(2);
        break;
      case "ame":
        euroInput.value = (valeur * 0.85).toFixed(2);
        ausInput.value  = (valeur * 1.49).toFixed(2);
        break;
      case "aus":
        euroInput.value = (valeur * 0.56).toFixed(2);
        ameInput.value  = (valeur * 0.67).toFixed(2);
        break;
    }
  }
});