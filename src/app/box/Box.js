import React, {Component} from 'react';
import BoxItem from "./BoxItem";
import Link from "react-router-dom/es/Link";
import {addOrder} from "../../util/APIUtils";
import Alert from "react-s-alert";

class Box extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movieTimes: [
                {
                    movieId: 1,
                    numberDay: 1,
                }
            ],
        }
    }

    removeBox = () => {
        localStorage.setItem("cart", "");
    };

    buyMovies = () => {
        let order = [];
        for (let i = 0; i < localStorage.getItem("cart").split(";").length; i++) {
            order.push({
                movieId: parseInt(localStorage.getItem("cart").split(";")[i]),
                numberDay: 7})
            }

        let header = {
            movieTimes: order
        };

        // const orderList = Object.assign({}, header);
        // JSON.stringify(header);
        const orderList = Object.assign({}, header);
        console.log(JSON.stringify(orderList));

        addOrder(orderList)
        //     .then(response => {
        //         console.log(response)
        //         Alert.success("You're successfully registered. Please login to continue!");
        //         this.props.history.push("/login");
        //     }).catch(error => {
        //     Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        // });
        localStorage.removeItem("cart");
    };

    render() {
        if (localStorage.getItem("cart") === "" || localStorage.getItem("cart") === null) {
            return (
                <div className="container">Twój koszyk jest pusty !!!</div>
            )
        } else {
            return (
                <div className="container">
                    <div className="row ">
                        <div className="col-2 mx-2">
                        </div>
                        <div className="col-3 mx-2">
                            <h3>Tytuł</h3>
                        </div>
                        <div className="col-2 mx-2">
                            <h3>Rok produkcji</h3>
                        </div>
                        <div className="col-2 mx-2">
                            <h3>Cena [ zł ]</h3>
                        </div>
                        <div className="col-2 mx-2">
                            <h3>Liczba dni</h3>
                        </div>
                    </div>
                    {localStorage.getItem("cart").split(";").map(id => {
                        return (
                            <BoxItem key={id} id={id}/>
                        )
                    })}
                    <div className="row my-5">
                        <Link to={"/"}>
                            <button className="btn btn-warning mx-3" onClick={() => this.removeBox()}>Wyczyść koszyk
                            </button>
                        </Link>
                        <Link to={"/"}>
                            <button className="btn btn-success" onClick={() => this.buyMovies()}>Kup</button>
                        </Link>
                    </div>
                </div>
            );
        }


    }
}

export default Box;
