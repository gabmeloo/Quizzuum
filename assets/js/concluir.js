function concluir(id){
    //buscar do localstorage
    const tarefas = JSON.parse(localStorage.getItem("tarefas",))|| []

    //buscar a tarefa com o id
    let tarefa = tarefas.find(t=> t.id === id)

    //alterar o estado da tarefa
    tarefa.concluida = true

    //salvar no localstorage
    localStorage.setItem("tarefas",JSON.stringify(tarefas))
    atualizar()
}