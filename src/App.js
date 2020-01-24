import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './reduxSetUp/actions/creators.js';

 class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>counter <span>{this.props.conteur}</span></h3>
        <button onClick={this.props.incrmt}>+</button>
        <button onClick={this.props.decmnt}>-</button>
      </div>
    );
}
}
const mapStateToProps = state => {
  return {
    conteur : state.count
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    incrmt : ()=>dispatch(increment()),
    decmnt : ()=>dispatch(decrement())
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(App);
