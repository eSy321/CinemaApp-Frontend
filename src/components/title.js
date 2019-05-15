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
            <div class='bigTitle'>
                {this.state.titleName}
            </div>
        );
    }
}

export default Title;