const API_URL="http://127.0.0.1:8000/api/tasks/";

export const listTasks = async () => {
    return await fetch(API_URL);
};

export const addTask = async (newTask) => {
    return await fetch(API_URL,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": String(newTask.name).trim(),
            "body": String(newTask.body).trim()
        })
        
    });
};

export const deleteTask = async (taskId) => {
    return await fetch(`${API_URL}${taskId}`,{
        method:"DELETE"        
    });
};