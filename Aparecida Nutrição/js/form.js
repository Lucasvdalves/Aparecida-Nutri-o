var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault(); // Funçao previne comportamentos padrão

    //Extraindo informações do paciente do form

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form); // Adicionando paciente atráves de objetos


    // var nome = form.nome.value;       // Jeito antigo
    // var peso = form.peso.value;
    // var altura = form.altura.value;
    // var gordura = form.gordura.value;

    // Cria TR e TD do Paciente 

    var pacienteTr = montaTr(paciente); // Criatno TR e TD com função

    var erros = validaPaciente(paciente);
   
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes"); // Adicionar os campos do form dentro da tabela do HTML
    tabela.appendChild(pacienteTr);

    form.reset();
   var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr);
}

adicionaPacienteNaTabela(paciente);

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro"); // For Eatch
    ul.innerHTML = "";
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}

function obtemPacienteDoFormulario(form) { //Representando Pacientes em Objetos

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr"); // criar um elemento dentro do HTML
    pacienteTr.classList.add("paciente");

    var nomeTd = document.createElement("td");
    nomeTd.classList.add(".info-nome");
    nomeTd.textContent = paciente.nome;


    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));  //Adicionar as TD dentro da minha TR como filhos igual na estrutura do HTML
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;

}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = []

    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)){
        erros.push("Peso é Inválido!");
    }
    if (!validaAltura(paciente.altura)){
        erros.push("Altura é Inválida!");
    } 

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    return erros;
}