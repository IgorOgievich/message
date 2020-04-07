import React from 'react';
import "../Input/Input.css"

class Input extends React.Component {
    render = () => {
        return (
            <div className={this.props.classInput}>
                <input type="text"
                       value={this.props.value}
                       onChange={this.props.onChange}
                       placeholder="Введите ваше имя"
                       onKeyPress={this.props.onKeyPress}
                />
            </div>
        );
    };
}

export default Input;
