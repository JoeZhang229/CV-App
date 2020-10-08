import React, { Component } from 'react';
import './styles/style.css';
import Header from './components/Header';
import GenInfo from './components/GenInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Overview from './components/Overview';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      phone: "",
      school: "",
      degree: "",
      gradDate: "",
      company: "",
      jobTitle: "",
      jobDescription: "",
      startDate: "",
      endDate: "",
      display: true,
    }
  }

  displayForm = () => {
    return (
      <div>
        <GenInfo 
          handleChange={this.handleChange}
          toggleDisplay={this.toggleDisplay}
          info = {this.state}
        />
        <Education 
          handleChange={this.handleChange}
          toggleDisplay={this.toggleDisplay}
          info = {this.state}
        />
        <Experience 
          handleChange={this.handleChange}
          toggleDisplay={this.toggleDisplay}
          info = {this.state}
        />
      </div>
    )
  }

  toggleDisplay = () => {
    this.setState(prevState => {
        prevState.display = !prevState.display
        return {
            display: prevState.display
        }
    })
    console.log(this.state.display);
}

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
}

  render() {
    const { display } = this.state;
    return (
      <div>
        <Header />
        {display ? 
          this.displayForm() : 
          <Overview 
            info = {this.state}
            toggleDisplay={this.toggleDisplay}
          />}
      </div>
    );
  }
}

export default App;
