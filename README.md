### 1. HTTP Module Example
```javascript
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
```

**Explanation:**
- This example uses the built-in `http` module to create a basic HTTP server.
- The `user1` and `user2` objects are simple JavaScript objects containing user information.
- `http.createServer()` is used to create the server that listens for incoming requests. The callback function takes `request` and `response` objects.
- Inside the callback, the server extracts the query parameters from the URL using `request.url.split("?")[1]`. It checks for the value of `name` in the query string (`name=user1` or `name=user2`).
- Depending on the value of `name`, the server responds with the corresponding JSON data (`user1` or `user2`).
- If there is no match or query, the server just ends the response without sending data.
- The server is listening on port 3000, meaning you can visit `http://localhost:3000/?name=user1` or `http://localhost:3000/?name=user2` to get JSON data for user1 or user2.

---

### 2. Express Module Example (without filesystem)

```javascript
const express = require('express');
const app = express();

const data = [
    { id: 1, name: 'user1' },
    { id: 2, name: 'user2' }
];

app.get('/', (request, response) => {
    response.json(data)
})

app.get('/:userId', (request, response) => {
    const userId = request.params.userId;
    const filterData = data.find(item => item.id == userId);
    response.json(filterData);
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
```

**Explanation:**
- This example uses the `express` module, which simplifies working with HTTP requests and responses.
- Instead of manually handling the query parsing and routing, `express` makes it easier with built-in methods like `app.get()`.
- The `data` array is a static array of user objects, each containing an `id` and a `name`.
- `app.get('/')`: This route handles requests to the root URL (`/`). It responds with the entire `data` array as JSON.
- `app.get('/:userId')`: This route handles requests where a user ID is passed as a URL parameter (e.g., `/1` or `/2`). It uses `request.params.userId` to extract the user ID and then filters the `data` array to find the matching user based on the `id` field.
- The server listens on port 3000, so you can visit `http://localhost:3000/` to see all users, or `http://localhost:3000/1` to get the data for user1.

### Key Differences Between the Two Examples:
1. **HTTP Module**:
   - More manual setup: you need to parse the query string and handle the response yourself.
   - Less abstraction, giving you more control over the server behavior.

2. **Express Module**:
   - Simplifies routing and handling HTTP requests.
   - Provides built-in methods for handling routes, parameters, and responses.
   - More developer-friendly with less boilerplate code.

Here's an overview of the most common **HTTP methods** used in Express (and web development in general):

### 1. **GET**
- **Purpose**: To retrieve data from the server.
- **Use case**: Fetching resources or information (e.g., retrieving a list of users or a specific item).
- **Idempotent**: Yes. Making the same GET request multiple times will always return the same result without causing any side effects on the server.

### 2. **POST**
- **Purpose**: To send data to the server, usually to create a new resource.
- **Use case**: Submitting forms, creating new records in a database, uploading files, etc.
- **Idempotent**: No. Each POST request can create a new resource or trigger some action on the server.

### 3. **PUT**
- **Purpose**: To update an existing resource on the server.
- **Use case**: Updating the information of an existing item (e.g., modifying user details or updating product information).
- **Idempotent**: Yes. Making the same PUT request multiple times with the same data will not result in a different state or unintended side effects.

### 4. **DELETE**
- **Purpose**: To delete a resource on the server.
- **Use case**: Removing a record or item from the system (e.g., deleting a user or product).
- **Idempotent**: Yes. Making the same DELETE request multiple times will have the same effect as the first request (the resource will be deleted).

### 5. **PATCH**
- **Purpose**: To partially update a resource.
- **Use case**: Making partial updates to an existing resource (e.g., changing just one field of a user profile).
- **Idempotent**: No. Repeated PATCH requests might result in different server states if the changes are incremental and not entirely deterministic.

### 6. **OPTIONS**
- **Purpose**: To describe the communication options for the target resource.
- **Use case**: Checking the allowed HTTP methods and other communication options for a resource (often used in pre-flight CORS requests).
- **Idempotent**: Yes. The response will be the same every time.

### 7. **HEAD**
- **Purpose**: Similar to a GET request but only retrieves the headers, not the body.
- **Use case**: Checking metadata (e.g., content length, content type, etc.) without downloading the full resource.
- **Idempotent**: Yes.

### Request Data Types
- **Query Parameters**: Data appended to the URL after the `?` symbol, often used for filtering or modifying the request (e.g., `?name=user`).
- **Route Parameters**: Dynamic values within the URL path, often used to identify a resource (e.g., `/user/:id`).
- **Request Body**: Data sent with POST, PUT, or PATCH requests, often in JSON or form-data format. Used for sending large or complex data.

### Response Types
- **res.send()**: Sends a general response, can be text, HTML, or any other content.
- **res.json()**: Sends a response in JSON format and sets the `Content-Type` header to `application/json`.
- **res.status()**: Sets the HTTP status code for the response (e.g., `200` for success, `404` for not found).
- **res.redirect()**: Redirects the client to another URL.
- **res.render()**: Renders a template view with dynamic data (used with template engines like EJS, Pug, etc.).
