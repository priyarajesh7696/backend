import express from 'express'
import UserRoutes from './user.js'
const router = express.Router()
//for home page
router.get('/',(req,res)=>{
    res.send(`<h1>Welcome to DBCC BACK END</h1>`)
})

//other routes
router.use('/user',UserRoutes)


export default router