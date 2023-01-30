import { useState } from 'react';
import About from './About';

import './App.css';
import Nabvar from './Navbar';
import TextForm from './TextForm';
import { BrowserRouter as Router,
          Routes,
          Route
        } from 'react-router-dom';
import Contact from './Contact';

function App() {
  const [myStyle ,setMyStyle] =useState('light')
  // const [myText ,setMyText] =useState('dark')
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
    <>
     <div className="App">
     
     
    <Router>
    <Nabvar title ='TextUtils' myStyle={myStyle} alertMsg={alertMsg} toggleMode ={toggle}/>
      {/* <Alert/> inside navbar component */}
    <Routes>
      <Route path='/about' element={<About/>}>
      </Route>
      <Route path='/' element={ <TextForm heading ='Enter the text to analyze' myStyle={myStyle} />}>
      </Route>
      <Route path='/contact' element={<Contact myStyle={myStyle}/>}></Route>
   
  
    
  
    </Routes>
    </Router>
  
    </div>
    </>
  );
}

export default App;
