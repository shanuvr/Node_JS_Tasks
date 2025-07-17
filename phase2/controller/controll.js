
import user from "../models/user.js"

 const show = (req,res)=>{
    res.status(200).send("hello");
 }

 const addUser = async (req,res)=>{
    let insertuser = await user.insertOne(req.body)
    res.send(insertuser)
 }

 const deleteUser = async (req,res)=>{
    try {
    const userId = req.params.id;
    const deluser = await user.findByIdAndDelete(userId);
    if (deluser) {
      res.status(200).json({ message: "User deleted", user: deluser });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Error deleting user" });
  }
 }

 const updateUser = async(req,res)=>{
    
    const userupdate = await user.findByIdAndUpdate(req.params.id,req.body)
 res.send(userupdate)
    

 }

export {show , addUser, deleteUser,updateUser}