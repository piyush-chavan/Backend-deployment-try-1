import express from 'express'
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json())

let users = [
    { id: 1, name: "Piyush" },
    { id: 2, name: "Raj" }
  ]

let messages = [
    {user:"demo_user",user_id: 1764788092871 ,msg:"Hi there !",time:1764788092871}
]

app.get("/",(req,res)=>{
    res.json({message:"Backend server is running Properly !"})
})

app.get("/users",(req,res)=>{
    res.json(users);
})

app.get("/messages",(req,res)=>{
    res.json(messages)
})

app.post("/users",(req,res)=>{
    const body = req.body
    users.push(body)
    if(body){
        res.send("Data added !")
    }
})

app.post("/messages",(req,res)=>{
    const body = req.body
    messages.push(body)
    if(body){
        res.send("Message Sent !")
    }
})

const PORT = process.env.PORT || 3030
app.listen(PORT,(req,res)=>{
    console.log(`Server running on port ${PORT}`)
})