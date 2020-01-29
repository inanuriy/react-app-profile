import React, { Component } from "react";
import axios from "axios";



export default class ExampleLifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      data: [],
      title: ""
    };
  }
  // https://pokeapi.co/api/v2/pokemon/ditto/

  componentDidMount() {
    console.log("didmountttt");
    // fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
    // .then(response => response.json())
    // .then(data => this.setState({data}));

    axios.get("https://pokeapi.co/api/v2/pokemon/ditto/").then(response => {
        console.log("response", response);
        const data = response.data;
        this.setState({ data });
    });

    axios
      .get("https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost")
      .then(response => {
        console.log("response", response);
        const data = response.data;
        this.setState({ data });
      });
  }
  // https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post("https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost", {
        name: this.state.name
      })
      .then(response => {
        console.log(response);
        const title = response.title;
        this.setState({ title });
      });
  };

  handleDelete = index => {
    const { data } = this.state;
    data.splice(index, 1);
    this.setState({ data: data });
  }

  

  render() {
    console.log("renderrrr");
    console.log("state", this.state.data);
    console.log("name", this.state.name);
    const { height, id, name, sprites } = this.state.data;
    // const { id, name, avatar } = this.state.data;

    return (
      <div>
        <h1>Life Cycle</h1>
        {height}
        <br />
        {id} */}
        <img
          src={sprites !== undefined && sprites.front_default}
          alt={`${name}`}
        />
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <button>Submit</button>
        </form>

        {/* {/* <img src={avatar} alt="Avatar" /> */}
        {id}
        {name}

      </div>
    );
  }
}
