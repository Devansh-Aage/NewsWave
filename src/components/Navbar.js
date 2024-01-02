import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'light',
      text: 'dark'

    }
  }
  toggleMode = () => {
    const newMode = this.state.mode === 'light' ? 'dark' : 'light';
    this.setState({ mode: newMode });
    this.props.toggleMode(newMode); // Call the toggleMode function from App.js
  };

  render() {
    let { text } = this.props
    return (
      <div>
        <nav className={`navbar navbar-expand-lg fixed-top navbar-${this.state.mode} bg-${this.state.mode}`}>
          <a className="navbar-brand" href="/">NewsWave</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/general">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/entertainment"><span className="sr-only">(current)</span>
                  Entertainment</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/general"><span className="sr-only">(current)</span>
                  General</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/health"><span className="sr-only">(current)</span>
                  Health</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/science"><span className="sr-only">(current)</span>
                  Science</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/sports"><span className="sr-only">(current)</span>
                  Sports</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/technology"><span className="sr-only">(current)</span>
                  Technology</Link>
              </li>  </ul>
            <div className="form-check form-switch ml-auto">
              <input className="form-check-input" onClick={this.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
              <label htmlFor="" className={`text-${text}`}>Enable {this.state.mode === 'light' ? 'Dark' : 'Light'} Mode</label>

            </div>
          </div>
        </nav>
      </div>
    )
  }
}
