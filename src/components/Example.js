import React from 'react';

class Example extends React.Component {

    render() {
        return (
            <div className="container">
                <h4>{this.props.country}</h4>
                <button onClick={this.props.changeNameHandler}>Change text</button>
            </div>
        );
    }
}

export default Example;