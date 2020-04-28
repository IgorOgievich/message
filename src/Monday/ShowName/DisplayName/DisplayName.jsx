import React from 'react';
import a from "../DisplayName/DisplayName.module.css";

class DisplayName extends React.Component {

    // onDeleteTaskClick =()=>{
    //     let taskId = this.props.id
    //     this.props.deleteTask(taskId)
    // };

    render = () => {
        return (
            <div className={a.displayName}>
                {this.props.name }
                {/*<button onClick={this.onDeleteTaskClick}>X</button>*/}
            </div>
        );
    };
}

export default DisplayName;
