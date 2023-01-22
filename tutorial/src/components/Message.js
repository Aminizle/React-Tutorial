import React, { Component } from "react";

class Message extends Component {
    render() {
        return (
            <div>

            
            <h1>
                Welcome Visitor
            </h1>
            {this.props.subscribeMessage}
            </div>
        )
    }
}

export default Message