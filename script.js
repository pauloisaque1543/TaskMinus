const taskList = document.getElementById('task-list');
const addTaskButton = document.getElementById('add-task-button');


class ListadeTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(tarefa) {
        this.tarefas.push(tarefa);
        taskList.innerHTML += `<li>${tarefa.descricao} <button onclick="removerTarefa(${tarefa.id})">Remover</button></li>`;
    }

    removerTarefa(id) {
        this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
        taskList.innerHTML = '';
        this.tarefas.forEach(tarefa => {
            taskList.innerHTML += `<li>${tarefa.descricao} <button onclick="removerTarefa(${tarefa.id})">Remover</button></li>`;
        });
    }

    listarTarefas() {
        return this.tarefas;
    }
}

addTaskButton.addEventListener('click', () => {
    const descricao = prompt('Descrição da tarefa:');
   const id = Date.now();
   lista.adicionarTarefa({ id, descricao });
});

const lista = new ListadeTarefas();
lista.adicionarTarefa({ id: 1, descricao: 'Comprar leite' });
lista.adicionarTarefa({ id: 2, descricao: 'Estudar JavaScript' });
console.log(lista.listarTarefas());
lista.removerTarefa(1);
console.log(lista.listarTarefas());