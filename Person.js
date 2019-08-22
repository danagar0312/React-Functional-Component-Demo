import React, { Component } from 'react';
import './Person.css';

const Persons = (props) => {
    return (
        <div className="Person">
        <h1>My name is {props.name}</h1>
        <p onClick={props.click}> I am {props.age} years old. </p>
        <input text="" onChange={props.changename} value={props.name}></input>
        </div>
    )
}

export default Persons;