import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Header from './Components/Header/Header';
import About from './Components/About/About';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resumeData: {}
    }
  }

  componentDidMount() {
    this.getResumeData();
  }

  getResumeData() {
    $.ajax({
      url: '/my_resume_data.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(xhr.responseText);
        alert(err);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About />
        <About />
      </div>
    );
  }
}

export default App;

