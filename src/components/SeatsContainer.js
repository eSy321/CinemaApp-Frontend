import React from 'react';
import Seat from './Seat';

const style = {
    marginTop:'120px',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
}



class SeatsContainer extends React.Component {
    constructor(props){
        super(props)

        this.state = { data: this.props.seats.split("")}
    }

    render(){        
        
        const ret = this.props.seats.split("");

        const seats = ret.map((seat, i)=>{
            
            if (seat === '0') return <Seat key={i} id={i} stan={0} colo='grey'> </Seat>;
            else return <Seat key={i} id={i} stan={1} colo='red' />;
        })
        return (
            <div>
                <div className='seats-container' style={style}>
                    {seats}
                </div>
            </div>
        );
    }
}

export default SeatsContainer;