export default function createTodo({ title, description, dueDate, priority }) {
  let complete = false;
  const id = Date.now();

  const toggleComplete = () => {
    complete = !complete;
    return { ...this, complete };
  };

  return {
    id,
    title,
    description,
    dueDate,
    priority,
    complete,
    toggleComplete,
  };
}
