
import React,{useEffect,useState} from 'react'
import './App.css';
import Todo from './Todo';
import Button from '@mui/material/Button';
import { FormControl, Input, InputLabel } from '@mui/material';
import db from './firebase';
import firebase from 'firebase/compat/app';
// import firebase from './firebase';

function App() {
  const [todo,settodo]=useState([]);
  const [input,setinput]=useState('')
  console.log(input);
  //wehn the app loads we nned to listen to the database and fetch new todos as they get added
//useeffect runs when the app.js loads
// when the dependecy array is not mentined ,it runs everytime, if it is empty it runs only one time, when we a variable inside array , then the app.s loads single time and also runs hen the variable inside array is changed
useEffect(()=>{
  db.collection('todo').orderBy('timestamp','desc').onSnapshot(snapshot=>{
    console.log(snapshot.docs.map(doc=>doc.data()));
    settodo(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})))
    })
},[])
  const addtodo=(event)=>{
    event.preventDefault();
    db.collection('todo').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
    setinput('')
    console.log(todo);
  
  }
  return (
    <div className="App">
     <h1>TO-DO </h1>
    
     <form>
     <FormControl>
        <InputLabel>enter a task </InputLabel>
        <Input value={input} onChange={task=>setinput(task.target.value)}/>
     </FormControl>
      {/* <input value={input} onChange={task=>setinput(task.target.value)}/>
     <button   >add tasks</button> */}
     <Button variant="contained" disabled={!input}  type="submit" onClick={addtodo} color="success">ADD TASK</Button>
     </form>
     <ul>
      {todo.map(todo=>(
        // <li>{task}</li>
      <Todo todo={todo}/>))}
      
    </ul>
   

    </div>
  ); 
}

export default App;
