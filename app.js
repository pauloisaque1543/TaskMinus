import TaskList from "./services/TaskList.js";
import API from "./services/API.js";
import { loadData } from "./services/Tasks.js";

window.app = {};
app.tasklist = TaskList;

window.addEventListener("DOMContentLoaded", async () => {
    await loadData();
});
