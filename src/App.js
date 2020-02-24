import React,{Component } from 'react';
import {Button} from './button';
import {Login} from './Login'
import './App.css';




const initState = {
  user:"",
  password:"",

  
}
const usuario="carlos"
const contraseña="verga"
const logged = false;
class App extends Component {

  constructor(props){
        super(props);
        this.state={...initState,usuario,contraseña,logged}
     
  }
    actualizadora =(event) =>{
            
      const value = event.target.value;
      const id = event.target.id
      this.setState({
            [id]:value
      })
}


   cambiosubmit = (event) =>{
      
       event.preventDefault()
        const bool = true;
   
       this.setState({
             ...initState,
            usuario,contraseña,bool
       })
       

   }

   borrar = (carnet)=>{

    const peoples = this.state.peoples.filter(( 
             person, indice)=>{
      return indice!==carnet
})
    this.setState({
          ...initState,
          peoples
    })

   }


  
  render(){
        const {user,password}=this.state
      

        const Banner = logged?   <h1>pokemon</h1>: <Login user={user} password={password}  actualizadora={this.actualizadora} submitcambio={this.cambiosubmit}/> 
     ;
        return (<div>
          {Banner}
          </div>
       );
  }
}



export default App;
