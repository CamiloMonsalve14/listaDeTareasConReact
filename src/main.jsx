import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Tasks from './components/Tasks';
import './App.css'

// import TaskItem from './components/TaskItem';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    {/* <TaskItem /> */}
    <Tasks />
  </React.StrictMode>,
  document.getElementById('root'))