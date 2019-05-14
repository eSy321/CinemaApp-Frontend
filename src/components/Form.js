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
        //liczba siedzen i jakie typy biletow
        const occupiedSeats = [];

        data.filter((elem, index) => {
            if(elem === "2"){
                occupiedSeats.push(index + 1);
            }
            return elem
        });

        console.log(occupiedSeats)

        const change = data.map(elem => elem > 1 ? elem = "1" : elem);

        let body = this.props.data;

        //USTAWIC GODZINE
        body.seance.seats[this.props.hourIndex] = change.join('')
        const update = {
            "seats": body.seance.seats,
            "email": this.emailRef.current.value,
            "name": this.nameRef.current.value,
            "numer": body.number
        }
        
        //PRZEKAZAC, KTORY FILM
        await fetch(`https://cinemapwr.herokuapp.com/api/movies/${this.props.filmNum}`, {
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
            window.location.reload();
        }
    

    render(){
        return(
            <form className="ui form center aligned grid" style={{marginTop:"8px"}} onSubmit={this.handleSubmit}>
                <div className = "field name">
                    <label>Imię i nazwisko</label>
                    <input type="text" id="name" ref={this.nameRef} name="name" placeholder="Imię i nazwisko" required></input>
                </div>
                <div className = "field emailer">
                    <label>Email</label>
                    <input type="email" id="email" ref={this.emailRef} name="name" placeholder="email" required></input>
                </div>
                <button className="ui button primary middle" value="Rezerwuj bilety">Rezerwuj bilety</button>
            </form>
        );
    }
}

export default Form;