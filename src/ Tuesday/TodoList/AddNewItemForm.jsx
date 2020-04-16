import React from 'react';
import './TodoListApp.css';

class AddNewItemForm extends React.Component {
    state = {
        error: false,
        title: ""
    };

        newTaskTitleRef = React.createRef();



    onAddItemClick = () => {
        let newText = this.state.title;
        this.setState({title: ""});
        if (newText === "") {
           this.setState({error: true})
        } else {
            this.setState({error: false})
            this.props.addItem(newText);
        }

    };
    onTitleChanged = (e) => {
        this.setState({
            error: false,
            title: e.currentTarget.value
        });
    };
    onKeyPress = (e) => {
        if(e.key === "Enter"){
            this. onAddItemClick();
        }
    };
    render = () => {
        let classForError = this.state.error ? "error" : "";
        return (
                <div className="todoList-newTaskForm">
                    <input type="text" placeholder="New item name"
                           ref={this.newTaskTitleRef}
                           className={classForError}
                           onChange={this.onTitleChanged}
                           onKeyPress={this.onKeyPress}
                           value={this.state.title}
                    />
                    <button onClick={this.onAddItemClick}>Add</button>
                </div>
        );
    }
}


export default AddNewItemForm;
