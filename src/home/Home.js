import React, { Component } from 'react';
import './Home.css';
import {getMovies} from "../util/APIUtils";
import TourList from "./TourList/index";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [
                {
                    director: '',
                    image: '',
                    nameMovie: '',
                    year: ''
                }
            ],
            loading: false
        }
    }

    componentDidMount() {
        getMovies()
            .then(response => {
                this.setState({
                    movies: response,
                    loading: false
                });
            }).catch(error => {
            this.setState({
                loading: false
            });
        });
    }

    render() {
        return (
            <div className="home-container">
                <div className="container">
                    <div className="graf-bg-container">
                        <div className="graf-layout">
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                        </div>


                    </div>
                    <h1 className="home-title">Spring Boot React OAuth2 Social Login Demo</h1>
                    <TourList/>
                </div>
                <p>
                    {this.state.movies[0].year}
                </p>
            </div>
        )
    }
}

export default Home;
