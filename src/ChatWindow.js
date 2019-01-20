import React from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList';
import SendMessage from './SendMessage';

const ChatWindow = (props) => {
  const handleSend = message => {
    props.onSend(props.user.username, message);
  };

  return (
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{props.user.username}</div>
      <MessageList user={props.user} messages={props.messages}/>
      <SendMessage onSend={handleSend} />
    </div>
  );
}

ChatWindow.propTypes = {
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  onSend: PropTypes.func.isRequired
};

export default ChatWindow;