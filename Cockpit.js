import React from 'react';

import './Cockpit.css';

const cockpit = (props) => {
    const classes = [];
    let btnClass = ''
    
    if (props.showPersons){
        btnClass = 'Red';
    }
    
    if (props.persons.length <= 2){
      classes.push('Red');
    }
    if (props.persons.length <= 1){
      classes.push('Bold');
    }

    const style = {
        backgroundColor:'green',
        color:'white',
        padding:'8px',
        font:'inherit',
        border:'1px solid blue'
    }

    return (
        <div>
            <h1>I am React app</h1>
            <p className={classes.join(' ')}>this is actually working</p>
            <button style={style} onClick={props.clicked}>Toggle Persons</button>
        </div>
        
    );
};

export default cockpit;