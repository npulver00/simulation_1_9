const INITIALSTATE ={
    allHouses: []
}


const All_HOUSE = "ALL_HOUSE";


function reducer(state=INITIALSTATE, action){
   switch(action.type){
       case All_HOUSE:
         return Object.assign({}, state,{allHouses:action.payload})

         default: return state;
   }
}

export function alltheHouses(houses){
    return{
        type:All_HOUSE,
        payload:houses
    }
}

export default reducer;