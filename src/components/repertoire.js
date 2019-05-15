import React from 'react';
import Movie from './movie';
import Title from './title'

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
                <div>
                    <Title />
                </div>
                <div>
                    {movie}
                </div>
            </div>
        );
    } 
};

export default Repertoire;