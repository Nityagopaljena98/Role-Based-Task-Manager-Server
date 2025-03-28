import Task from '../models/Task.js';
import User from '../models/User.js';


// Assign a task
export const assignTask = async (req, res) => {
    try {
        const { title, description, deadline, assignBy, assignTo, status } = req.body;
        // Check if task already assign or not
        const user = await User.findById(assignTo);
        if (!user) {
            return res.status(401).json({ message: 'Assign user not found !' });
        }

        // Craete a new task
        const task = new Task({
            title,
            description,
            assignTo,
            assignBy,
            status,
            deadline,
        });

        await task.save();
        return res.status(200).json({ message: 'Task assign successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Error when assign a task !' });
    }
};


// Get tasks assign to a user
export const getUserTask = async (req, res) => {
    try {
        const tasks = await User.findById(req.params.id);
        if (!tasks) {
            return res.status(401).json({ message: 'Task not assign' });
        }

        return res.status(200).json({ message: "Task fetching successfully", tasks });
    } catch (error) {
        return res.status(500).json({ message: 'Error when fetching user task' });
    }
};


// Get all task 
export const allTask = async (req, res) => {
    try {
        const task = await Task.find();
        res.status(200).json({ message: 'success', task });
    } catch (error) {
        res.status(500).json({ message: 'error' });
    }
};

