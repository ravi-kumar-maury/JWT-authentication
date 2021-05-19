require('dotenv').config()
const express = require('express')
const bodyparser = require('body-parser')
const jwt = require('jsonwebtoken')
const { urlencoded } = require('body-parser')
const bcrypt = require('bcrypt')

const app = express()
app.use(bodyparser.json())
let users ={
    ravi : {
        name : "rk",
        project : "project 1"


    },
    tavi : {
        name : "tk",
        project : "project 2"


    }
   
}
app.get('/',(req,res)=>{
    
   res.send(users)
})

app.post('/login',async (req,res)=>{

    
    // user authentication by using async library 
    
        let user
        const usr = req.body.uname
        let pwd = req.body.pwd
        let pwd1 = pwd.toString()
        // let salt = bcrypt.genSalt()
        // const hashedPassword = await bcrypt.hash(pwd1,salt)
        // console.log(salt);
        // console.log(hashedPassword);
        user = {name : usr}
        let accessToken =  jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
        res.json({accessToken:accessToken})
    
       
   
})


app.listen(4000, ()=>{
    console.log("connected");
})
