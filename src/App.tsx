import { useState } from 'react';
import TodoList from './components/TodoList';
import { Todo } from './models/Todo';

function App() { // todos = all of our todos, setTodos = function to update our todos
  const [todos, setTodos] = useState<Todo[]>([
    
    new Todo("Test 1", false, 1),
    new Todo("Test 2", false, 2),
    new Todo("Test 3", true, 3),
  ])

  //add new todos to the todoList with setTodos
  const [newTodo, setNewTodo] = useState<string>("");
  
  const addTodo = () => {
    if(newTodo.trim() !== "") {
      const newTodoText = new Todo(newTodo, false, todos.length +1);
      setTodos([...todos, newTodoText]);
      setNewTodo("");
    }
  }
  
  return (
    <> 
      <TodoList todos={todos} />
      <input
         type="text"
         value={newTodo}
         onChange={(e) => setNewTodo(e.target.value)} 
         /> 
      <button onClick={addTodo}>Add</button>
    </>
    )
  }
  

export default App;
