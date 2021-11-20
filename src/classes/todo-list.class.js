import { Todo } from ".";


export class TodoList{

    constructor() {
        this.cargarLocalStorage();
        //opcion 1:
        //this.todos = [];

        //opcion2: un objeto literal con la siguiente estructura
        /* 
         {
            id1: todo1,
            id2: todo2,
            id3: todo3,
            id4: todo4,
         } 
        */
    }

    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.guardarLocalStorage();

    }

    eliminarTodo( id ) {
        this.todos.filter( ( todo ) => todo.id != id );
        this.guardarLocalStorage();
    }

    marcarCompletado( id ) {
        for( const todo of this.todos ){
            if ( todo.id == id ) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados() {
        this.todos = this.todos.filter( ( todo ) => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {
        localStorage.setItem('todo',JSON.stringify(this.todos));
    }

    cargarLocalStorage() {
        
        this.todos =  ( localStorage.getItem('todo') ) 
                      ? JSON.parse( localStorage.getItem('todo') )
                      : [];
        
        this.todos = this.todos.map( Todo.fromJson );
    }
}