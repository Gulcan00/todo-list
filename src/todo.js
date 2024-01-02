export default function createTodo({
  title,
  description,
  dueDate,
  priority,
  complete = false,
}) {
  const id = Date.now();

  return {
    id,
    title,
    description,
    dueDate,
    priority,
    complete,
  };
}
