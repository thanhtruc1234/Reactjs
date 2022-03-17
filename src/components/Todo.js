import React, { useState } from "react";
import TodoDetail from "./TodoDetail";
import TodoForm from "./TodoForm";
function Todo(){
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
       // console.log(todo, ...todos); 
    };

    const updateTodo = (todoId, newValue) => {
       if (!newValue.text || /^\s*$/.test(newValue.text)){
           return;
       }
       setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
       );
    };

    const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArr);
    };


const completeTodo = id => {
    let updatesTodos = todos.map(todo => {
        if (todo.id === id){
            todo.isComplete = !todo.isComplete
        }
        return todo;
    });
    setTodos(updatesTodos);
}
    return (
        <div>
            <h1>Kế hoạch ngày hôm nay của bạn?</h1>
        <TodoForm onSubmit={addTodo} />
        <TodoDetail 
            todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updatesTodos={updateTodo}/>

        </div>
       
    )
}
export default Todo;