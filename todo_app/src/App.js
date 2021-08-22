import React, { useState,useEffect } from 'react' ;
import { Button } from '@material-ui/core';
import { FormControl,InputLabel,Input} from '@material-ui/core';
import Todo from './Todo.js';
import db from './firebase.js';
import firebase from 'firebase';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const[input, setInput] = useState('');
  //when the app load we need to listen to the database and fetch new todos
  useEffect(() => {
      db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
        setTodos(snapshot.docs.map(doc => ({id: doc.id,todo: doc.data().todo})))
      })
  },[])
  const addTodo = (event) => {
    event.preventDefault();
    //this will fire up when we click buttuon
    db.collection('todos').add({
      todo : input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setTodos([...todos, input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>🔥Global Anonymous Chat🔥</h1>
      <form>
      
      <FormControl>
        <InputLabel>Type a message</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
        
      </FormControl>
      <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addTodo}>
  📩Send Messsage📩
</Button>
      
      </form>
      <ul>
        {todos.map(todo=>(
          <Todo todo ={todo}/>
        //<li>{todo}</li>
        ))}

      </ul>
      
    </div>
  );
}

export default App;
