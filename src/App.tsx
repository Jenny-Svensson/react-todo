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

  //add new todos to the todoList with setTodos
  const [newTodo, setNewTodo] = useState<string>(""); // create a useState to save the new todos
  
  const addTodo = () => {
    if(newTodo.trim() !== "") { // if newTodo is not empty string, continue
      const newTodoText = new Todo(newTodo, false, uuidv4()); // create a new ToDo into variable newTodoText
      setTodos([...todos, newTodoText]); // then add the newTodoText with a copy of the current todos that already exist
      setNewTodo(""); // set the input-field to empty when added.
    } else {
      console.log('You need to add something.....')
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
