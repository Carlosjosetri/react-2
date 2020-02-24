import React from "react";

export const Form = props=>{
  const{user,password,actualizadora,submitcambio} = props;
  return (
      <div>
  <form onSubmit={submitcambio}>
   <input placeholder="User" value={user} id="user" onChange={actualizadora} />
   <input value={password} placeholder="password" id="password" onChange={actualizadora} />
      <button type="submit" >Guardar</button>



  </form>




  </div>
  )
  

}
