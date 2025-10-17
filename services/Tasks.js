import API from "./API.js";
import app from "../app.js";


export async function loadData() {
    app.tasklist.tasks = await API.fetchTasks();
}