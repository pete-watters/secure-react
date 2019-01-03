import React, { Component } from 'react';

class Eval extends Component {
  constructor(){
    super();

    this.state = {
      expression: ''
    }
  }

  updateExpression = event => this.setState({expression: event.target.value});

  vulEval = () => {
    const result = eval(this.state.expression);
    this.setState({ result });
  }

  render(){
    return(
      <div>
        <h3>Evaluating User-Supplied Expressions</h3>
        <input onChange={this.updateExpression} />
        <br />
        <button onClick={this.vulEval}>Vulnerable Eval</button>
        <br />
        <h4>Result: {this.state.result}</h4>
      </div>
    );
  }

}