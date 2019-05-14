import React from 'react';
import Seat from './Seat';

const style = {
    marginTop:'120px',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
}



const SeatsContainer = (props) => {

    if(props !== []){        
        const ret = props.seats.split("");

        const seats = ret.map((seat, i)=>{
            
            if (seat === '0') return <Seat key={i} colo='grey'/>;
            else return <Seat key={i} colo='red' />;
        })
        return <div className='seats-container' style={style}>{seats}</div>;
    }
    else{
        return <div>Loading...</div>
    }
}

export default SeatsContainer;