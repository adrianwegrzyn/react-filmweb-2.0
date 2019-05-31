import React, {Component} from 'react';
import Alert from "react-s-alert";
import {Redirect} from "react-router-dom";

class VideoList extends Component {
    componentDidMount() {
        // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
        // Here we display the error and then remove the error query parameter from the location.
        if(this.props.location.state && this.props.location.state.error) {
            setTimeout(() => {
                Alert.error(this.props.location.state.error, {
                    timeout: 5000
                });
                this.props.history.replace({
                    pathname: this.props.location.pathname,
                    state: {}
                });
            }, 100);
        }
    }
    render() {
        if(this.props.authenticated) {
            return <Redirect
                to={{
                    pathname: "/product",
                    state: { from: this.props.location }
                }}/>;
        }
        return (
            <div>
                Hello
            </div>
        );
    }
}

export default VideoList;
