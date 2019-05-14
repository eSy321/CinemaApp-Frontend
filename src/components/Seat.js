import React from 'react';


class Seat extends React.Component{
    constructor(props){
        super(props)
        this.seatRef=React.createRef();
        this.state = { color: null,
            stan:this.props.stan}
    
    }
    render(){
        return <div className='ui button seat' id={this.props.id} datastan={this.state.stan} style={{backgroundColor:this.props.colo,width:'50px',height:'50px',borderRadius:'5px'}} ref={this.seatRef} >{this.props.id+1}</div>
    }
    componentDidMount() {
        this.seatRef.current.addEventListener('click', this.userClick)
    }
    userClick=()=>{

        if (this.seatRef.current.style.backgroundColor === 'grey'){
            this.seatRef.current.style.backgroundColor = 'orange';

            this.setState((state) => {return {color:'organe', stan:2}})
            this.seatRef.current.datastan=2;

        }
        else if (this.seatRef.current.style.backgroundColor === 'orange'){

            this.seatRef.current.style.backgroundColor = 'grey';
            this.setState((state) => {return {color:'grey', stan:0}})
            
        }
    }
}


export default Seat;

