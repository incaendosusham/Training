import React from 'react';
import axios from 'axios';

 class Postemployee extends React.Component {
  state = {
    create  : '',
  }

  handleChange = event => {
    this.setState({ create: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    let create = {
      create: this.state.employee_name
    };
    console.log(this.state.create);

    axios.post('http://dummy.restapiexample.com/api/v1/create', { create })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Employee : 
            <input type="text" name="employee_name"onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
export default Postemployee;