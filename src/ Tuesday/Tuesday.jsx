import React from 'react';
import '../App.css';
import a from './Tuesday.module.css'

class Tuesday extends React.Component {
    render = () => {
        return (
            <div className={a.tuesday}>
              <h1>Hello</h1>
            </div>
        );
    };
}

export default Tuesday;
