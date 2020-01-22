import React from 'react'
import FunctionComponent from './FunctionComponent';

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Ina",
            age: 23,
            city: "Jakarta"
        };
    }

    changeName = () => {
        this.setState({name: "Nuri"});
    };

    addAge = () => {
        this.setState({age: this.state.age + 1 });
    };

    render() {
        return (
            <div>
                <h1>Class Component</h1>
                <h2>Hello my name is {this.state.name}, i live in {" "}{this.state.city}, i am {this.state.age} years old</h2>

                <button onClick={this.changeName}>Change Name</button>

                <button onClick = {this.addAge}>+</button>

                <button onClick={() => {
                    this.setState({ age: this.state.age - 1});
                }}>-</button>

                <FunctionComponent 
                age={this.state.age} 
                addAge={this.addAge} 
                name="Yohari" />


            </div>
        );
    }
}

export default ClassComponent;