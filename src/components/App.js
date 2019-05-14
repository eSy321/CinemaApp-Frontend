import React from 'react';
import Scene from './Scene';
import SeatsContainer from './SeatsContainer';
import Form from './Form';

const style={
    backgroundColor: '#f4f4aa',
    height: '500px'
};

class App extends React.Component{
    constructor(){
        super();
        this.state = { data: null};
    }
    componentDidMount(){
        this.loadData();
    }
    async loadData(){
        await fetch(`https://cinemapwr.herokuapp.com/api/movies/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        //Tutaj trzeba w miejsce zer wpisać do którego godziny danego filmu się odwołujemy
        .then(json => this.setState({data: json[0]}))
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
            <SeatsContainer seats = {this.state.data.seance.seats[0]}/> {/*WYBRAC GODZINE*/}
            <Form data = {this.state.data}/>
        </div>;
    }
}

export default App;