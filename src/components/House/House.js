import React from 'react';

const House = (props) => {
    return ( 
        <div className="house">
            <div>Name:{props.name}</div>
            <div>Address:{props.address}</div>
            <div>City:{props.city}</div>
            <div>State:{props.state}</div>
            <div>Zip:{props.zip}</div>

            <div><button onClick={()=>{props.deleteHouse(props.id)}}>X</button></div>
            <div><input  onChange={(e)=>{props.editInputBox(e.target.value)}}/></div>
            <div><button onClick={()=>{props.editHouse(props.id)}}>Edit</button></div>

            
        </div>
     );
}
 
export default House;