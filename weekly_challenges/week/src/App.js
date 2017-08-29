import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './Name'
import Contact from './Contact'
class App extends Component {
 
  render() {
    const person = [
      {
        first: "Ivan",
        last: "Rosario",
        phone: "7042342343",
      },
      {
        first: "Ian",
        last: "Powell",
        phone: "7045445222",
      },
      {
        first: "Kevin",
        last: "Ha",
        phone: "7043455343",

      },

    ];

  
    const allPeople = person.map(function (people, i) {
      return (
        <Contact key={i}
          first={people.first}
          last={people.last}
          phone={people.phone} />

      );

    });
    return (
      <div className="App">
        <Name name="Juan " />
        <Contact first="Juan" last="Hernandez" phone="7042444041" />
        {allPeople}
      </div>

    );
  }
}


export default App;
