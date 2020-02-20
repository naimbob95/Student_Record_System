import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateStudent extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentAge = this.onChangeStudentAge.bind(this);
    this.onChangeStudentNumber = this.onChangeStudentNumber.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      email: '',
      age: '',
      StudentNumber: ''
    }
  }

  onChangeStudentName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeStudentAge(e) {
    this.setState({ age: e.target.value })
  }
  onChangeStudentNumber(e) {
    this.setState({ StudentNumber: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      age : this.state.age,
      StudentNumber: this.state.StudentNumber
    };
    axios.post('http://localhost:4000/students/create-student', studentObject)
      .then(res => console.log(res.data));

    // this.setState({ name: '', email: '', age:'',StudentNumber: '' })

    window.location = '/';
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} required/>
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail} required/>
        </Form.Group>

        <Form.Group controlId="Age">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" value={this.state.age} onChange={this.onChangeStudentAge} required />
        </Form.Group>

        <Form.Group controlId="RollNo">
          <Form.Label>Student Roll No</Form.Label>
          <Form.Control type="text" value={this.state.StudentNumber} onChange={this.onChangeStudentNumber} required />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Student
        </Button>
      </Form>
    </div>);
  }
}