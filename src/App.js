import React, { Component } from 'react';
import './App.scss';
import Menu from './components/Menu/Menu';
import BasicInformation from './components/BasicInformation/BasicInformation';
import { Row, Col } from 'react-grid-system';
import { Bar } from 'react-chartjs-2';
class App extends Component {
  render() {
    const data = {
      labels: ['Android', 'Ios', 'Web Development', 'Java', 'HTML', 'CSS', 'Angular'],
      datasets: [
        {
          label: 'Years',
          backgroundColor: '#66c2ff',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: '#1aa3ff',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [3, 0.5, 1, 2, 1, 2, 3]
        }
      ]
    };
    return (
      <div id="container">
        <Menu />
        <div className="content">
          <BasicInformation />
          <div id="job_content">
            <Row>
              <Col sm={2} id="job">Experiments</Col>
              <Col sm={10}>
                <Row><Bar data={data} options={{ maintainAspectRatio: false }} /></Row>
                <Row>Details Job</Row>
              </Col>
            </Row>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default App;
