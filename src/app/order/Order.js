import React, {Component} from 'react';
import {getMovieOrder} from "../../util/APIUtils";
import './order.css'

class VideoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movieOrder: [
                {
                    movieId: '',
                    nameMovie: '',
                    year: '',
                    image: '',
                    director: ''
                }
            ],
        }
    }

    componentDidMount() {
        getMovieOrder()
            .then(response => {
                this.setState({
                    movieOrder: response,
                    loading: false
                });
            }).catch(error => {
            this.setState({
                loading: false
            });
        });
    }


    render() {
        const {movieOrder} = this.state;
        let row = [];

        for (let i = 0; i < movieOrder.length; i++) {
            row.push(
                <div className="row backgroundOrder">
                    <div className="col">
                        <img src={movieOrder[i].image} alt=""/>
                    </div>
                    <div className="col">
                        {movieOrder[i].nameMovie}
                    </div>
                    <div className="col">
                        {movieOrder[i].director}
                    </div>
                </div>
            )
        }

        return (
            <div className="container">
                <h1>Zamówione filmy</h1>
                {row}
            </div>
        );
    }
}

export default VideoList;
