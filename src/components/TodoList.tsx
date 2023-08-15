import { Todo } from "../models/Todo"

interface ItodoListProps {
  todos: Todo[];
}

export const TodoList = ({ todos }: ItodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" checked={todo.done} readOnly />
          {todo.text}
        </li>
      ))}
    </ul>
  )
};

export default TodoList;