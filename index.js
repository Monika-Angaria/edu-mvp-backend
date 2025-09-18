import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Server running!'));

app.post('/api/register', async (req, res) => {
    // In a real app, you would get user data from req.body
    const user = { username: 'testuser', password: 'password123' };

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);

        console.log("Original Password:", user.password);
        console.log("Hashed Password:", hashedPassword);

        res.status(200).send('User registration endpoint hit!');
    } catch (error) {
        res.status(500).send('Error during password hashing');
    }
});

app.listen(4000, () => console.log('API running on port 4000'));