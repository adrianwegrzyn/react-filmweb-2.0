import React, {Component} from 'react';

class Box extends Component {
    render() {
        return (
            <div className="container">
                Hello box
                {localStorage.getItem("cart")}
            </div>
        );
    }
}

export default Box;
