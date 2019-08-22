import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons:[
      {id:"101",name:"Babli",age:29},
      {id:"102",name:"manu",age:29},
      {id:"103",name:"stephanie",age:29},
      {id:"104",name:"suryavansham",age:29}
    ],
    showPersons:false
   
  }

  clickNameHandler = (myName) => {
    this.setState({
      persons:[
        {name:myName,age:29},
        {name:'manu',age:29},
        {name:'stephanie',age:29},
        {name:'stephanie',age:29}
      ]
    })  
  }

  buttonToggleHandler = () =>{
      // let x = document.querySelector(".toggler");
      // if (x.style.display === "none"){
      //   x.style.display = "block";
      // }
      // else{
      //   x.style.display = "none";
      // }

      const doesShow = this.state.showPersons;
      this.setState({showPersons : !doesShow});

  }

  changeNameHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
    })

    const person = {...this.state.persons[personIndex]}

    person["name"] = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] =  person;
    this.setState({ persons:persons })  
  }

  deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons : persons})
  }

  render() {
    const style = {
      backgroundColor:'green',
      color:'white',
      padding:'8px',
      font:'inherit',
      border:'1px solid blue'
    }

    let persons = null

    if ( this.state.showPersons ){
      persons = (
        <div>
          <Persons 
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.changeNameHandler} />
        </div>
        
                  
        );
        // <div>
        //         <Person changename={this.clickNameHandler.bind(this,"Hello")} name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        //         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        //         <Person click={this.changeNameHandler.bind(this,"Sourabh")} name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
        //         <Person name={this.state.persons[3].name} age={this.state.persons[3].age}></Person>
        // </div>
  
      style.backgroundColor = 'red';
    }

    

    return (
      <div className="App">
        {/* <h1>I am React app</h1>
        <p className={classes.join(' ')}>this is actually working</p>
        <button style={style} onClick={this.buttonToggleHandler}>Toggle Persons</button> */}
        {/* <div className="toggler">
            <Person changename={this.clickNameHandler.bind(this,"Hello")} name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
            <Person click={this.changeNameHandler.bind(this,"Sourabh")} name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
            <Person name={this.state.persons[3].name} age={this.state.persons[3].age}></Person>
        </div> */}
        
        {/* { this.state.showPersons ? 
            <div>
                <Person changename={this.clickNameHandler.bind(this,"Hello")} name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
                <Person click={this.changeNameHandler.bind(this,"Sourabh")} name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
                <Person name={this.state.persons[3].name} age={this.state.persons[3].age}></Person>
            </div>: 
            null
        } */}
        <Cockpit 
        showPersons = {this.state.showPersons} 
        persons = {this.state.persons} 
        clicked = {this.buttonToggleHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
