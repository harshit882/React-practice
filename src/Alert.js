import React from 'react'

export default function Alert(props) {
   return (
    props.alertMsg  &&   <div className={`alert alert-${props.alertType} alert-dismissible fade show`} role="alert">
    <strong>{props.alertMsg}</strong> 
</div> 
  )
}
