import React from 'react';



class Form extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.emailRef = React.createRef();
        this.nameRef = React.createRef();
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
        console.log(this.emailRef.current.value)
        const update = {
            "seats": body.seance.seats,
            "email": this.emailRef.current.value,
            "name": this.nameRef.current.value,
            "seance": body.seance
        }
         
        
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
            })
            .catch(err => console.log(err));
            alert("Bilety zarezerwowano"); 
           
        }
    

    render(){

        return(
            <form className="ui form center aligned grid" style={{marginTop:"8px"}} onSubmit={this.handleSubmit}>
                <div className = "field name">
                    <label>Imię i nazwisko</label>
                    <input type="text" id="name" ref={this.nameRef} name="name" placeholder="Imię i nazwisko"></input>
                </div>
                <div className = "field emailer">
                    <label>Email</label>
                    <input type="text" id="email" ref={this.emailRef} name="name" placeholder="email"></input>
                </div>
                <button className="ui button primary middle" value="Rezerwuj bilety">Rezerwuj bilety</button>
            </form>
        );
    }
}

export default Form;