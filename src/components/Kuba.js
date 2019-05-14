import React from 'react';
import Scene from './Scene';
import SeatsContainer from './SeatsContainer';
import Form from './Form';

const style={
    backgroundColor: '#f4f4aa',
    height: '600px'
};

class Kuba extends React.Component{
    constructor(){
        super();
        this.state = { 
            data: null,
            filmNum: null,
            hourIndex: null
        };
    }
    componentWillMount(){
        this.setState({filmNum: window.localStorage.getItem('filmNum')});
        this.setState({hourIndex: window.localStorage.getItem('hourIndex')});

    }
    componentDidMount() {
        this.loadData();
    }

    async loadData(){
        await fetch(`https://cinemapwr.herokuapp.com/api/movies/${this.state.filmNum}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        //Tutaj trzeba w miejsce zer wpisać do którego godziny danego filmu się odwołujemy
        .then(json => this.setState({data: json}))
        .catch (err => console.log(err));
    }

    render(){
        if (!this.state.data){
            return (
            <div className="ui segment" style={{width:'100wh',height:'100vh'}}>
                <div className="ui active dimmer">
                    <div className="ui text loader">Loading</div>
                </div>
                <p></p>
            </div>
            );
        }
        return <div className='ui container' style={style}>
            <Scene />
            <SeatsContainer seats = {this.state.data.seance.seats[this.state.hourIndex]}/> {/*WYBRAC GODZINE*/}
            <Form data = {this.state.data} filmNum={this.state.filmNum} hourIndex={this.state.hourIndex}/>
        </div>;
    }
}

export default Kuba;