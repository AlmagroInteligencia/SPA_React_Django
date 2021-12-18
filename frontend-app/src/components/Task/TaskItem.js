import React from 'react';

const TaskItem = ({task}) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card card-body">
                <h3 className="card-title">{task.name}</h3>
                <p className="card-text">{task.body}</p>
                <button className="btn btn-warning">Edit task</button>
                <button className="btn btn-danger">Delete task</button>
            </div>
        </div>
    );
};

export default TaskItem;