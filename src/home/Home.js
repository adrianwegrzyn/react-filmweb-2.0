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

                <div className="container">
                    <TourList movies={this.state.movies}/>
                </div>
        )
    }
}

export default Home;
