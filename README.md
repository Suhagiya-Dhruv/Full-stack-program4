Sure! Here’s a detailed explanation of the CSS properties and HTML elements used in your code, formatted in Markdown for easy addition to a GitHub repository.

---

# Box Sizing and Overflow

## Introduction

This document explains the CSS `box-sizing` property, overflow properties, and some additional styling techniques demonstrated in the provided HTML and CSS code. Understanding these properties is essential for controlling the layout and appearance of elements on a webpage.

## CSS Box Sizing

The `box-sizing` property defines how the width and height of an element are calculated: whether they include padding and borders or not.

### Example:

```css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
```

- `box-sizing: border-box;`: The width and height properties (and min/max properties) include content, padding, and border but do not include the margin.
- `box-sizing: content-box;`: The default value. The width and height properties include only the content. Padding and border are added outside of the content.

### Usage in Elements:

```css
.div1 {
  box-sizing: content-box;
  width: 200px;
  height: 200px;
  background-color: lightblue;
  padding: 20px;
  border: 10px solid lightblue;
  margin: 10px;
}

.div2 {
  box-sizing: border-box;
  width: 200px;
  height: 200px;
  background-color: lightblue;
  padding: 20px;
  border: 10px solid lightblue;
  margin: 10px;
}
```

- `.div1` uses `content-box`, so the total width and height are increased by the padding and border.
- `.div2` uses `border-box`, so the total width and height include the padding and border.

## Overflow Property

The `overflow` property specifies what happens if content overflows an element's box.

### Example:

```css
.visible {
  overflow: visible; /* default */
}

.hidden {
  overflow: hidden;
}

.scroll {
  overflow: scroll;
}

.auto {
  overflow: auto;
}
```

- `overflow: visible;`: The overflow is not clipped. The content renders outside the element's box.
- `overflow: hidden;`: The overflow is clipped, and the rest of the content will be invisible.
- `overflow: scroll;`: The overflow is clipped, and a scrollbar is added to see the rest of the content.
- `overflow: auto;`: Similar to `scroll`, but scrollbars are added only when necessary.

### Usage in Elements:

```html
<div class="visible">...</div>
<div class="hidden">...</div>
<div class="scroll">...</div>
<div class="auto">...</div>
```

## Custom Scrollbar

You can style the scrollbar using the `::-webkit-scrollbar` pseudo-element.

### Example:

```css
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: transparent;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(169, 167, 167);
  border-radius: 10px;
}
```

- `::-webkit-scrollbar`: Targets the scrollbar.
- `::-webkit-scrollbar-track`: Targets the track of the scrollbar.
- `::-webkit-scrollbar-thumb`: Targets the draggable part of the scrollbar (the thumb).

## Conclusion

This document provides an introduction and explanation of the CSS `box-sizing` property, overflow properties, custom scrollbars, and centering content within a container. Understanding these concepts will help you control the layout and appearance of your web pages effectively.

For more detailed information, you can refer to the [MDN Web Docs on Box Sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) and [CSS Overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow).