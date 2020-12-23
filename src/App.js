import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';




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
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Contact />
        <Footer data={this.state.resumeData.main} />

      </div>
    );
  }
}

export default App;

