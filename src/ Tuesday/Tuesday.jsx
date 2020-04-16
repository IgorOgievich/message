import React from 'react';
import '../App.css';
import a from './Tuesday.module.css'
import TodoListApp from "./TodoList/TodoListApp";

class Tuesday extends React.Component {
    render = () => {
        return (
            <div className={a.tuesday}>
              <TodoListApp/>
            </div>
        );
    };
}

export default Tuesday;
