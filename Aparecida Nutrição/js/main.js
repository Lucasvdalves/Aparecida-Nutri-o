// Manipulando HTML com DOM
let titulo = document.querySelector("h1");  // Buscando o Peso Paciente 1
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente");

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length ; i++){ // Estrutura de repetição
    var paciente = pacientes[i]; // trocando o nome das minhas variaveis LET Paciente
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var alturaEhValida = validaPeso (peso); // Estrutura de condicional
    var pesoEhValido = validaAltura (altura);

    if(!pesoEhValido){
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido!";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido"); // Alterando a cor no CSS caso dê erro 
    }

    if(!alturaEhValida){
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida){ // 100 / 2.0 * 2.0 = 100 / 4 = 25 Buscando IMC
        var imc = calculaImc(peso,altura);    
        tdImc.textContent = imc;
    }    
}


function validaPeso (peso){
    if (peso >=0 && peso < 1000){
        return true;
    }else{
        return false;
    }

}

function validaAltura (altura){
    if (altura >=0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc . toFixed(2);
}



// titulo.addEventListener("click",function () { // Função Anonima
//     console.log("Função Anonima");
// });

// function mostraMensagem(){  // Declarando função Comum
//     console.log("Olá");
// }

