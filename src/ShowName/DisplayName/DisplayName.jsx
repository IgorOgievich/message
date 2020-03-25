import React from 'react';
import a from "../DisplayName/DisplayName.module.css";

class DisplayName extends React.Component {
    render = () => {
        return (
            <div className={a.displayName}>
                {this.props.name}
            </div>
        );
    };
}

export default DisplayName;
