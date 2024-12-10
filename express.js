const express = require('express');
const app = express();

const data = [
    {
        "user_id": 1733834055117,
        "user_name": "admin",
        "email": "admin@gmail.com",
        "password": "123456",
        "role": "Admin"
    }, {
        "user_id": 1733834055118,
        "user_name": "john",
        "email": "john@gmail.com",
        "password": "123456",
        "role": "Admin"
    }];

const schema = ["user_name", "email", "password", "role"];
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
    console.log(req.body)
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

app.put('/update/:id', (req, res) => {

    const user = data.find(user => user.user_id === Number(req.params.id));

    if (!user) {
        return res.json({ message: 'User not found' });
    }

    // user.user_name = req.body.user_name || user.user_name;
    // user.email = req.body.email || user.email;
    // user.password = req.body.password || user.password;
    // user.role = req.body.role || user.role;

    for (let key in req.body) {
        if (schema.includes(key)) {
            user[key] = req.body[key]
        }
    }

    return res.json({ message: 'Data updated..' })
})

app.delete('/:id', (req, res) => {
    const user = data.findIndex(user => user.user_id === Number(req.params.id));

    if (user === -1) {
        return res.json({ message: "user not found" })
    }

    data.splice(user, 1);

    return res.json({ message: "User deleted" })

})


app.listen(3000, () => {
    console.log('Server started on port 3000');
});