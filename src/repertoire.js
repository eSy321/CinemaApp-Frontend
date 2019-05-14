import React from 'react';
import Movie from './movie';

class Repertoire extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                movieNumberDB: [],
                movieHourDB: [],
                movieTitleAPI: [],
                movieOverviewAPI: [],
                movieRankApi: []
            };
    }

    render() {
        var arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        const movie = arr.map(function(m, i){
            return <Movie index={i}></Movie>
        })
        return ( 
            <div>
                {movie}
            </div>
        );
    } 
};

export default Repertoire;