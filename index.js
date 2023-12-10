const express = require ("express");
const fs = require("fs");
const cors = require("cors");
const { json } = require("body-parser");
 const app = express();

 app.use(express.json());//it will collect the data in the post method and make avaliable req.body 
 app.use(cors());//it will handle all the cors permissions


app.get("/movies",(req,res)=>{

    fs.readFile("./movies.json",(err,movies)=>{
        if(err === null){
            res.send(movies);
        }

    })

})

app.get("/movies/:id",(req,res)=>{

    let id = req.params.id
    fs.readFile("./movies.json",(err,moives)=>{
        if(err=== null){
            let MoviesArray = JSON.parse(moives)
            let moive = MoviesArray.find((movie,index)=>{
                return Number(movie.id)=== Number(id);
            })
            res.send(moive);
        }
    })

})

app.post("/movies",(req,res)=>{
    let data = req.body;

    fs.writeFile("./movies.json",JSON.stringify(data),(err)=>{
        if(err === null){
            res.send({message:"Post request successfull"})
        }
        else{
            req.send({message:"some problem in the posting a data"})
        }
    })

})

app.delete("/movies/:id",(req,res)=>{
    console.log(req.params.id)

    res.send({message:"delete reqest seccesful"})
})

app.patch("/movies/:id",(req,res)=>{
    let id = req.params.id;
    let data = (req.body);
    console.log(id,JSON.stringify(data));
    res.write({message:"Patch request successful"})
})


app.listen(8000,()=>{
    console.log("server is up and  running ")
})

