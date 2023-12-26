export default function createProject(title = "All tasks") {
  const todoList = [];

  if (!localStorage.getItem(title)) {
    localStorage.setItem(title, "[]");
  }

  const addTodo = (todo) => {
    const todosLocalStorage = JSON.parse(localStorage.getItem(title)) || [];
    const todoExists = todosLocalStorage.some(
      (existingTodo) => JSON.stringify(existingTodo) === JSON.stringify(todo),
    );

    if (!todoExists) {
      todosLocalStorage.push(todo);
      localStorage.setItem(title, JSON.stringify(todosLocalStorage));
    }
    todoList.push(todo);
  };

  const deleteTodo = (index) => todoList.splice(index, 1);

  const getTodos = () => todoList;

  return {
    title,
    addTodo,
    deleteTodo,
    getTodos,
  };
}
