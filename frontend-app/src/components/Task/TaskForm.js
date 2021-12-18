import { useState } from "react";

const TaskForm = () => {

    const initialState = {id:0, name:"", body:""};
    
    const [task,setTask] = useState(initialState);

    const handleInputChange = (e) => {
        setTask({...task, [e.target.name]: e.target.value});
    };
    
    return (
        
                <div className="card text-white bg-primary mb-4">
                    <div className="card-body">
                        <form id="tarea-form" onSubmit={handleSubmit}>
                            <input type="hidden" id="id-task"/>
                            <div className="form-group">
                                <input type="text" className="form-control" id="name-task" name="name" value={task.name} onChange={handleInputChange} placeholder="Task name"/>
                            </div>
                            <div className="form-group">
                                <textarea id="body-task" className="form-control" name="body" value={task.body} onChange={handleInputChange} placeholder="Task body" cols="60" rows="3"></textarea>
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-dark text-center">Save Task</button>
                            </div>
                        </form>
                    </div>
                </div>

    )

};

export default TaskForm;