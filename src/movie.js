import React from 'react'

class Movie extends React.Component {
        constructor() {
            super();
            this.state = {
                movieNumberDB: [],
                movieHourDB: [],
                movieTitleAPI: [],
                movieOverviewAPI: [],
                movieRankApi: []
            };
        }

        componentWillMount() {
            this.loadDataFromDB();
            this.loadDataFromAPI();
        }

        async loadDataFromDB() {
            /** take all the movies from db */
            await fetch('https://cinemapwr.herokuapp.com/api/movies/')
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        movieNumberDB: json.map(obj => {
                            return obj.number;
                        }),
                        movieHourDB: json.map(obj => {
                            return obj.seance.hour;
                        })
                    })
                })
                .catch(err => console.log(err))
        }

        async loadDataFromAPI() {
            /** take movies from api*/
            await fetch("https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=9958dde58ec7762bbe6dc9a53b425780")
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        movieTitleAPI: json.results.map(obj => {
                            return obj.title;
                        }),
                        movieOverviewAPI: json.results.map(obj => {
                            return obj.overview;
                        }),
                        movieRankAPI: json.results.map(obj => {
                            return obj.vote_average;
                        }),
                    })
                })
                .catch(err => console.log(err))
        };
        
    render() {
        return (
            <div>
                <div>
                    {this.state.movieTitleAPI[this.props.index]}
                </div> 
                <div>
                    {
                        this.state.movieOverviewAPI[this.props.index]
                    }
                </div> 
                    <div>
                        hours
                    <div>
                        {
                            this.state.movieHourDB[this.props.index]
                        }
                    </div> 
                    <div>
                        {this.state.movieHourDB[this.props.index]}
                    </div> 
                </div> 
            </div>
        )
    }
}

export default Movie