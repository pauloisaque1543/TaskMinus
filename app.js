import TaskList from "./services/TaskList.js";
import API from "./services/API.js";
import { loadData } from "./services/Tasks.js";
import Router from "./services/Router.js";

window.app = {};
app.tasklist = TaskList;
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
    await loadData();
});
