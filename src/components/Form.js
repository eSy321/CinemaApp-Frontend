import React from 'react';

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = [...document.querySelectorAll('.seat')].map(elem => elem.attributes.datastan.value);
        
        if (!data.includes("2")){
            return alert('Proszę wybrać miejsca');
        }
        const change = data.map(elem => elem > 1 ? elem = "1" : elem);

        let body = this.props.data;

        //USTAWIC GODZINE
        body.seance.seats[0] = change.join('')

        const update = {
            "hour": body.seance.hour,
            "seats": body.seance.seats
        }
        console.log(JSON.stringify(update))
        
        //PRZEKAZAC, KTORY FILM
        await fetch(`https://cinemapwr.herokuapp.com/api/movies/299534`, {
                method: "PUT",
                body: JSON.stringify(update),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(res => {
                console.log(`Success: ${JSON.stringify(res)}`);
                alert("Bilety zarezerwowano");
                document.location.reload();
            })
            .catch(err => console.log(err));
        
        }
    

    render(){

        return(
            <form className="ui form center aligned grid" style={{marginTop:"8px"}} onSubmit={this.handleSubmit}>
                <button className="ui button primary middle" value="Rezerwuj bilety">Rezerwuj bilety</button>
            </form>
        );
    }
}

export default Form;