import React from 'react';

const TaskItem = ({task}) => {
    return (
        <div className="col-md-4 mb-2">
            <div className="card card-body text-white bg-success mb-3">
                <h3 className="card-title">{task.name}</h3>
                <p className="card-text">{task.body}</p>
                <button className="btn btn-primary">Edit task</button>
                <button className="btn btn-danger">Delete task</button>
            </div>
        </div>
    );
};

export default TaskItem;