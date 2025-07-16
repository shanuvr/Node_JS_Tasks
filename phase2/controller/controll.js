
import user from "../models/user.js"

 const show = (req,res)=>{
    res.send('hello')
 }

 const addUser = async (req,res)=>{
    let insertuser = await user.insertOne(req.body)
    res.send(insertuser)
 }

 const deleteUser = async (req,res)=>{
    const userId = req.params.id 
    let deluser = await user.findByIdAndDelete(userId)
    res.send(deluser)
 }

 const updateUser = async(req,res)=>{
    
    const userupdate = await user.findByIdAndUpdate(req.params.id,req.body)
 res.send(userupdate)
    

 }

export {show , addUser, deleteUser,updateUser}