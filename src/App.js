import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./App.css";

import Title from "./components/title";
import Button from "./components/button";
import Dashboard from "./components/dashboard";

const stages = [
  { title: "To-do" },
  { title: "Doing" },
  { title: "In Review" },
  { title: "Done" }
];

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Title>To-do list</Title>
          </Col>
          <Col style={{ textAlign: "right" }}>
            <Button type="primary">Crear tarea</Button>
          </Col>
        </Row>

        <Dashboard stages={stages} />
      </Container>
    );
  }
}

export default App;
