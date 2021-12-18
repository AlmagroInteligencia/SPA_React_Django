import React, { useEffect, useState } from 'react';

import * as TaskServer from './TaskServer';

const TaskList=()=>{
    const [tasks,setTasks]=useState([]);
    
    const listTasks = async () => {
        try {
            const res = await TaskServer.listTasks();
            const data = await res.json();
            setTasks(data.tasks);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        listTasks();
    },[]);

    return (
        <div>
            {tasks.map((task) => (
                <h2>{task.name}</h2>
            ))}
        </div>
    )
};

export default TaskList;