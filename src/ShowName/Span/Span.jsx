import React from 'react';
import a from "../Span/Span.module.css";

class Span extends React.Component {
    render = () => {
        return (
            <div className={a.spanValue}>
                <span>
                    {this.props.valueSpan}
                </span>
            </div>
        );
    };
}

export default Span;
