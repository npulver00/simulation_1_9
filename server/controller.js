let allsearch = []
module.exports={

    getAllHouses: (req,res)=>{
        req.app.get("db").getHouses().then(response=>{
            res.status(200).json(response);
        })
        .catch(error => {
            console.log("Error in Controller Get", error);
          });
    },
    postnewHouseForm: (req,res)=>{
        const{name, address, city, state, zip}= req.body
        
        req.app.get("db").postHouse({
            name,
            address,
            city,
            state,
            zip
        }).then(house=>{
            const posttheHouse = house[0]
            res.status(200).json(posttheHouse)
        })
        .catch(error=>{
            console.log("Error in Controller Post", error)
        })
    },
    deleteHouse: (req,res)=>{
        const{id}=req.params
        console.log("delete id",id)
        req.app.get("db").deleteAHouse([
            id
        ]).then(response=>{
           res.json(response)
        })
        .catch(error=>{
            console.log("Error in Controller Delete", error)
        })
    },
    updateHouse: (req, res)=>{
       const{id}=req.params;
       const{name}=req.body;
       req.app.get("db").updateAHouse({
           id:id,
           name:name,
        //    address:address,
        //    city:city,
        //    state:state,
        //    zip:zip
       }).then(()=>{

        //    if(house.id === +id){
        //        house.name = name
        //        house.address=address
        //        house.city=city
        //        house.state=state
        //        house.zip=zip
        //    }
        // })
        res.status(200).json()})
       .catch(error=>{
        console.log("Error in Controller Update", error)
    })
    },

    searchHouse: (req,res)=>{
        
        const{name} = req.query;
        let searchname = name.toLowerCase();


        let searchhouse = allsearch.filter(e=>{
            console.log("search e",e)

            return e.name.includes(searchname)

        })
         if(name){
             res.status(200).json(searchhouse)
         }else{
             res.status(200).json(allsearch)
         }
         console.log("search final",searchhouse)
    }
}