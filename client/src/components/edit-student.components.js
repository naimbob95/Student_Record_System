import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

import axios from 'axios';

export default class EditStudent extends Component {

  constructor(props) {
    super(props)

    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentAge = this.onChangeStudentAge.bind(this);
    this.onChangeStudentNumber = this.onChangeStudentNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      email: '',
      Age: '',
      StudentNumber: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/students/edit-student/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          age: res.data.age,
          StudentNumber: res.data.StudentNumber
        });
      })
      .catch((error) => {
        console.log(error);
      })
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
      age: this.state.age,
      StudentNumber: this.state.StudentNumber
    };

    axios.put('http://localhost:4000/students/update-student/' + this.props.match.params.id, studentObject)
      .then((res) => {
        console.log(res.data)
        console.log('Student successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    // this.props.history.push('/student-list')
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
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail}required />
        </Form.Group>

        <Form.Group controlId="Age">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" value={this.state.age} onChange={this.onChangeStudentAge} required/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Student Roll No</Form.Label>
          <Form.Control type="text" value={this.state.StudentNumber} onChange={this.onChangeStudentNumber} required />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Student
        </Button>
      </Form>
    </div>);
  }
}   