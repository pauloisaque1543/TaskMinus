class ListadeTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(tarefa) {
        this.tarefas.push(tarefa);
    }

    removerTarefa(id) {
        this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
    }

    listarTarefas() {
        return this.tarefas;
    }
}

const lista = new ListadeTarefas();
lista.adicionarTarefa({ id: 1, descricao: 'Comprar leite' });
lista.adicionarTarefa({ id: 2, descricao: 'Estudar JavaScript' });
console.log(lista.listarTarefas());
lista.removerTarefa(1);
console.log(lista.listarTarefas());