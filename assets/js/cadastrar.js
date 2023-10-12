// => = abreviação da função function onde se usa quando não se precisa de uma função para o projeto todo
//ou quando vc só precisa de uma unica função
// || = ou
document.querySelector("#botao-cadastrar").addEventListener("click", () => {

    
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

    console.log(tarefas)

  
    const tarefa = {
        titulo: document.querySelector("#titulo").value,
        descricao: document.querySelector("#descricao").value,
        pontos: document.querySelector("#pontos").value
    }
    
    tarefas.push(tarefa)

    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    window.location.href = "index.html"
   
})

