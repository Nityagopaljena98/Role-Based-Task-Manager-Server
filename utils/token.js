import jwt from 'jsonwebtoken';

const generateToken = (user) => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is missing in environment variables");
    }

    return jwt.sign(
        { id: user._id, username: user.username, role: user.role }, 
        process.env.JWT_SECRET, 
        { expiresIn: '1h' } // Token expires in 5 minutes
    );
};

export default generateToken;
