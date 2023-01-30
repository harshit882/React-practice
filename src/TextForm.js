import React, { useState} from 'react'
import './css/textForm.css'
export default function TextForm({heading ,myStyle}) {
    const [text ,setText] =useState('')
  
    const [count ,setCount] =useState(0)
    const [last_st,setLast] =useState('')
    
    let handelChange = e =>{
        const {value} =e.target
        setText(value)
        let str =document.getElementById("myBox").value
        setLast(str)
        last_st ===' '? setCount(0) : setCount(str.length)

       
    }
    let convertToUpper =() => {
        setText(text.toUpperCase())
        
    }
    
    let convertToLower =() => {
        setText(text.toLowerCase())
    }
       
	
   
   return (
    <>

    <div className='textForm container mt-3 ' >
   
        <div className="mb-3 ">
            <label htmlFor="myBox" className="form-label"><h3>{heading}</h3></label>
            <textarea className={`form-control border border-primary bg-${myStyle === 'light'?'light':'dark'} text-${myStyle === 'light'?'dark':'light'} `} id="myBox" rows="8" placeholder='enter text here' value={text} onChange={handelChange} ></textarea>
        </div>
        <div className="d-grid gap-2 d-md-block">
  <button className="btn btn-primary ms-2" id='upperCase' type="button" onClick={convertToUpper}>Convert to UpperCase</button>
  <button className="btn btn-primary ms-2" id='lowercase' type="button" onClick={convertToLower}>Convert to Lowercase</button>
  {/* <button className="btn btn-primary ms-2" id='lowercase' type="button" onClick={convertToLower}>Convert to Lowercase</button> */}
  <p id="summary" className='p-3'>total number of letters : {count} and total words :{text.split(' ').filter((input)=>{return input.length !== 0}).length}</p>
</div>
    </div>
    </>
  )

}
