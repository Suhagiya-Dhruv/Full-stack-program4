Sure! Here is an explanation and example for each JavaScript concept you mentioned:

### 1. `Object.preventExtensions`

`Object.preventExtensions` prevents new properties from being added to an object, but allows existing properties to be changed or deleted.

**Example:**

```javascript
const obj = { a: "1", b: "2", c: "3", e: { a: "e1", b: "e2", c: "e3" } };

Object.preventExtensions(obj);
Object.preventExtensions(obj.e);

// Attempting to add new properties will fail
obj.e.d = "e4"; // (X)
obj.d = "e4"; // (X)

// Deleting or modifying existing properties is allowed
delete obj.a; 
obj.c = "33";
```

### 2. `Object.seal`

`Object.seal` prevents new properties from being added or existing properties from being deleted, but allows modification of existing properties.

**Example:**

```javascript
Object.seal(obj);

// Attempting to add or delete properties will fail
obj.e.d = "4"; // (X)
delete obj.e.a; // (X)

// Modifying existing properties is allowed
obj.c = "33";
```

### 3. `Object.freeze`

`Object.freeze` prevents new properties from being added, existing properties from being deleted, or existing properties from being changed.

**Example:**

```javascript
Object.freeze(obj);

// Attempting to add, delete, or modify properties will fail
obj.e.d = "4"; // (X)
delete obj.e.a; // (X)
obj.e.c = "33"; // (X)
```

### 4. Array Destructuring

Array destructuring allows for unpacking values from arrays into distinct variables.

**Example:**

```javascript
const arr = [1, 2, 3, 4, 7];
const [a, c, b, d, e = 5, f = 6] = arr; // Destructuring

console.log(a, b, c, d, e, f); // 1, 3, 2, 4, 7, 6
```

### 5. Object Destructuring

Object destructuring allows for unpacking values from objects into distinct variables.

**Example:**

```javascript
const obj = {
    a: "1",
    b: "2",
    c: "3",
    e: { a: "1" },
    fn: () => {
        console.log("Function Called");
    }
};

const { a, c, b, e, d = "123", fn } = obj;

console.log(a, b, c, e, d, fn); // "1", "2", "3", { a: "1" }, "123", function reference
```

### 6. `this` Keyword and Function Binding

The `this` keyword refers to the context in which a function is executed. Methods like `call`, `apply`, and `bind` allow you to explicitly set the value of `this`.

**Example:**

```javascript
const obj = {
    fname: "john",
    lname: "shah",
    fn: function () {
        console.log(this.fname + " " + this.lname);
    }
};

function joinName(age, address) {
    console.log(this.fname + " " + this.lname + " ", age, address);
}

// Using call method
joinName.call(obj, 18, "surat");

// Using apply method
joinName.apply(obj, [18, "surat"]);

// Using bind method
const boundJoinName = joinName.bind(obj, 18, "surat");
boundJoinName();
```

### Website Task
[text](https://themewagon.github.io/hairnic/index.html)