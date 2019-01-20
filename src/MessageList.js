import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageList extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired
  };

  render() {
    return (
      <ul className="message-list">
        {this.props.messages.map((message, index) => (
          <li
            key={index}
            className={
              message.username === this.props.user.username ? 'message sender' : 'message recipient'
            }
          >
            <p>{`${message.username}: ${message.text}`}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default MessageList;
