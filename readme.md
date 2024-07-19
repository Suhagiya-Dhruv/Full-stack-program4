## DOM Manipulation in JavaScript

### Introduction

DOM (Document Object Model) manipulation in JavaScript allows developers to interact with HTML and XML documents dynamically. It involves accessing, modifying, adding, and deleting elements and content within a web page.

### Selecting Elements

#### By ID

To select an element by its unique ID attribute, use `getElementById`:
```javascript
const element = document.getElementById('uniqueId');
console.log(element.innerText); // Retrieves text content
```

#### By Class Name

To select elements by their class name, use `getElementsByClassName`:
```javascript
const elements = document.getElementsByClassName('className');
console.log(elements); // Returns a collection of elements
```

#### By Tag Name

To select elements by their tag name, use `getElementsByTagName`:
```javascript
const elements = document.getElementsByTagName('tag');
console.log(elements); // Returns a collection of elements
```

#### Using Query Selector

To select elements using CSS selectors, use `querySelector` for selecting the first matching element or `querySelectorAll` for selecting all matching elements:
```javascript
const element = document.querySelector('selector');
console.log(element); // Returns the first matching element

const elements = document.querySelectorAll('selector');
console.log(elements); // Returns all matching elements as a NodeList
```

### HTMLCollection vs NodeList

When working with the DOM in JavaScript, you often need to select and manipulate multiple elements at once. Two common types of collections returned by DOM methods are `HTMLCollection` and `NodeList`. While they may seem similar, they have distinct differences and use cases. Here's a comparison to help you understand them better:

#### HTMLCollection

An `HTMLCollection` is a collection of HTML elements. It is a live collection, meaning it automatically updates when the document structure changes.

**Methods that return HTMLCollection:**
- `document.getElementsByTagName()`
- `document.getElementsByClassName()`
- `document.forms`
- `document.images`

**Characteristics of HTMLCollection:**
- **Live Collection**: Automatically updates when the document changes. For example, if you add or remove elements that match the selection criteria, the `HTMLCollection` will reflect those changes.
- **Only Elements**: Contains only HTML elements, no text nodes or other types of nodes.
- **Access**: Can be accessed using an index (like an array) or by element name (if elements have a `name` attribute).

**Example:**
```javascript
// Select all elements with the class 'box'
const elements = document.getElementsByClassName('box');
console.log(elements); // HTMLCollection
```

#### NodeList

A `NodeList` is a collection of nodes. It can be live or static, depending on the method used to obtain it.

**Methods that return NodeList:**
- `document.querySelectorAll()`
- `document.childNodes`

**Characteristics of NodeList:**
- **Live or Static**: `NodeList` can be live (e.g., `Node.childNodes`) or static (e.g., `document.querySelectorAll()`). A static `NodeList` does not update automatically when the document changes.
- **All Nodes**: Can contain any type of nodes, including elements, text nodes, and comment nodes.
- **Access**: Can be accessed using an index (like an array). Does not support access by element name.

**Example:**
```javascript
// Select all elements with the class 'box'
const elements = document.querySelectorAll('.box');
console.log(elements); // NodeList
```

#### Key Differences

1. **Type of Collection**:
   - `HTMLCollection`: Contains only HTML elements.
   - `NodeList`: Can contain any type of nodes.

2. **Live vs. Static**:
   - `HTMLCollection`: Always live.
   - `NodeList`: Can be live or static, depending on the method used.

3. **Methods Returning Them**:
   - `HTMLCollection`: Returned by `getElementsByClassName`, `getElementsByTagName`, etc.
   - `NodeList`: Returned by `querySelectorAll`, `childNodes`, etc.

4. **Access by Name**:
   - `HTMLCollection`: Can be accessed by index or name.
   - `NodeList`: Can only be accessed by index.