import React from 'react'

class Movie extends React.Component {
        constructor() {
            super();
            this.state = {
                movieNumberDB: [],
                movieHourDB_0: [],
                movieHourDB_1: [],
                movieTitleAPI: [],
                movieOverviewAPI: [],
                movieRankApi: [],
                movieImgAPI: []
            };
        }

        componentWillMount() {
            this.loadDataFromDB();
            this.loadDataFromAPI();
        }

        async loadDataFromDB() {
            /** take all the movies from db */
            await fetch('https://workingcinema.herokuapp.com/api/movies/')
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        movieNumberDB: json.map(obj => {
                            return obj.number;
                        }),
                        movieHourDB_0: json.map(obj => {
                            return obj.seance.hour[0];
                        }),
                        movieHourDB_1: json.map(obj => {
                            return obj.seance.hour[1];
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
                        movieImgAPI: json.results.map(obj => {
                            return `http://image.tmdb.org/t/p/w185${obj.poster_path}`;
                        })
                    })
                })
                .catch(err => console.log(err))
        };

        render() {
            return ( 
                <div class = 'container'key = {this.props.index}>
                    <div class = 'title' id = {this.state.movieNumberDB[this.props.index]}>{this.state.movieTitleAPI[this.props.index]}</div> 
                        <div class = 'container__wrapper'>
                            <img class = 'image' src = {this.state.movieImgAPI[this.props.index]} alt = 'Plakat filmowy' />
                            <div class = 'overview' > {this.state.movieOverviewAPI[this.props.index]}</div>  
                        <div class = 'hours'>
                            <div onClick = {this.openCinemaHall} class = 'hour' id = "0" > {this.state.movieHourDB_0[this.props.index]}</div>  
                            <div class = 'hour' id = "1" > {this.state.movieHourDB_1[this.props.index]}</div> 
                        </div> 
                    </div>  
                </div>
            )
        }

        openCinemaHall = () => {
            const idNumber = this.parentElement;
            console.log('Test: ', idNumber);
        }
}

export default Movie