const mongoose = require("mongoose");
const express = require("express")

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/products")
    .then(() => {
        console.log("Connected to Server Successfully");
    })
    .catch((err) => {
        console.log(err);
    })


const mobileSchema = mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number
})


const mobileModel = mongoose.model("mobile", mobileSchema, "mobile");

// let data = {
//     name : "oppo",
//     price : 15000,
//     quantity : 20
// }


// creation of data in the database 

app.post("/products", (req, res) => {

    mobileModel.create(req.body)
        .then(() => {
            console.log("Creation is successfull");
        })
        .catch(() => {
            console.log("some problem in creation of the data");
        })
})

//delecting the data from the database

// mobileModel.deleteOne({_id:"653741c19cdd42ce7062acc9"})
// .then(()=>{
//     console.log("deleted  successfull");
// })
// .catch((err)=>{
//     console.log("some problem in deletion of the data" ,err);
// })


//update the data of the database

mobileModel.updateOne({ _id: "653607ac3ee8fee389433125" }, { name: "Oppo" })
    .then(() => {
        console.log("Updated  successfull");
    })
    .catch((err) => {
        console.log("some problem in updation of the data", err);
    })