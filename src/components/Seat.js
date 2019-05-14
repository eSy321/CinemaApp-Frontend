import React from 'react';


class Seat extends React.Component{
    constructor(props){
        super(props)
        this.seatRef=React.createRef();
    }
    render(){
        return <div className='seat' style={{backgroundColor:this.props.colo,width:'50px',height:'50px',borderRadius:'5px'}} ref={this.seatRef} ></div>
    }
    componentDidMount() {
        this.seatRef.current.addEventListener('click', this.changeColor)
    }
    changeColor=()=>{
        console.log(this.seatRef.current.style.backgroundColor)
        if (this.seatRef.current.style.backgroundColor === 'grey'){
            this.seatRef.current.style.backgroundColor = 'orange';
        }
        else if (this.seatRef.current.style.backgroundColor === 'orange'){
            this.seatRef.current.style.backgroundColor = 'grey';
        }
    }
}


export default Seat;

