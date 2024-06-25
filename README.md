# JavaScript Non-Primitive Types and Operations

## Non-Primitive Types in JavaScript

JavaScript has several non-primitive types, including:

1. **Object**
2. **Function**
3. **Array**

### Object

Objects in JavaScript are collections of key-value pairs. They can be created using curly braces `{}`.

#### Example:

```javascript
var a = {
    name: "John",
    address: "Surat",
    contact: {
        phone: 87878787878,
        email: "abc@gmail.com"
    }
};
```

#### Accessing Object Properties:

- **Dot Notation**: `a.name`
- **Bracket Notation**: `a["name"]`

#### Modifying Object Properties:

```javascript
a.name = "Bob";
a.contact.phone = "456465";
```

#### Adding and Deleting Properties:

```javascript
a.name1 = 12;
delete a.name;
```

### CRUD Operations on Objects

- **Create**: Adding new properties
- **Read**: Accessing existing properties
- **Update**: Modifying existing properties
- **Delete**: Removing properties

### Array

Arrays in JavaScript are list-like objects. They can hold multiple values of different types.

#### Example:

```javascript
var a = [1, 2.262652, 3, "4", null, 6, false, 8, 9];
```

#### Accessing and Modifying Array Elements:

```javascript
a[3] = "40";
```

#### Array Methods:

- **Push**: Adds elements to the end of an array
  ```javascript
  a.push(10, 11, 12);
  ```
- **Pop**: Removes the last element from an array
  ```javascript
  a.pop();
  ```
- **Shift**: Removes the first element from an array
  ```javascript
  a.shift();
  ```
- **Unshift**: Adds elements to the beginning of an array
  ```javascript
  a.unshift(5, 5, 10);
  ```

#### Other Array Methods:

- **Join**: Combines all elements of an array into a string
  ```javascript
  a.join(", ");
  ```
- **Concat**: Merges two or more arrays
  ```javascript
  var c = a.concat(b);
  ```

### Looping Through an Array

Using a `for` loop to iterate through each element:

```javascript
for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}
```

### Function

Functions are reusable blocks of code designed to perform a particular task.

#### Example:

```javascript
function run() {
    console.log("This is the Function");
}
```

#### Calling a Function:

```javascript
run();
```

### Determining Types

Use the `typeof` operator to determine the type of a variable:

```javascript
console.log(typeof a); // object
console.log(typeof run); // function
```