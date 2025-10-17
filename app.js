import TaskList from "./services/TaskList";
import API from "./services/API";
import { loadData } from "./services/Tasks";

window.app = {} 
app.tasklist = TaskList;

window.addEventListener("DOMContentLoaded", async () => {
    await loadData();
});
