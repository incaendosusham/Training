import React from 'react';

import axios from 'axios';

export default class Getemployee extends React.Component {
  state = {
    employees: []
  }

  componentDidMount() {
    axios.get(`http://dummy.restapiexample.com/api/v1/employees`)
      .then(res => {
        const employees = res.data;
        this.setState({ employees });
      })
  }

  render() {
    return (
      <ul>
        { this.state.employees.map(employees => <li key={employees.id}>id={employees.id}{employees.employee_name}</li>)}
        { this.state.employees.map(employees => <li key={employees.id}>id={employees.id}{employees.employee_salary}</li>)}
      </ul>
    )
  }
}