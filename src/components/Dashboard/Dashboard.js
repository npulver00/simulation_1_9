import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";
import House from "../House/House";
import { connect } from 'react-redux';
import {alltheHouses} from "../../redux/reducer";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allHouses:[],
            allH:"",
            name: "",
            editBox:"",
            searchList: [],
            searchWord: ""
          }

          this.getAllHouse=this.getAllHouse.bind(this)
    }


    componentDidMount(){
        this.getAllHouse()
    }
    //get houses
    getAllHouse(){
        axios.get("/api/houses").then(response=>{
            console.log("front get", response)
           this.setState({
               allHouses: response.data
           })
        })
      
    }
    deleteHouse=(id)=>{
        axios.delete(`/api/houses/${id}`).then(response=>{

            this.props.alltheHouses(response.data)
            // this.setState({
            //     allHouses: response.data
            // })
        })
        this.getAllHouse()
    }
    editHouse=(id)=>{
        console.log("id", id)
        const updateHouse={
            name:this.state.editBox,
            // address:this.state.editBox,
            // city:this.state.editBox,
            // state:this.state.editBox,
            // zip:this.state.editBox
        }
        axios.put(`/api/houses/${id}`, updateHouse).then(response=>{
            console.log("edit Response", response)
            this.setState({
                allH:response.data,
            })
                 this.getAllHouse()
            console.log("edit after ", response.data)
        })
    }

    editInputBox=(input)=>{
        console.log("input", input)
        this.setState({
            editBox: input,
            allHouse: []
            // [event.target.name]: event.target.value
        })
        console.log("inputState", input)
    }

    search=(value)=>{
        axios.get(`/api/search?name=${value}`).then(response=>{
            this.setState({
                allHouses: response.data,
                searchWord: value
            })
        })
    }
    

    render() { 
         const{allHouses} = this.state

        return ( 
            <div>
                {allHouses.map(e=>{
                console.log("map", e)
                    return(
                        <House 
                            name={e.name}
                            address={e.address}
                            city={e.city}
                            state={e.state}
                            zip={e.zip}
                            id={e.id}
                            deleteHouse={this.deleteHouse}
                            editHouse={this.editHouse}
                            editInputBox={this.editInputBox}

        
                         />

                    )
                })}

             <div><button>Search</button>
             <input value={this.state.searchWord} onChange={(e)=>{this.search(e.target.value)}}/>
             </div>
            <div>Dashboard <NavLink to="/wizard"><button>Add New Property</button></NavLink></div>
           
           
            {/* <House/> */}

            </div>
         );
        
    }
}


const mapStateToProps= state =>{
    const{allHouses}= state
    return{
        allHouses
    }
}
 
export default  connect(mapStateToProps, {alltheHouses})(Dashboard);