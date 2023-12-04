export function createProject(title) {
    let todoList = [];

   const addTodo = (todo) => todoList.push(todo);

   //const deleteTodo = ()

   const getTodos = () => todoList;

   return {
    addTodo,
    getTodos
   }
}