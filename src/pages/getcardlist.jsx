import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  Container,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default class getcardlist extends Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      input: ""
    };
  }

  // didmount
  componentDidMount() {
    this.getData();
  }

  // untuk ambil data di didmount, refresh data setelah add, update dan delete
  getData = () => {
    axios
      .get("https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost")
      .then(response => {
        console.log("response", response);
        const data = response.data;
        this.setState({ data });
      });
  };

  // handle change form input
  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  // untuk submit add
  handleSubmit = async e => {
    e.preventDefault();

    await axios.post("https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost", {
      name: this.state.input
    });
    this.setState({ input: "" });
    //diambil dari function get data
    await this.getData();

    // const response = await axios.get('https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost')
    // const data = await response.data;
    // return this.setState({data});
  };

  // untuk delete, nerima id nya dari onclick
  handleDelete = async id => {
    console.log("id", id);
    await axios.delete(
      `https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost/${id}`
    );
    await this.getData();
  };

  // untuk handleEdit, terima id dari onclick
  handleEdit = async (id, name) => {
    const newName = prompt(`edit nama ${name}`);
    await axios.put(
      `https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost/${id}`,
      {
        name: newName
      }
    );
    await this.getData();
  };

  render() {
    console.log("state", this.state);
    const { data, input } = this.state;

    return (
      <div>
        <h1>GET CARD LIST</h1>
        <div style={{ display: "flex" }}>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="input disini"
              value={input}
            />
            <button type="submit" style={{ background: "blue" }}>
              Submit
            </button>
          </form>
        </div>
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          {data.map((item, index) => (
            <Card key={index} style={{ width: "200px", alignItems: "center" }}>
              <CardImg
                top
                width="100%"
                src={item.avatar}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardSubtitle>{item.id}</CardSubtitle>
                <Button onClick={() => this.handleEdit(item.id, item.name)}>
                  Edit
                </Button>
                <Button
                  onClick={() => this.handleDelete(item.id)}
                  style={{ background: "red" }}
                >
                  Delete
                </Button>
              </CardBody>
            </Card>
          ))}
        </Container>
      </div>
    );
  }
}
