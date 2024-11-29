const express= require("express");
const router= express.Router();

router.get("/",(req,res)=>{
res.send({data:"data has been retrived "})
})

router.put("/",(req,res)=>{
    res.send({data: "data has been send "})
})

router.patch("/",(req,res)=>{
    res.send({data: "data has been updated"})
})

router.delete("/",(req,res)=>{
    res.send({data : "data has been deleted"})
})

module.exports=router;