import React, {Component} from 'react';
import {getMovie} from "../../util/APIUtils";
import './box.css'

class BoxItem extends Component {

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
        getMovie(this.props.id)
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

    render() {
        return (
            <div className="row borderBottom ">
                <div className="col-2 mx-2 imgCart">
                    <img src={this.state.movie.image} alt=""/>
                </div>
                <div className="col-3 mx-auto my-auto">
                    {this.state.movie.nameMovie}
                </div>
                <div className="col-2 mx-auto my-auto">
                    {this.state.movie.yearOfProduction}
                </div>
                <div className="col-2 mx-auto my-auto">
                    {this.state.movie.price}
                </div>
                <div className="col-2 mx-auto my-auto">
                    7 dni
                </div>
            </div>
        );
    }
}

export default BoxItem;
