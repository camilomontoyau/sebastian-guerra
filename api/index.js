
const express = require("express")
const app = express()
const morgan = require("morgan")


app.use(morgan('dev'));
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

let array = ["hola","buenos","dias","chao","prueba"];

app.get("/",(req,res) => {
    res.send(array)
})

app.post("/string", (req,res) => {
     try{
        const {string} = req.body 
        array.push("1")
        array.push(string)
        res.status(200).send(array)
    }catch(error){
        res.send(error)
    } 
    
})

app.listen(3001,() => {
    console.log("listen on port 3001")
})