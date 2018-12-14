import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import axios from 'axios';

class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            allHouses:[]
          }
    }

    postInputHouse=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    postNewHouse=()=>{
        const{name, address, city, state, zip}= this.state
         const postNewHouse={
             name,
             address,
             city,
             state,
             zip
         }

      axios.post('/api/houses',postNewHouse).then(response=>{
          this.setState({
            name: "",
            address: "",
            city: "",
            state: "",
            zip: ""
          })
      })  
    }




    render() { 
         console.log("postallshoestate", this.state)
        return ( 
            <div>
                Wizard

            <NavLink to="/"><button>Cancel</button></NavLink>
             <div>Property Name <input value={this.state.name} name="name" onChange={e=>{this.postInputHouse(e)}}/></div> 
             <div> Address <input value={this.state.address} name="address" onChange={e=>{this.postInputHouse(e)}}/></div> 
             <div> City  <input value={this.state.city} name="city" onChange={e=>{this.postInputHouse(e)}}/></div> 
             <div> State <input value={this.state.state} name="state" onChange={e=>{this.postInputHouse(e)}}/></div> 
             <div>Zip <input value={this.state.zip} name="zip" onChange={e=>{this.postInputHouse(e)}}/></div> 
            <NavLink to="/"> <button onClick={()=>{this.postNewHouse()}}>Complete</button></NavLink>
            </div>
         );
    }
}
 
export default Wizard;