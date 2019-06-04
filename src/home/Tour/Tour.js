import React, {Component} from 'react';
import './Tour.css'
import {Link} from "react-router-dom";

class Tour extends Component {
    state = {
        showInfo: false
    };



    render() {
        const {movieId, nameMovie, year, image, director} = this.props.tour;
        const { removeTour } = this.props;
        return (
            <article className="tour">
                <div className="img-container">
                    <Link to={`/movie/${movieId}`}>
                        <img
                            src={image}
                            alt=""
                        />
                    </Link>


                    <span className="close-btn" onClick={() => removeTour(movieId)}>
                        <i className="fas fa-window-close"/>
                    </span>
                </div>
                <div className="tour-info mx-auto">
                    <h3 className="mx-auto">{nameMovie}</h3>
                    <h4 className="mx-auto">{year}</h4>
                    <p className="mx-auto">{director}</p>
                </div>
            </article>
        );
    }
}

export default Tour;
