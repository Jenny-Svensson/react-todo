import { Todo } from "../models/Todo"
import { RemoveTodo } from "./RemoveTodo";

interface ItodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void; // New prop for delete function
}

export const TodoList = ({ todos, onToggle, onRemove }: ItodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} />
          {todo.text}
          <RemoveTodo todoId={todo.id} onRemove={onRemove} />
        </li>
      ))}
    </ul>
  )
};

export default TodoList;