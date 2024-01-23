import React, { Component, useState } from "react";
import LogoEmail from "../img/email.webp";
import LogoPassWord from "../img/password.webp";


class FormButton extends Component{

    constructor(){
        super()
        this.state = {spanish: 'Registrarte', correct: "Not Ready"}
    }

    componentDidMount(){
        this.setState({spanish: "Sing Up"})
        console.log("Update")
    }

    render(){
        return(
         <>
            <section className='contentForm'>
                <section className="form"> 
                    <label>
                        <img src={ LogoEmail } />
                    </label>

                    <input id="inputEmail" type="email" placeholder="Email"/>
                </section>

                <section className="form"> 
                    <label>
                        <img src={ LogoPassWord } />
                    </label>

                    <input id="inputPassword" type="password" placeholder="Password"/>
                </section>
            </section>

            <section className='contentButton'>
                <button onClick={() => this.setState({correct: 'Ready!!'})}   id="buttonSingUp" className="buttonSingUp">
                    {this.state.spanish}
                </button>

                <p>
                    {this.state.correct}
                </p>
            </section>
         </>
        )
    }
}

export default FormButton;
