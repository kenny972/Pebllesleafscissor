

var resultatkenny=0;
var resultatcompu=0;
while(resultatkenny<3 && resultatcompu<3 ){
var kenny = prompt("pebbles, leaf, scissors?");
var compu = Math.random();
if (compu < 0.34){
  compu = "pebbles";
}

else if  (compu <= 0.67){
  compu = "leaf";
}

else {
  compu = "scissors";
}
alert("My choice:" + " "+ compu);

function tirage (kenny,compu){
if (kenny === compu){
alert("Equality. But I will win");
}
  else if (kenny === "scissors"){
   if (compu === "pebbles"){
  resultatcompu++; return "I do not like the losers! Get out!"
   }
    else {
  resultatkenny++; return "Kenny it's the winner";
    }
  }
  
 else if (kenny === "leaf"){
   if (compu === "pebbles"){
   resultatkenny++; return "Kenny it's the winner";
   }
    else {
   resultatcompu++; return "I do not like the losers! Get out!";
    }
  }
  
 else if (kenny === "pebbles"){
   if (compu === "scissors"){
   resultatkenny++; return "Kenny it's the winner";
   }
    else {
   resultatcompu++;  return "I do not like the losers! Get out!";
    }
  }
}

alert(tirage(kenny,compu));
}