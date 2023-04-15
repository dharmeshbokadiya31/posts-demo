import React from 'react'
import { useState } from 'react';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Input } from '../components/Input';
import { Textarea } from '../components/Textarea';
import LayoutWrapper from '../components/Common/LayoutWrapper';
import { PrimaryButton } from '../components/Common/Buttons';

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
      <LayoutWrapper />
      <div className='p-4'>
      <div>
        {messages &&
          messages.map((message) => (
            <div key={message.id}>{message.text}</div>
          ))}
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <Textarea
          label="Write Message"
          type="text"
          name="message"
          required
          placeholder="Enter Message"
          value={text}
          onChange={(e) =>
            setText(e.target.value)
          }
          className="shadow my-2 appearance-none border rounded w-24 py-2 px-1 text-black"
          labelClass='block text-black mlabel text-sm mb-1 w-1/2'
                  />
        <PrimaryButton
              className="py-2 px-4 rounded"
              onClick={() => sendMessage()}
              title='Send'
            >
            </PrimaryButton>
      </div>
      </div>
  </div>
  )
}

export default Chat