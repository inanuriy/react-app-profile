import React from 'react'

const FunctionComponent = props => {
    console.log(props);
    console.log(props.name);
    console.log(props.age);
    console.log(props.addAge);

    return (
        <div>
            <h1>Function Component</h1>
            <p>I am {props.age} years old. My name is {props.name}</p>
            <button onClick={props.addAge}>Add Age</button>

        </div>
    );
};

export default FunctionComponent