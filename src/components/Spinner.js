import React, { Component } from 'react'
import loading from './Spin-1s-200px.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="spinner" srcset=""   style={{width:"6%"}}/>
      </div>
    )
  }
}
