const express  = require("express")

const router = express.Router();

//for movies
router.get("/",(req,res)=>{
    res.send({msg:"get movies Success"})
})

router.get("/",(req,res)=>{
    res.send({msg:"Get Single Movie Success"})
})

router.post("/",(req,res)=>{
    res.send({mes:"Post Movies Success"})
})


module.exports = router;