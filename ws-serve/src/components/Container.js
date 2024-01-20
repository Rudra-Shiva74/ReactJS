import React, { Component } from 'react'
import Details from './Details'
import Questions from './Questions'
import { v4 as uuidv4 } from 'uuid';
import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyAl8j0-epUo0cTQlMVx6WrPBBbMtR3ECfA",
    authDomain: "ws-serve.firebaseapp.com",
    databaseURL: "https://ws-serve-default-rtdb.firebaseio.com",
    projectId: "ws-serve",
    storageBucket: "ws-serve.appspot.com",
    messagingSenderId: "663934676299",
    appId: "1:663934676299:web:feab76c2de131092950cce"
};
initializeApp(firebaseConfig);
export class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: uuidv4(), name: null, email: null, isSubmit: false, questions: { q1: null, q2: null, q3: null, other: null }
        }
    }
    submitform = (e) => {
        e.preventDefault();
        this.setState({ name: e.target.name.value, email: e.target.email.value });
    }
    submit = async (e) => {
        e.preventDefault();
        const question = {};
        question.q1 = e.target.profesion.value;
        question.q2 = e.target.rate.value;
        question.q3 = e.target.review.value
        this.setState({ questions: question, isSubmit: true });
        const db = getDatabase();
        set(ref(db, 'ws-serve/' + this.state.id), {
            username: this.state.name,
            email: this.state.email,
            question: [question]
        });
        console.log(this.state.questions);
        // console.log(question);
        alert("done");
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="card">
                        <h1 className='text-center text-primary'>Abhishek Tiwari</h1>
                    </div>
                    {this.state.isSubmit ? <div>Thank you</div> : (this.state.name == null && this.state.email == null ? <Details submit={this.submitform} /> : <Questions submit={this.submit} />)}
                </div>
            </div>
        )
    }
}

export default Container
