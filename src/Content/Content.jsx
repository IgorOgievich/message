import React from 'react';
import '../App.css';
import a from '../Content/Content.module.css'
import Message from "../Content/Message/Message";
import Qualities from "../Content/Qualities/Qualities";
import ShowName from "../ShowName/ShowName";

class Content extends React.Component {
    render = () => {
        return (
            <div className={a.content}>
                <Message/>
                <Qualities/>
                <ShowName/>
            </div>
        );
    };
}

export default Content;
