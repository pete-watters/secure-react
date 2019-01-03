import React, { Component } from 'react'

class UserHref extends Component {
  constructor(){
    super();
    this.state = { link: '' };
  }

  updateLink = event => 
    this.setState({ link: event.target.value });

  render(){
    // If a user enters JS into this href field they could enter a script to steal cookie info!
    // e.g. javascript:alert(document.cookie)
    return (
      <div>
        <h3>User Generated Href</h3>
        <a target="_blank" href={this.state.link}>{this.state.link}</a>
        <br />
        <input onChange={this.updateLink} />
      </div>
    )
  }
}

export default UserHref;