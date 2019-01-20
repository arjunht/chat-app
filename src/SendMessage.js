import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SendMessage extends Component {
  static propTypes = {
    onSend: PropTypes.func.isRequired
  };

  state = {
    message: ''
  };

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  isDisabled = () => {
    return this.state.message === '' ;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSend(this.state.message);
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            value={this.state.message}
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SendMessage;