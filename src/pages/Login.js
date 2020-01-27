import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isLogin: false
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };

    const login = JSON.parse(localStorage.getItem("user"));

    if (login.email === user.email && login.password === user.password) {
    localStorage.setItem("status", true);
    this.props.history.push("/todolist");
    }
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <Container>
            <h1>LOGIN</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange} value={email} />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange} value={password} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(Login);