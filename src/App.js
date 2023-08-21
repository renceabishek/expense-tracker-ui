
import './App.css';
import {Login} from './Login.tsx';
import {Register} from './Register.tsx';
import React,{useState} from 'react';


function App() {
const [currentForm, setCurrentForm] = useState('login');

const toggleForm = (formName) =>{

setCurrentForm(formName);
}

  return (
    <div className="App">
    {currentForm === 'login' ? <Login onformSwitch={toggleForm}/> : <Register onformSwitch={toggleForm}/>   }   
       
    </div>
    
  );
}

//https://www.youtube.com/watch?v=Y-XW9m8qOis

export default App;
