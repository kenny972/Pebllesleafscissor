
var joueur=prompt("pierre, feuille ou ciseau?");
var ordi=Math.random();
if (ordi < 0.34){
  ordi = "pierre";
}

else if  (ordi <= 0.67){
  ordi = "feuille";
}

else {
  ordi = "ciseau";
}
alert("choix ordinateur " + " "+ ordi);


function tirage (joueur,ordi){
if (joueur === ordi){
alert("egalite");
}
  else if (joueur === "ciseau"){
   if (ordi === "pierre"){
    return "ordi a gagne"
   }
    else {
      return "joueur a gagne"
    }
  }
  
 else if (joueur === "feuille"){
   if (ordi === "pierre"){
    return "joueur a gagne"
   }
    else {
      return "ordi a gagne"
    }
  }
  
 else if (joueur === "pierre"){
   if (ordi === "ciseau"){
    return "joueur a gagne"
   }
    else {
      return "ordi a gagne"
    }
  }

}
alert(tirage(joueur,ordi));
