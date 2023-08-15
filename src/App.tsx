import { useState } from 'react';
import TodoList from './components/TodoList';
import { Todo } from './models/Todo';
import { v4 as uuidv4 } from 'uuid';

function App() { // todos = all of our todos, setTodos = function to update our todos
  const [todos, setTodos] = useState<Todo[]>([
    
    new Todo("Test 1", false, uuidv4()),
    new Todo("Test 2", false, uuidv4()),
    new Todo("Test 3", true, uuidv4()),
  ])

  console.log(todos)
  //add new todos to the todoList with setTodos
  const [newTodo, setNewTodo] = useState<string>("");
  
  const addTodo = () => {
    if(newTodo.trim() !== "") {
      const newTodoText = new Todo(newTodo, false, uuidv4());
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
