import React from 'react';

// function Person(){
// }

// const Person = function(){
// }

//ES6 equivalent of above
const Person = ({name, age, children}) => {
return (
    <div>
        <p>I am a {name} and i am {age} years old.</p>
        <p>{children}</p>
    </div>
)
}


export default Person;