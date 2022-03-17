import React from 'react';

// text is the prop
const Todo = ({text,todo,todos,setTodos}) => {
    //events
    const deleteHandler = () => {
       // we are doing a check here using filter 
       // filter will get rid of it if it does not match the id 
       setTodos(todos.filter((el) => el.id !== todo.id ));
       console.log(todos);
    }
    const completeHandler = () => {
        setTodos(todos.map(item => {
             if(item.id === todo.id){
                 return {
            // the three dots will just add all the other property and modfiy the stated one after comma 
                     ...item, completed: !item.completed
                 }
             }
             return item;
        }));
    }
  return(
    <div className='todo'>
        {/* // important line understand the syntax */}
        <li className= {`todo-item ${todo.completed ? "completed" : ""}` }>{text}</li>
        <button onClick={completeHandler} className="complete-btn" ><i className="fas fa-check"></i></button>
        <button onClick = {deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>

    </div>
  );
};
export default Todo;