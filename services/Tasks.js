import API from "./API.js";

export async function loadData() {
    window.app.tasklist.tasks = await API.fetchTasks();
}