const express = require('express')
const cors = require('cors')
const { db } = require('./db/db')
const {readdirSync} = require('fs')
const { router } = require('./routes/Transaction')
// const authRoutes = require('./routes/auth')
const app = express()



require('dotenv').config()
const PORT = process.env.PORT

// Middleware

app.use(express.json())
app.use(cors())

// app.use('/api/v1/auth', authRoutes);


// routes
// readdirSync('./routes').map((route)=>app.use('/api/v1',require(`./routes/${route}`)))

const authRoutes = require('./routes/Auth')
const transaction = require('./routes/Transaction')
app.use('/api/auth',authRoutes)
app.use('/api/transaction',transaction)

app.get('/',(req,res)=>{
    res.send('Hello World')
})

const server = ()=>{
    db()
    app.listen(PORT,()=>{
        console.log("You are listening to port : ",PORT);
    })
}

server()