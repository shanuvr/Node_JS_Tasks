import express from 'express'
import {show,addUser,deleteUser,updateUser } from '../controller/controll.js'
const router = express.Router()


router.get('/',show)

router.post('/add-user',addUser)

router.delete('/deleteUser/:id',deleteUser)

router.put('/update/:id',updateUser)

export default router