import React, {Component} from 'react';

class Box extends Component {
    render() {
        return (
            <div className="container">
                {localStorage.getItem("cart")}
            </div>
        );
    }
}

export default Box;
