function calcularEstatisticas() {
//buscar do localstorage
const tarefas = JSON.parse(localStorage.getItem("tarefas",))|| []
const pendentes  = tarefas.filter(t => t.concluida == false)
const qtdePendentes = pendentes.lenght
document.querySelector("#qtde-pendente").innerHTML = qtdePendentes

const concluidas =tarefas.filter(t => t.concluida == true)
const qtdeConcluida = concluidas.lenght
document.querySelector("#qtde-concluidas").innerHTML = qtdeConcluida


const totalPontos = tarefas.reduce((total, t) => total += +t.pontos, 0)
document.querySelector("#total-pontos").innerHTML = totalPontos
const meusPontos = tarefas.reduce((total, t) => total += +t.pontos, 0)
document.querySelector("#meus-pontos").innerHTML = meusPontos



}

calcularEstatisticas()