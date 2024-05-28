# CSS Selectors

### Child Selector (`>`)

The child selector selects all direct children of a specified element.

```css
.p1 > .p2 {
  color: red;
}
```

- This rule selects all elements with the class `p2` that are direct children of an element with the class `p1` and sets their text color to red.

### Adjacent Sibling Selector (`+`)

The adjacent sibling selector selects the next sibling element immediately following the specified element.

```css
div + p {
  color: red;
}
```

- This rule selects the first `<p>` element that is immediately preceded by a `<div>` and sets its text color to red.

### General Sibling Selector (`~`)

The general sibling selector selects all siblings of the specified element that follow it.

```css
div ~ p {
  color: red;
}
```

- This rule selects all `<p>` elements that are siblings of a `<div>` and sets their text color to red.

### Pseudo-classes (`:link`, `:visited`, `:hover`, `:active`)

The hover selector applies styles when the user hovers over an element.

```css
.hello:hover {
  color: blue;
  font-size: 24px;
}
```

These selectors style links based on their state.

```css
a:link {
  color: red;
}

a:visited {
  color: green;
}
```

- `a:link` styles unvisited links with red color.
- `a:visited` styles visited links with green color.

The active selector applies styles when an element is being activated, such as when a button is being clicked.

```css
button:active {
  color: red;
}
```

- This rule changes the text color to red when the button is being clicked.


### Pseudo-elements (`::first-line`, `::first-letter`, `::before`, `::after`)

Pseudo-elements style specific parts of an element.

```css
p::first-line {
  color: red;
}

p::first-letter {
  font-size: 32px;
}
```

- `p::first-line` styles the first line of a paragraph with red color.
- `p::first-letter` styles the first letter of a paragraph with a font size of 32px.


These pseudo-elements are used to insert content before or after an element's content.

```css
span::before {
  content: "123";
}

span::after {
  content: "456";
}
```

- `span::before` inserts "123" before the content of the `<span>` element.
- `span::after` inserts "456" after the content of the `<span>` element.
