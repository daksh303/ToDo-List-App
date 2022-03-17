import React, {useState,useEffect} from 'react';

import './App.css';

//import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  
  // state stuff
  const [inputText,setInputText] = useState(" ");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos,setFilteredTodos] = useState([]);

// RUN ONCE WHEN THE APP STARTS
useEffect(() => {
 getLocalTodos();
}, []);

  // use effect
  // to render useeffect once we will use empty array
  // see copy for more clarity
  useEffect(() => {
   // console.log('hey');
   filterHandler();
   saveLocalTodos();
    
  },[todos,status]);


  // functions
 
  // now to run this filterhandler funciton we will use useeffect
  const filterHandler = ( ) => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
    
    case 'uncompleted':
      setFilteredTodos(todos.filter(todo => todo.completed === false))
      break;

      default:
        setFilteredTodos(todos)
        break;
    }
  }
  
  // Save to Local
  const saveLocalTodos = () => {
    
      localStorage.setItem('todos',JSON.stringify(todos));
    
  }
  const getLocalTodos = () => {
    if(localStorage.getItem('todos')===null){
      localStorage.setItem("todos",JSON.stringify([]));
    }
    // we need to print the items that were previously stored 
    // and we need to parse it 
    else{
     let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
     //console.log(localItem);
    }
  };
  return (
    <div className="App">
      <header>Daksh Todo's List </header>
      <Form inputText = {inputText} 
      todos={todos} setTodos={setTodos}
       setInputText = {setInputText}
       status={status}
       setStatus={setStatus}
       setFilteredTodos = {setFilteredTodos}
       />

      <TodoList todos = {todos} setTodos={setTodos} filteredTodos = {filteredTodos}/>
    </div>
  );
}

export default App;
