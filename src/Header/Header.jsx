import React from 'react';
import '../App.css';
import a from '../Header/Header.module.css'

class Header extends React.Component {
    render = () => {
        return (
            <div className={a.header}>
                <h1>Проект Игоря Огиевича</h1>
            </div>
        );
    };
}

export default Header;
