import express from 'express'
import { assignTask, getUserTask } from '../controllers/taskController.js'

const router = express.Router()

// Create a router for assign tasks 
router.post("/assigntasks", assignTask)

// Create a router for get user tasks 
router.get("/usertasks", getUserTask)


export default router