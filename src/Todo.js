import { Button, List, ListItem, ListItemText, Modal } from '@mui/material';
import React, { useState } from 'react'
import './Todo.css';
import db from './firebase';

import { makeStyles } from '@mui/styles';

const usestyles = makeStyles((theme)=>({
  paper:{
  position: 'absolute',
  width: 400,
  // backgroundColor: theme.palette.background.paper,
  border: '2px solid #000',
 
  // boxShadow: theme.shadows[5],
  // padding:theme.spacing[2,4,3],
  },
}));

function Todo(props) {
  const classes=usestyles();
  const [open,setopen]=useState(false);
  const [input,setinput]=useState('');
 
  const handleOpen=()=>{
    setopen(true);
    
  }
  const updatetodo=()=>{
    db.collection('todo').doc(props.todo.id).set({
        todo:input
    },{merge:true})
    setopen(false)
  }
  return (
   
    <>
      <Modal
      open={open}
      onClose={e=>setopen(false)}>
        <div className={classes.paper}>
          <h6>update</h6>
          <input placeholder={props.todo.todo} value={input} onChange={event=>setinput(event.target.value)}/>
        <Button onClick={updatetodo}>update</Button>
        </div>
      </Modal>
        <List className="todo-list">
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary="deadline"/>

                
            </ListItem>
            <Button onClick={e=>setopen(true)}>Edit</Button>
            <Button onClick={event=>db.collection('todo').doc(props.todo.id).delete()}>delete me</Button>
        </List>
      {/* <li>{props.text}</li> */}
      </>
  )
}

export default Todo;
