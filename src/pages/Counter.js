import React from 'react'


class ClassComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nol: 0
        };
    }

    tambah = () => {
        this.setState({nol: this.state.nol + 1 });
    };

    kurang = () => {
        if (this.state.nol <= 0) {
            alert("Minus number is not allowed")
        } else (this.setState({nol: this.state.nol - 1 }));
    };

    reset = () => {
        this.setState({nol: this.state.nol === 0
        });
    };

    

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <p>{this.state.nol}</p>
                <button onClick = {this.tambah}>+</button>
                <button onClick = {this.kurang}>-</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    };
}

export default ClassComponent;