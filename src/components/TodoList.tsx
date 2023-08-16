import { Todo } from "../models/Todo"

interface ItodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
}

export const TodoList = ({ todos, onToggle }: ItodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} />
          {todo.text}
        </li>
      ))}
    </ul>
  )
};

export default TodoList;