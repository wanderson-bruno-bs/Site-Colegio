
function LeiaMais() {
  let pontos = document.getElementById("pontos");
  let maisTexto = document.getElementById("mais");
  let bntLeiaMais = document.getElementById("btnLeiaMais");

  if(pontos.style.display === "none"){
    pontos.style.display = "inline";
    maisTexto.style.display = "none";
    bntLeiaMais.innerHTML = "Leia Mais";
  } 
  else {
    pontos.style.display="none";
    maisTexto.style.display="inline";
   btnLeiaMais.innerHTML="Leia Menos";
  }
}

