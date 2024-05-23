## CSS Selector

CSS selectors are patterns used to select and style HTML elements. They allow you to target specific elements or groups of elements in your HTML document. Here are three commonly used CSS selectors:

### 1. Element Selector

The element selector targets HTML elements based on their tag name. It applies styles to all elements of that type within the document.

Example:
```css
p {
    color: blue;
}
```
This will make all `<p>` elements blue.

### 2. Class Selector (.)

The class selector targets HTML elements with a specific class attribute. It allows you to apply styles to multiple elements that share the same class.

Example:
```css
.myClass {
    font-size: 18px;
    color: red;
}
```
This will apply the specified styles to all elements with `class="myClass"`.

### 3. ID Selector (#)

The ID selector targets a single HTML element based on its unique ID attribute. It is used when you want to style a particular element uniquely.

Example:
```css
#myId {
    background-color: yellow;
}
```
This will apply the specified styles to the element with `id="myId"`.
