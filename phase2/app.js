import express from 'express'
import mongoose from 'mongoose'
import router from './routes/router.js'
const app = express()

app.use(express.json())
app.use(router)
const URI = 'mongodb://127.0.0.1:27017/postman'

mongoose.connect(URI).then(()=>{
    app.listen(3000,()=>{
        console.log('server started');
        
    })
    console.log('databse connected');
    
})