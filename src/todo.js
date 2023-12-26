export default function createTodo({
  title,
  description,
  dueDate,
  priority,
  notes = "",
  checklist = [],
}) {
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
    notes,
    checklist,
    complete,
    toggleComplete,
  };
}
