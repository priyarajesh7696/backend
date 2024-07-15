
import UserModel from '../models/user.js'
import Auth from '../helper/auth.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
const getAllUsers = async(req,res)=>{
    try {
        let users = await UserModel.find({},{password:0})
       console.log(users)
        res.status(200).send({
            message:"User data fetch successful",
            users
        })
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error throw"
        })
    }
}
export default {
    getAllUsers
}