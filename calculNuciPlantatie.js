//Functie de calcul a puietilor de nuc in functie de lungimea si latimea parcelei
function calcul(lungime, latime) {
  var lungime = document.getElementById("lungime").value;
  var latime = document.getElementById("latime").value;
  lungime = lungime / 10;
  latime = latime / 10;
  //lungimeRand = Math.ceil(lungime);
  // latimeRand = Math.ceil(latime);
  //var total = lungimeRand * latimeRand;
  var total = Math.round(lungime * latime);
  document.getElementById("rezultat").innerHTML = total;
}
