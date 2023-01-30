import React from 'react'
import './css/alert.css'
export default function Alert(props) {
   return (
    props.alertMsg  &&   <div className={`alert alert-${props.alertType} alert-dismissible fade show shows`} role="alert">
    <strong>{props.alertMsg}</strong> 
</div> 
  )
}
