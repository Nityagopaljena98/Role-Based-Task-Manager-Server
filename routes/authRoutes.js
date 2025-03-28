import express from 'express'
import { register, login, updateUserProfile, getuser, deleteProfile } from "../controllers/authController.js";

const router = express.Router()

// Create a register route 
router.post('/register', register)

// Create a login route
router.post('/login', login)

// Get users
router.get('/get', getuser)

// Update profile
router.put('/update/:id', updateUserProfile)

// Delete profile
router.delete('/delete/:id', deleteProfile)

export default router