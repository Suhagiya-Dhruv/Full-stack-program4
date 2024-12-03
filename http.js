const http = require('http');

const user1 = {
    name: "user1"
}

const user2 = {
    name: "user2"
}

const server = http.createServer((request, response) => {
    const data = request.url.split("?")[1];
    const name = data?.split("=")[1];
    console.log(name)
    if (name === 'user1') {
        response.write(JSON.stringify(user1));
        response.end();
    } else if (name === 'user2') {
        response.write(JSON.stringify(user2));
        response.end();
    } else {
        response.end();
    }

});


server.listen(3000);

