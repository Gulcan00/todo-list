export function createProject(title = 'General') {
    let todoList = [];

   const addTodo = (todo) => todoList.push(todo);

   const deleteTodo = (index) => todoList.splice(index, 1);

   const getTodos = () => todoList;

   return {
    title,
    addTodo,
    deleteTodo,
    getTodos
   }
}