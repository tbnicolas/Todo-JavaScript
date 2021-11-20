

export class Todo {

    static fromJson( obj = new Todo() ) {
        const { id, tarea, completado, creado } = obj;
        
        const tempTodo      = new Todo(tarea);
        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        return tempTodo;
    }

    constructor( tarea ) {
        this.tarea      = tarea;
        this.id         = this.uniqueId();
        this.completado = false;
        this.creado     = new Date();
    }

    uniqueId() {
        const head = Date.now().toString(36);
        const tail = Math.random().toString(36).substr(2);
        return head + tail;
    }

}