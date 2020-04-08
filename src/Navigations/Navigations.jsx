import React from 'react';
import '../App.css';
import a from '../Navigations/Navigations.module.css'
import {NavLink} from "react-router-dom";


class Navigations extends React.Component {
    render = () => {
        return (
            <div className={a.nav}>
                <div className={a.items}>
                    <NavLink to="/Monday" >
                    <button> Понедельник </button>
                    </NavLink>
                </div>
                <div className={a.items}>
                    <NavLink to="/Tuesday" >
                    <button> Вторник </button>
                    </NavLink>
                </div>
            </div>
        );
    };
}

export default Navigations;
