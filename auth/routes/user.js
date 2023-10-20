const express = require("express");
const router = express.Router();

const {login,signup} = require("../controllers/auth");
const {auth, isStudent, isAdmin} = require("../middelwares/auth");

router.post("/login",login);
router.post("/signup",signup);

router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:"hello from the protected route test"
    })
})

//protected routes
router.get("/student",auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:"hello from the protected student route"
    })
})

router.get("/admin",auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"hello from the protected admin route"
    })
})

module.exports = router;