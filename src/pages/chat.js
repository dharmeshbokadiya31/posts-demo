import React from 'react'
import { useState } from 'react';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyBAbM-FnfsgczeyBf00z-Cnb-3FDfvf3xU",
    authDomain: "real-time-post-chat.firebaseapp.com",
    projectId: "real-time-post-chat",
    storageBucket: "real-time-post-chat.appspot.com",
    messagingSenderId: "805945236098",
    appId: "1:805945236098:web:7fcce853d7832c438bb29b",
    measurementId: "G-048Y3M2E78"
});

const firestore = firebase.firestore();

const Chat = () => {

    const [text, setText] = useState('');
    const [messages, loading, error] = useCollectionData(
      firestore.collection('messages').orderBy('createdAt')
    )

    const sendMessage = async () => {
        if (text !== '') {
          await firestore.collection('messages').add({
            text,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          });
          setText('');
        }
      }
      
  return (
    <div>
    <div>
      {messages &&
        messages.map((message) => (
          <div key={message.id}>{message.text}</div>
        ))}
    </div>
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  </div>
  )
}

export default Chat