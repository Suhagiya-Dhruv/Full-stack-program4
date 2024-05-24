
# CSS Selectors

## 4. Multi-class Selector

This selector applies styles only to elements that have all the specified classes.

```html
<!-- Example HTML -->
<div class="m1">Don't Select me</div>
<div class="m2">Don't Select me</div>
<div class="m2 m3 m1">Select me</div>

<!-- CSS -->
.m1.m2.m3 {
  color: blue;
}
```

## 5. Universal Selector

The universal selector (*) selects all elements.

```html
<!-- Example HTML -->
<div>Hello</div>
<p>Lorem ipsum dolor sit amet.</p>

<!-- CSS -->
* {
  color: blue;
}
```

## 6. Grouping Selector

Grouping selectors apply the same styles to multiple elements.

```html
<!-- Example HTML -->
<div>block tag</div>
<span>inline tag</span>

<!-- CSS -->
div, span {
  background-color: red;
}
```

## 7. Descendant Combinator

The descendant combinator (space) selects elements that are descendants of another element.

```html
<!-- Example HTML -->
<div class="c1">
  <div>item 1</div>
  <div>item 1</div>
  <div class="c2">item 1</div>
  <div class="c2">item 1</div>
</div>

<!-- CSS -->
.c1 .c2 {
  color: blue;
}
```

## 8. Attribute Selector

Attribute selectors select elements based on an attribute or attribute value.

```html
<!-- Example HTML -->
<input type="text">
<input type="email">

<!-- CSS -->
input[type="email"] {
  color: blue;
}
```

Another example:

```html
<!-- Example HTML -->
<input type="text" value="First Name">
<input type="text" value="Submit">

<!-- CSS -->
[value="Submit"] {
  color: blue;
}
```
