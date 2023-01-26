import { useState } from 'react';
import './App.css';
import Nabvar from './Navbar';
import TextForm from './TextForm';

function App() {
  const [myStyle ,setMyStyle] =useState('light')
function toggle() {
   if(myStyle === 'light') {
      setMyStyle('dark')
      document.body.style.backgroundColor = '#222e3a'
      document.body.style.color = 'white'

   }else{
       setMyStyle('light')
       document.body.style.backgroundColor = 'white'
       document.body.style.color = 'black'
   }
   
  }
  
  return (
    <div className="App">
    <Nabvar title ='TextUtils' myStyle={myStyle} toggleMode ={toggle}/>
    <TextForm heading ='Enter the text to analyze' myStyle={myStyle} />
    </div>
  );
}

export default App;
