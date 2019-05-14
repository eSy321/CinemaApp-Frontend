import React from 'react';
const nodemailer = require('nodemailer');



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
                var email = document.querySelector(".emailer");
                var name = document.querySelector(".name");
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'kinocoderscamp@gmail.com',
                        pass: 'uczymysiereacta'
                    }
                });
                const mailOptions = {
                    from: 'kinocoderscamp@gmail.com',
                    to: `${email.value}`,
                    subject: 'POTWIERDZENIE REZERWACJI',
                    html: `<center><h1>Witaj ${name.value}, oto potwierdzenie rezerwacji.</h1><h3>Rezerwacja dotyczy seansu: ${body.seance}, miejsce: (tu miejsce)</h3><p>Email został wygenerowany automatycznie</p><img src="http://www.salemtwincinema.com/images/footer-icons.gif"</img></center>`
                };

                transporter.sendMail(mailOptions, function (err, info) {
                    if (err)
                        console.log(err)
                    else
                        console.log(info);
                });
                document.location.reload();
            })
            .catch(err => console.log(err));

           
        }
    

    render(){

        return(
            <form className="ui form center aligned grid" style={{marginTop:"8px"}} onSubmit={this.handleSubmit}>
                <div className = "field name">
                    <label>Imię i nazwisko</label>
                    <input type="text" name="name" placeholder="Imię i nazwisko"></input>
                </div>
                <div className = "field emailer">
                    <label>Email</label>
                    <input type="text" name="name" placeholder="email"></input>
                </div>
                <button className="ui button primary middle" value="Rezerwuj bilety">Rezerwuj bilety</button>
            </form>
        );
    }
}

export default Form;