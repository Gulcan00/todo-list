export default function createTodo({
  title,
  description,
  dueDate,
  priority,
  notes = "",
  checklist = [],
}) {
  let complete = false;

  const toggleComplete = () => {
    complete = !complete;
  };

  return {
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
