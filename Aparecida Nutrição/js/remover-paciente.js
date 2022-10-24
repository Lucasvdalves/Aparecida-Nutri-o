var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event){
    // var alvoEvento =event.target;
    // var paiDoAlvo = alvoEvento.parentNode; // TR = Paciente = remover
    // paiDoAlvo.remove();
event.target.parentNode.classList.add("fadeOut");  // Evento de animação para remoção do paciente.
setTimeout (function(){
    event.target.parentNode.remove();
},500); 
});





// pacientes.forEach(function (paciente) {
//     paciente.addEventListener("dblclick", function () {
//         console.log("Duplo Click");
//         this.remove();   // this se refere ao paciente'
//     });
// });

