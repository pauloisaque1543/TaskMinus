const API = {
    url: "/data/list.json",
    fetchTasks: async () => {
        const result = await fetch(API.url);
        return await result.json();
    }
}

export default API;