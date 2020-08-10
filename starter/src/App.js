import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

// Approach 1
class App extends Component {
  state = {
    name : "afzal",
    age : 12    
  }

  clickMeHandler = () => {
    console.log("clicked !!");
    this.setState({name : "hangary"});
  }


  render() {
    return (
      <div className="App">
        <h1>Hi, There!!!</h1> 
        <p>it works</p>
        <Person name={this.state.name}>I am appending.</Person>
        <Person name="Khan"></Person>
        <button onClick={this.clickMeHandler}>Click me</button>
        
      </div>
    );
    // return React.createElement("div",{className:"App"},React.createElement("h1",null,"I am the text!"));
  }
}

export default App;













//Approach 2
// const App = () => {
//   return (
//     <div class="App">
//       <h1>Hi, There!!!</h1> 
//       <p>it works</p>
//       <Person name="afzal">I am appending.</Person>
//       <Person name="Khan"></Person>
      
//     </div>
//   );
// }

// export default App;