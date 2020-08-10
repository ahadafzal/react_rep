// Approach 1

import React from "react";

const person = (props) => {
return (
    <p>I'm a Person. My name is {props.name}. {props.children}</p>
    );
};


export default person;

// Approach 2

// import React , {Component} from "react";

// class Person extends Component{
//     render(){
//         return (
//             <p>I'm a Person.</p>
//         );
//     }
// }

// export default Person;