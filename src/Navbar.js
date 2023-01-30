import React  from "react";
import './css/navbar.css'
import Alert from './Alert';
import { Link } from "react-router-dom";
export default function Nabvar(props) {
    

    return(
        <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/#">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                <button className="btn btn-dark bg-dark border border-dark-subtle btn-sm btns my-1" id="color-picker-2">Open Picker</button>
                </li>

            </ul>
            </div>
            <div className="m-2">
  
   
  
</div>
            <div className="form-check form-switch mode">
            <input className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Disable ${props.myStyle} mode`}</label>
        </div>
        </div>
        
        </nav>
            <Alert alertType ='success' alertMsg ={props.alertMsg}/>

        
        </>
    )
}