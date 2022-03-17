import React from 'react';

const Form = ({inputText, setInputText,todos, setTodos,setStatus}) => {
    // here I can write js code and function
    const inputTextHandler = (e) =>  {
         console.log(e.target.value);
         setInputText(e.target.value);
    };
    const submitTodohandler = (e) => {
        // to prevent react from refreshing evertime we submit the form 
        e.preventDefault();
        setTodos([
            // the three dots shows that if I have any todos already just pass it 
            ...todos, {text: inputText, completed: false,id: Math.random() * 1000}
        ]);
        // to set the state back to zero or Nill i.e delete the text from the form section
        setInputText("");
        
    };
  
    const statusHandler = (e) => {
        //console.log(e.target.value);
        setStatus(e.target.value);
    }

    return (
        <form>
        <input value = {inputText} onChange= {inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodohandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange = {statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
};

export default Form;