import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateStudent from "./components/create-student.components";
import EditStudent from "./components/edit-student.components";
import StudentList from "./components/student-list.components";

function App() {
  return (
  <Router> 
    <div className="App">
     
      <Navbar  bg="dark" variant="dark" expand="lg">
          <Container>

            <Navbar.Brand>
              <Link to={"/student-list"} className="nav-link">
                Students Records
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-student"} className="nav-link">
                  Create Student
                </Link>
              </Nav>

              {/* <Nav>
                <Link to={"/edit-student/:id"} className="nav-link">
                  Edit Student
                </Link>
              </Nav> */}

              <Nav>
                <Link to={"/student-list"} className="nav-link">
                  Student List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
        
        <header className="App-header">
      <Container>
     
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={StudentList} />
                <Route path="/create-student" component={CreateStudent} />
                <Route path="/edit-student/:id" component={EditStudent} />
                <Route path="/student-list" component={StudentList} />
              </Switch>
            </div>
          </Col>
        </Row>
        
      </Container>
      </header>
    </div>
   
  </Router>
  );
}

export default App;