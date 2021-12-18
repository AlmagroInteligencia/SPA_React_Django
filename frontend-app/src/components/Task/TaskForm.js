const TaskForm = () => {

    return (


        <div className="col-md-5">
                <div className="card text-white bg-success mb-3">
                    <div className="card-body">
                        <form id="tarea-form">
                            <input type="hidden" id="id-de-tarea"/>
                            <div className="form-group">
                                <input type="text" className="form-control" id="nombre" placeholder="Nombre de tarea"/>
                            </div>
                            <div className="form-group">
                                <textarea id="descripcion" className="form-control" placeholder="Descripción de la tarea" cols="30" rows="10"></textarea>
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-dark text-center">Guardar tarea</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


    )

};

export default TaskForm;