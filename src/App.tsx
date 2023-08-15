import { useState } from 'react';
import TodoList from './components/TodoList';
import { Todo } from './models/Todo';

function App() { // todos = all of our todos, setTodos = function to update our todos
  const [todos, setTodos] = useState<Todo[]>([
    
    new Todo("Test 1", false, 1),
    new Todo("Test 2", false, 2),
    new Todo("Test 3", true, 3),
  ])

  return (
    <> 
      <TodoList todos={todos} />
      <input type="text" /> 
      <button>Add</button>
    </>
    )
  }
  

export default App;
