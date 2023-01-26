import { useState } from 'react';

import './App.css';
import Nabvar from './Navbar';
import TextForm from './TextForm';

function App() {
  const [myStyle ,setMyStyle] =useState('light')
  const [alertMsg,setAlertMsg] =useState(null)
function toggle() {
   if(myStyle === 'light') {
      setMyStyle('dark')
      document.body.style.backgroundColor = '#222e3a'
      document.body.style.color = 'white'
      setAlertMsg('Dark mode Enabled')
      setTimeout(() => {
        setAlertMsg(null)
      }, 1500);

   }else{
       setMyStyle('light')
       document.body.style.backgroundColor = 'white'
       document.body.style.color = 'black'
       setAlertMsg('Dark mode Disabled')
       setTimeout(() => {
        setAlertMsg(null)
      }, 1500);
   }
   
  }
  
  return (
    <div className="App">
    <Nabvar title ='TextUtils' myStyle={myStyle} alertMsg={alertMsg} toggleMode ={toggle}/>
    {/* <Alert/> inside navbar component */}
    
    <TextForm heading ='Enter the text to analyze' myStyle={myStyle} />
    </div>
  );
}

export default App;
