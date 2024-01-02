import Navbar from './components/Navbar';
import './App.css';
import LoadingBar from 'react-top-loading-bar';
import React, { Component } from 'react'
import News from './components/News';
import {
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  
  constructor() {
    super()
    this.state = {
      mode: 'light',
      btn: 'info',
      text: 'dark',
      color: 'black',
      bgColor: 'light',
      progress:0,
      apiKey:process.env.REACT_APP_NEWS_API
    }

  }


  toggleMode = () => {
    this.setState((prevState) => ({
      mode: prevState.mode === 'light' ? 'dark' : 'light',
      text: prevState.text === 'dark' ? 'light' : 'dark',
      btn: prevState.btn === 'info' ? 'light' : 'info',
      color: prevState.color === 'black' ? 'white' : 'black',
      bgColor: prevState.bgColor === 'light' ? 'secondary' : 'light'
    }));


  };

  setProgress=(progress)=>{
    this.setState({
      progress:progress
    })
  }

  render() {
    return (

      <div style={{ height: '100%' }} className={`bg-${this.state.bgColor}`}>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Navbar toggleMode={this.toggleMode} mode={this.state.mode} text={this.state.text} />
        <Routes>
          <Route path='/' element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key="home" mode={this.state.mode} btn={this.state.btn} text={this.state.text} color={this.state.color} pageSize={15} country='in' category='general' />}></Route>
          <Route path='/general' element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key="general" mode={this.state.mode} btn={this.state.btn} text={this.state.text} color={this.state.color} pageSize={15} country='in' category='general' />}></Route>
          <Route path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key="entertainment" mode={this.state.mode} btn={this.state.btn} text={this.state.text} color={this.state.color} pageSize={15} country='in' category='entertainment' />}></Route>
          <Route path='/health' element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key="health" mode={this.state.mode} btn={this.state.btn} text={this.state.text} color={this.state.color} pageSize={15} country='in' category='health' />}></Route>
          <Route path='/science' element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key="science" mode={this.state.mode} btn={this.state.btn} text={this.state.text} color={this.state.color} pageSize={15} country='in' category='science' />}></Route>
          <Route path='/sports' element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key="sports" mode={this.state.mode} btn={this.state.btn} text={this.state.text} color={this.state.color} pageSize={15} country='in' category='sports' />}></Route>
          <Route path='/technology' element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key="technology" mode={this.state.mode} btn={this.state.btn} text={this.state.text} color={this.state.color} pageSize={15} country='in' category='technology' />}></Route>
        </Routes>
      </div>

    )
  }
}


