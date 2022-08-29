let pacientes = document.querySelectorAll(".paciente"); //pega todos os paciente da tabela
let num = pacientes.length; //numero de paciente
let titulo = document.querySelector(".teste1"); //pega a tag titulo
let addPaciente = document.querySelector("#adicionar-paciente"); //pega id do botão de adicionar
let carregarImc = document.querySelector(".carregarImc");

addPaciente.addEventListener("click", function (){
  event.preventDefault();
  let form = document.querySelector("#form-adiciona");
  let name = form.nome.value;
  let peso = form.peso.value;
  let altura = form.altura.value;
  let gordura = form.gordura.value;

  let pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");
  let nomeTd = document.createElement("td");
  nomeTd.classList.add("info-nome");
  let pesoTd = document.createElement("td");
  pesoTd.classList.add("info-peso");
  let alturaTd = document.createElement("td");
  alturaTd.classList.add("info-altura");
  let gorduraTd = document.createElement("td");
  gorduraTd.classList.add("info-gordura");
  let imcTd = document.createElement("td");

  nomeTd.textContent = name;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd)

  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
});


function calculoimc(){  
  for(let i = 0; i < num; i++){ //loop para calculo do imc
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
}

carregarImc.addEventListener("click", calculoimc);