import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList';
import SendMessage from './SendMessage';

class ChatWindow extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired
  };

  state = {
    messages : [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ]
  }

  handleSend = (message) => {
    this.setState((currentState) => ({
      messages: [...currentState.messages, message ]
    }));
  }

  render() {
    return (
      <div>
        {this.props.users.map(user => (
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>
            <MessageList user={user} messages={this.state.messages}/>
            <SendMessage onSend={this.handleSend} />
          </div>
        ))}
      </div>
    );
  }
}

export default ChatWindow;