import React from 'react';

import Todo from './Todo';

const TodoList = ({todos,setTodos,filteredTodos}) => {
    //console.log(todos);
    return (
        <div className="todo-Container">
        <ul className = "todo-list"></ul>
        {/* maping all the todos in the TodoList and rendering out Todo component 
        and passing down the state in it  */}
        
        {/* todo is used as a callback or an arguement. using this callback we can iterate over the  
        current index and the array itself. It is just a part of the syntax*/}
        {filteredTodos.map((todo) => (
            <Todo todo={todo} todos = {todos} setTodos = {setTodos} key = {todo.id}text = {todo.text}/>
        )) }
        </div>
    );
};

export default TodoList;

// for map syntax
// https://www.pluralsight.com/guides/how-to-use-the-map()-function-to-export-javascript-in-react