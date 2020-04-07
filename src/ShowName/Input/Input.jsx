import React from 'react';

class Input extends React.Component {
    render = () => {
        return (
                <input type="text"
                       value={this.props.value}
                       onChange={this.props.onChange}
                       placeholder="Введите ваше имя"
                       onKeyPress={this.props.onKeyPress}
                />
        );
    };
}

export default Input;
