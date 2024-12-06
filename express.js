const express = require('express');
const app = express();

const data = [];

// Middleware
app.use(express.json());

app.get('/list', (req, res) => {
    res.json({
        data: data,
        message: 'Data fetched successfully'
    });
})

app.post('/add', (req, res) => {
    // email check 
    const user = data.find(user => user.email === req.body.email);

    if (user) {
        return res.json({ message: 'Email already exists' });
    }
    // user_id genarate
    const payload = {
        user_id: Date.now(),
        ...req.body,
    }

    data.push(payload)
    return res.json({ message: 'Data added..' })
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
});