import React, { useState, useEffect } from 'react';
import * as signalR from '@microsoft/signalr';

const ChatBot = ({ hubUrl }) => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [hubConnection, setHubConnection] = useState(null);

  useEffect(() => {
    const createHubConnection = async () => {
      const hubConnect = new signalR.HubConnectionBuilder()
        .withUrl(hubUrl)
        .withAutomaticReconnect()
        .build();

      try {
        await hubConnect.start();
        console.log('Connection successful!');
      } catch (err) {
        alert(err);
      }

      hubConnect.on('ReceiveMessage', (user, message) => {
        setMessages((prevMessages) => [...prevMessages, { user, text: message }]);
      });

      setHubConnection(hubConnect);
    };

    createHubConnection();

    return () => {
      hubConnection?.stop();
    };
  }, [hubUrl]);

  const sendMessage = async () => {
    if (hubConnection) {
      try {
        await hubConnection.invoke('SendMessage', 'User', userInput);
        setUserInput('');
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="chatbot">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index}>{msg.user}: {msg.text}</div>
        ))}
      </div>
      <input type="text" value={userInput} onChange={handleChange} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatBot;