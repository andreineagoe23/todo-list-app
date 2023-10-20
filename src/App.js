import React from 'react';
import './App.css';
import ToDoList from './ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <ToDoList /> {/* Render your TodoList component */}
      </header>
    </div>
  );
}

export default App;
