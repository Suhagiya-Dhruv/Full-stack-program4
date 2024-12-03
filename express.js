const express = require('express');
const fs = require('fs');
const app = express();

const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

app.get('/', (request, resposne) => {
    resposne.json(data)
})

app.get('/:userId', (request, resposne) => {
    const userId = request.params.userId
    const filterData = data.find(item => item.id == userId)
    resposne.json(filterData)
})


app.listen(3000, () => {
    console.log('Server started on port 3000');
});