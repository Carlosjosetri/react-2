import React from 'react';
import {Form} from './Form'


export const Login = (props)=>{
    return(
      <div>
       
        <h1>Logueate</h1>
       <Form user={props.user} password={props.password} actualizadora={props.actualizadora} submitcambio={props.cambiosubmit}/>
    
     </div> 
  
  
    )
  
  }