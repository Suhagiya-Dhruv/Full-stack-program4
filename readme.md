### Shallow Copy

A shallow copy of an object is a copy whose properties and references are copied, but nested objects are not copied. Instead, the references to the nested objects are copied, which means the nested objects are shared between the original and the copied object.

#### Example of Shallow Copy

Using the `Object.assign()` method:
```javascript
const original = {
  name: "John",
  address: {
    city: "New York",
    state: "NY"
  }
};

const shallowCopy = Object.assign({}, original); // create a new object

// Modifying the nested object in the shallow copy
shallowCopy.address.city = "Los Angeles";

console.log(original.address.city); // Output: Los Angeles (original is affected)
console.log(shallowCopy.address.city); // Output: Los Angeles
```

Using the spread operator:
```javascript
const original = {
  name: "John",
  address: {
    city: "New York",
    state: "NY"
  }
};

const shallowCopy = { ...original };

// Modifying the nested object in the shallow copy
shallowCopy.address.city = "Los Angeles";

console.log(original.address.city); // Output: Los Angeles (original is affected)
console.log(shallowCopy.address.city); // Output: Los Angeles
```

### Deep Copy

A deep copy of an object is a copy whose properties and nested objects are all copied. Changes to the nested objects in the copied object do not affect the original object.

#### Example of Deep Copy

Using `JSON.stringify()` and `JSON.parse()`:
```javascript
const original = {
  name: "John",
  address: {
    city: "New York",
    state: "NY"
  }
};

const deepCopy = JSON.parse(JSON.stringify(original));

// Modifying the nested object in the deep copy
deepCopy.address.city = "Los Angeles";

console.log(original.address.city); // Output: New York (original is not affected)
console.log(deepCopy.address.city); // Output: Los Angeles
```

### Limitations of JSON-based Deep Copy

While using `JSON.stringify()` and `JSON.parse()` is a quick way to create a deep copy, it has some limitations:
- It does not copy functions.
- It does not handle circular references.
- It does not preserve special object types (like `Date`, `Set`, `Map`, `RegExp`).

For more complex objects, you can use libraries like `lodash` which provides a `cloneDeep` method:

#### Example with Lodash

First, install lodash if you don't have it:
```bash
npm install lodash
```

Then use it in your code:
```javascript
const _ = require('lodash');

const original = {
  name: "John",
  address: {
    city: "New York",
    state: "NY"
  },
  getDetails: function() {
    return `${this.name} lives in ${this.address.city}, ${this.address.state}`;
  }
};

const deepCopy = _.cloneDeep(original);

// Modifying the nested object in the deep copy
deepCopy.address.city = "Los Angeles";

console.log(original.address.city); // Output: New York (original is not affected)
console.log(deepCopy.address.city); // Output: Los Angeles

// Functions are preserved
console.log(deepCopy.getDetails()); // Output: John lives in Los Angeles, NY
```

### Summary

- **Shallow Copy:** Copies the object's properties but does not create copies of nested objects. Changes to nested objects affect both the original and copied objects.
- **Deep Copy:** Creates a completely independent copy of the original object, including all nested objects. Changes to the copied object do not affect the original.

Choosing between shallow and deep copy depends on your specific use case and the level of independence required between the original and copied objects.