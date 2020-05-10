import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Post from './components/Profile/MyPosts/Post/Post';
import DialogItem from './components/Dialogs/DialogItem/DialogItem';
import Message from './components/Dialogs/Message/Message';

let postsData = [
  { id: 1, message: 'Hi, how are you?', likesCount: '4' },
  { id: 2, message: "It's my first post", likesCount: '25' }
]

let postsElement = postsData.map( p => <Post message={p.message} likeCount={p.likesCount} />);

let dialogs = [
  {id: 1, name: 'Alex'},
  {id: 2, name: 'Victor'},
  {id: 3, name: 'Tomas'},
]

let dialogsElements = dialogs.map ( d => <DialogItem name={d.name} id={d.id} />);

let messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'Hello'},
]

let messageElements = messages.map ( m =>  <Message message={m.message} />)

ReactDOM.render(
  <React.StrictMode>
    <App posts={postsElement} dialogsElem={dialogsElements} messageElem={messageElements} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
