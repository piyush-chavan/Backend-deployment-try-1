import express from 'express'
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json())

let users = [
    { id: 1, name: "Piyush" },
    { id: 2, name: "Raj" }
  ]

app.get("/",(req,res)=>{
    res.json({message:"Backend server is running Properly !"})
})

app.get("/users",(req,res)=>{
    res.json(users);
})

app.post("/users",(req,res)=>{
    const body = req.body
    users.push(body)
    if(body){
        res.send("Data added !")
    }
})

const PORT = process.env.PORT || 3030
app.listen(PORT,(req,res)=>{
    console.log(`Server running on port ${PORT}`)
})