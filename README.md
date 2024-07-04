# Array Methods in JavaScript

## Basic Methods

### `push`
- **Description:** Adds one or more elements to the end of an array.
- **Mutability:** Mutates the original array.

### `pop`
- **Description:** Removes the last element from an array and returns that element.
- **Mutability:** Mutates the original array.

### `shift`
- **Description:** Removes the first element from an array and returns that element.
- **Mutability:** Mutates the original array.

### `unshift`
- **Description:** Adds one or more elements to the beginning of an array.
- **Mutability:** Mutates the original array.

### `join`
- **Description:** Joins all elements of an array into a string.
- **Mutability:** Does not mutate the original array.

### `concat`
- **Description:** Merges two or more arrays.
- **Mutability:** Does not mutate the original array.

## Methods that Return a New Array

### `slice`
- **Description:** Returns a shallow copy of a portion of an array into a new array object.
- **Mutability:** Does not mutate the original array.

### `splice`
- **Description:** Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
- **Mutability:** Mutates the original array.

### `map`
- **Description:** Creates a new array populated with the results of calling a provided function on every element in the calling array.
- **Mutability:** Does not mutate the original array.

### `filter`
- **Description:** Creates a new array with all elements that pass the test implemented by the provided function.
- **Mutability:** Does not mutate the original array.

### `reduce`
- **Description:** Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
- **Mutability:** Does not mutate the original array.

## Examples of Array Methods

### `push`
```javascript
const a = [1, 2, 3];
a.push(4); // a is now [1, 2, 3, 4]
```

### `pop`
```javascript
const a = [1, 2, 3];
const last = a.pop(); // last is 3, a is now [1, 2]
```

### `shift`
```javascript
const a = [1, 2, 3];
const first = a.shift(); // first is 1, a is now [2, 3]
```

### `unshift`
```javascript
const a = [1, 2, 3];
a.unshift(0); // a is now [0, 1, 2, 3]
```

### `join`
```javascript
const a = [1, 2, 3];
const str = a.join('-'); // str is "1-2-3"
```

### `concat`
```javascript
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = a.concat(b); // c is [1, 2, 3, 4, 5, 6]
```

### `slice`
```javascript
const a = [1, 2, 3, 4, 5];
const b = a.slice(1, 3); // b is [2, 3]
```

### `splice`
```javascript
const a = [1, 2, 3, 4, 5];
const removed = a.splice(2, 2); // removed is [3, 4], a is now [1, 2, 5]
```

### `map`
```javascript
const a = [1, 2, 3];
const b = a.map(x => x * x); // b is [1, 4, 9]
```

### `filter`
```javascript
const a = [1, 2, 3, 4, 5];
const b = a.filter(x => x % 2 === 0); // b is [2, 4]
```

### `reduce`
```javascript
const a = [1, 2, 3, 4, 5];
const sum = a.reduce((acc, curr) => acc + curr, 0); // sum is 15
```
