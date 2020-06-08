import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";


class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees
  };


  // Map over this.state.employees and render a employeeCard component for each employee object
  render() {
    return (
      <Wrapper>
        <Title>Employees </Title>
        
        <input type="text" placeholder="search by name" className="input-box"></input>
        
        {this.state.employees.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            occupation={employee.occupation}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
