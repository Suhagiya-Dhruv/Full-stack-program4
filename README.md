# CSS Units and Layout Explanation

## HTML Structure

The HTML structure is straightforward, containing a `<div>` element with the class `parent` that holds two child `<div>` elements with classes `child1` and `child2`.

### HTML

```html
<html>

<head>
  <title>Units</title>
  <style>
    /* CSS styles go here */
  </style>
</head>

<body>
  <div class="parent">
    <div class="child1">Rohan</div>
    <div class="child2">Manoj</div>
  </div>
</body>

</html>
```

## CSS Explanation

### Setting Base Font Size

```css
html {
  font-size: 40px;
}
```

- This sets the base font size for the entire document to 40 pixels.

### Units in CSS

CSS supports various units to define sizes. Here are some of the key units:

1. **Absolute Units:**
   - `px`: Pixels (e.g., `50px`)
   - `in`: Inches (e.g., `1in`)
   - `cm`: Centimeters (e.g., `2cm`)
   - `mm`: Millimeters (e.g., `5mm`)
   - `pt`: Points (1/72 of an inch, e.g., `12pt`)
   - `pc`: Picas (1/6 of an inch, e.g., `1pc`)

2. **Relative Units:**
   - `%`: Percentage relative to the parent element (e.g., `50%`)
   - `em`: Relative to the font size of the element (e.g., `2em`)
   - `rem`: Relative to the font size of the root element (e.g., `1rem`)
   - `vw`: Viewport width (1% of the viewport’s width, e.g., `50vw`)
   - `vh`: Viewport height (1% of the viewport’s height, e.g., `50vh`)

### Applying Units in CSS

#### Class `.unit` with Different Units

```css
.unit {
  /* font-size: 50px; */
  /* font-size: 1in; */
  /* font-size: 2cm; */
  /* font-size: 5mm; */
  /* width: 250px;
  height: 500px; */
  /* width: 50vw;
  height: 50vh; */
  /* background-color: lightcoral;
  width: 10rem;
  height: 10rem; */
}
```

- This class demonstrates various units that can be applied to the font size and dimensions of an element.

### Layout with Viewport and Percentage Units

#### Parent and Child Elements

```css
.parent {
  width: 90vw;
  height: 300px;
  background-color: lightcoral;
}

.child1 {
  width: 75%;
  background-color: lightgreen;
}

.child2 {
  width: 50%;
  background-color: lightskyblue;
}
```

- **`.parent`**: 
  - `width: 90vw`: The width is set to 90% of the viewport width.
  - `height: 300px`: The height is fixed at 300 pixels.
  - `background-color: lightcoral`: Background color is light coral.

- **`.child1`**:
  - `width: 75%`: The width is set to 75% of the parent element's width.
  - `background-color: lightgreen`: Background color is light green.

- **`.child2`**:
  - `width: 50%`: The width is set to 50% of the parent element's width.
  - `background-color: lightskyblue`: Background color is light sky blue.
