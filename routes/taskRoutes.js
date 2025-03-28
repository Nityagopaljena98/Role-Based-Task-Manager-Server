import express from 'express'
import { allTask, assignTask, getUserTask } from '../controllers/taskController.js'

const router = express.Router()



// Create a router for assign tasks 
router.post("/assigntasks", assignTask)

// Create a router for get user tasks 
router.get("/usertasks/:id", getUserTask)

// Create a router for get all users tasks
router.get("/alltasks", allTask)


export default router