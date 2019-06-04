import React, {Component} from 'react';
import './TourList.css'
import Tour from '../Tour/Tour'


class TourList extends Component {


    removeTour = id => {
        const {tours} = this.state;
        const sortedTours = tours.filter(tour=> tour.id !==id);
        this.setState({
            tours: sortedTours
        })
    };

    render() {

        return (
            <section className="tourList">
                {this.props.movies.map(movie => {
                    return(
                        <div className="row">

                                <div className="col-8">
                                    <Tour key={movie.id} tour={movie}/>
                                </div>



                        </div>
                    )
                })}
            </section>
        );
    }
}

export default TourList;
