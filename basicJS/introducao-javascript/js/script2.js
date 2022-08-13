let paciente1 = document.querySelector("#p1");
let pesop1 = paciente1.querySelector(".info-peso").textContent;
let alturap1 = paciente1.querySelector(".info-altura").textContent;
let tdimc = paciente1.querySelector(".info-imc");

let pesoEValida = true;
let alturaEValida = true;
if(pesop1 < 0 || pesop1 > 400){
  console.log("validar peso informado");
  pesoEValida = false;
}
if(alturap1 < 0 || alturap1 > 3.0){
  console.log("gigantes não são permitidos");
  alturaEValida = false;
}
if(alturaEValida && pesoEValida){
  let imc = pesop1 / (alturap1*alturap1);
  tdimc.textContent = imc;
  console.log(imc);
}else{
  tdimc.textContent = "Altura ou Peso invalidos!"
}
