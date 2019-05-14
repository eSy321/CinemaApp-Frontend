import React from 'react';
import Scene from './Scene';
import SeatsContainer from './SeatsContainer';

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
        .then(json => this.setState({data: json[0].seance.seats[0]}))
        .catch (err => console.log(err));
        console.log(this.state.data)
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
            <SeatsContainer seats = {this.state.data}/>
        </div>;
    }
}

export default App;