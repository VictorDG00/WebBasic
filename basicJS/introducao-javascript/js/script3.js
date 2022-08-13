let pacientes = document.querySelectorAll(".paciente");
let num = pacientes.length;
for(let i = 0; i < num; i++){
  let paciente = pacientes[i];
  let pesoEValida = true;
  let alturaEValida = true;
  let peso = paciente.querySelector(".info-peso").textContent;
  let altura = paciente.querySelector(".info-altura").textContent;
  let TdImc = paciente.querySelector(".info-imc");

  if(peso < 0 || peso > 100 || altura < 0 || altura > 3.0){
    pesoEValida = false;
    TdImc.textContent = "Peso ou Altura inválido!";
    paciente.style.color="red";
  }
  if(alturaEValida && pesoEValida){
    let imc = peso / (altura*altura);
    TdImc.textContent = imc.toFixed(2);
    console.log(imc);
  }
}
