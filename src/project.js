export default function createProject(title = "All tasks") {
  const todoList = [];

  if (!localStorage.getItem(title)) {
    localStorage.setItem(title, "[]");
  }

  const addTodos = (todos) => {
    todoList.push(...todos);
  };

  const addTodo = (todo) => {
    const todosLocalStorage = JSON.parse(localStorage.getItem(title)) || [];
    todosLocalStorage.push(todo);
    localStorage.setItem(title, JSON.stringify(todosLocalStorage));
    todoList.push(todo);
  };

  const deleteTodo = (id) => {
    const todosLocalStorage = JSON.parse(localStorage.getItem(title)) || [];
    const todoIndex = todoList.findIndex((todo) => todo.id === id);
    todoList.splice(todoIndex, 1);
    todosLocalStorage.splice(todoIndex, 1);
    localStorage.setItem(title, JSON.stringify(todosLocalStorage));
  };

  const getTodos = () => todoList;

  return {
    title,
    addTodo,
    addTodos,
    deleteTodo,
    getTodos,
  };
}
