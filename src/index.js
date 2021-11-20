import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
import './styles.css';


export const todoList = new TodoList();

//Opcion 1
//todoList.todos.forEach( todo => crearTodoHtml(todo));
/* ES LO MISMO */
//Opcion 2
todoList.todos.forEach(crearTodoHtml);

/* const tarea           = new Todo('Aprender JavaScript');


todoList.nuevoTodo(tarea);
 
crearTodoHtml( tarea );
console.log(todoList);

localStorage.setItem('mi-key','ABC123');
//sessionStorage.setItem('mi-key','ABC1234');


setTimeout(() =>{
    localStorage.removeItem('mi-key');
},1500); */

console.log('Todos', todoList.todos);