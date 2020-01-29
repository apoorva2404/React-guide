import React, { useState } from 'react';

import './App.css';
import Person from '../src/Person';

const App = () => {
  const [personState, setPersonState] = useState({
    person: 
      [
        {
          name: 'Apoorva',
          age: '20'
        },
        {
          name: 'Manvi',
          age: '21'
        }
      ]
    }
  );
  const [otherState, setOtherState] = useState('Hey');
  console.log('personState', personState);
  console.log('otherState', otherState);

  /* Traditional way of creating class components */
  // class App extends Component {
  // state = {
  //       person: [
  //         {
  //           name: 'Apoorva',
  //           age: '20'
  //         },
  //         {
  //           name: 'Manvi',
  //           age: '21'
  //         }
  //       ]
  //     }

  /* Contructor in a class */
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     person: [
  //       {
  //         name: 'Apoorva',
  //         age: '20'
  //       },
  //       {
  //         name: 'Manvi',
  //         age: '21'
  //       }
  //     ]
  //   },
  //   this.switchNameHandler = this.switchNameHandler.bind(this); 
  
  /* bind : bind method creates a new function, that when called has its this keyword set to the provided value.*/

  // }

  /* You need to bind this function before using */
  // switchNameHandler = function(){
  //   console.log('this', this);
  // }
    
  
  

  const switchNameHandler = () => {
    // console.log('this', this.state)
    // this.setState({
    //   person: [
    //     {
    //       name: 'Aryan',
    //       age: '22'
    //     },
    //     {
    //       name: 'Manvi',
    //       age: '21'
    //     }
    //   ]
    // });
    setPersonState({
      person:[
          {
            name: 'Aryan',
            age: '22'
          },
          {
            name: 'Manvi',
            age: '21'
          }
        ]
      })
  }

  
  // You dont use render method in functional components 
  // render() {
    return (
      <div className="App">
        Hi, I'm react app!
        <Person name={personState.person[0].name} age={personState.person[0].age} >My hobbies: React</Person>
        <Person name={personState.person[1].name} age={personState.person[1].age} />
        <button onClick={switchNameHandler}>Switch name</button>
      </div>
    );

    // The above code will get compiled to this code written below
    // return React.createElement('div', {className : 'App'}, React.createElement('hi', null, 'Hi, I\'m react app!'));
  // }
}

export default App;
