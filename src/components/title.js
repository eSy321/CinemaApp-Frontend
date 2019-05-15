import React from 'react'

class Title extends React.Component{
    constructor(){
        super();
        this.state ={ 
            titleName: "CodersCampCinema"
        }
    }

    render(){
        return(
            <div>
                <h1>{this.state.titleName}</h1>
            </div>
        );
    }
}

export default Title;