import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import App from './App';
import TodoList from './components/TodoList';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='login' element={<Login />}/>
      <Route path='todolist' element= {<TodoList/>}/>
     
     
    
    </Routes>
    
   
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


