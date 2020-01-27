import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { withRouter } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }

  handleChange = event => {
    console.log(event.target.name);

    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, email, password } = this.state;
    const user = {
      name: name,
      email: this.state.email,
      password: this.state.password
    };

    if (name !== "" && email !== "" && password !== "") {
      localStorage.setItem("user", JSON.stringify(user));
      this.props.history.push("/login");
    } else {
      alert("Please complete the registration form");
    }
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <Container>
          <h1>SIGN UP</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                placeholder="Full Name"
                type="text"
                name="name"
                onChange={this.handleChange}
                value={name}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={this.handleChange}
                value={email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
                value={password}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(SignUp);
