const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const massive = require('massive');
dotenv.config()
const controller = require('./controller');

const app = express();
app.use(bodyParser.json())

app.use( express.static( `${__dirname}/../build` ) );

massive(process.env.CONNECTION_STRING).then(database=>{
    app.set("db", database)
}).catch(database=>{
    console.log('Error in Massive')
})


app.get("/api/houses", controller.getAllHouses)

app.post("/api/houses", controller.postnewHouseForm)

app.delete("/api/houses/:id", controller.deleteHouse)

app.put("/api/houses/:id", controller.updateHouse)

app.get("/api/search", controller.searchHouse)


const PORT = 4077;

app.listen(PORT, ()=>{console.log(`Server listening on Port ${PORT}`)})

