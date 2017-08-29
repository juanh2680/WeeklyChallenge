import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Contact extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)

    // default status for a contact
    this.state = {
      status: 'Pending',
      className: 'pending',
      isButtonDisabled: false
    };
  }

  handleClick() {
    // on click have state.status update to done
    // and update the className to be done
    // DO NOT MANIPULATE STATE DIRECTLY
    // this.state = newState
    this.setState({
      status: 'Done',
      className: 'done',
      isButtonDisabled: true
    });



  }

  render() {
    return (
      <div>
        <p>You need to contact {this.props.first} {this.props.last} {this.props.phone}<span id={this.state.className}>{this.state.status}</span>
          <button onClick={this.handleClick} disabled={this.state.isButtonDisabled} >Click Here</button>
        </p>
      </div>
    );
  }
}

export default Contact;
