import React, {Component} from 'react';
import {getMovie} from "../util/APIUtils";
import './movie.css'
import {Link} from "react-router-dom";

class Movie extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movie: [
                {
                    acceptableAge: '',
                    director: '',
                    yearOfProduction: '',
                    description: '',
                    image: '',
                    species: '',
                    price: '',
                    nameMovie: ''
                }
            ],
            loading: false
        }
    }

    componentDidMount() {
        getMovie(this.props.match.params.movieId)
            .then(response => {
                this.setState({
                    movie: response,
                    loading: false
                });
            }).catch(error => {
            this.setState({
                loading: false
            });
        });
    }

    saveMovie = (id) => {
        let data = localStorage.getItem('cart');
        let isIn = false;
        if(data === null || data ===''){
            localStorage.setItem('cart', id);
        }else {
            let array = localStorage.getItem("cart").split(";");
            array.forEach(number => {
                if(number === id){
                    isIn =  true;
                }
            });
            if(!isIn){
                localStorage.setItem('cart', data + ';' + id);
            }
            isIn = false;
        }
        // localStorage.removeItem('cart')
    };

    render() {
        const {movie} = this.state;
        return (

                <div className="container">
                    <div className="row">
                        <div className="col-6 imgMovie ">
                            <img className="mx-auto" src={movie.image} alt=""/>
                        </div>

                        <div className="col-4">
                            <h2>{movie.nameMovie} </h2>
                            <div className="row boxMovieData">
                                <div className="col">
                                    <h3 className="movieData">Reżyser</h3>
                                    <p>
                                        {movie.director}
                                    </p>
                                    <h3 className="movieData">Rok produkcji</h3>
                                    <p>
                                        {movie.yearOfProduction}
                                    </p>
                                    <h3 className="movieData">Gatunek</h3>
                                    <p>
                                        {movie.species}
                                    </p>
                                </div>
                                <div className="col">
                                    <h3 className="movieData">Wiek</h3>
                                    <p>
                                        {movie.acceptableAge}+
                                    </p>
                                    <h3 className="movieData">Cena</h3>
                                    <p>
                                        {movie.price} zł
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h3>Opis</h3>
                                    {movie.description}
                                </div>
                            </div>
                            <Link to={"/"}>
                                <button className="btn my-5  btn-success" onClick={() => this.saveMovie(this.props.match.params.movieId)}>Dodaj do koszyka</button>
                            </Link>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Movie;
