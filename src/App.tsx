import { useState } from 'react';
import TodoList from './components/TodoList';
import { Todo } from './models/Todo';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim() !== "") { // if newTodo is not empty string, continue
      const newTodoText = new Todo(newTodo, false, uuidv4()); // create a new ToDo into variable newTodoText
      setTodos([...todos, newTodoText]); // then add the newTodoText with a copy of the current todos that already exist
      setNewTodo(""); // set the input-field to empty when added.
    } else {
      console.log('You need to add something.....')
    }
  }

  const toggleTodo = (id: string) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="notebook">
        <h1>Todo List</h1>
        <TodoList todos={todos} onToggle={toggleTodo} onRemove={handleDelete} />
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo} className='addBtn'>Add</button>
      </div>
    </>
  )
}


export default App;
