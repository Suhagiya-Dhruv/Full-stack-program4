# CSS Display Property and Font Awesome Icons

## HTML and CSS Breakdown

### HTML Structure

The HTML structure contains:
- A `<head>` section for metadata and linking external stylesheets.
- A `<body>` section with various HTML elements styled using CSS.

### CSS (Cascading Style Sheets)

CSS is used to style the HTML elements. The `display` property is crucial for controlling how an element is presented in the document flow.

#### Universal Selector

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

- The universal selector `*` targets all elements.
- `margin: 0` and `padding: 0` remove default spacing.
- `box-sizing: border-box` includes padding and border in the element's total width and height.

#### Display Property

The `display` property determines how an element is displayed on the page.

- `inline`: The element does not start on a new line and only takes up as much width as necessary.
- `block`: The element starts on a new line and takes up the full width available.
- `inline-block`: The element is formatted like an inline element but can have a width and height.

##### Example with `inline-block`

```css
h1 {
  display: inline-block;
  background-color: red;
  height: 100px;
  width: 200px;
}

.div {
  display: inline-block;
  width: 100px;
  height: 200px;
  background-color: blue;
  margin: 0 10px;
}
```

- The `h1` element and `.div` class are set to `inline-block`, allowing them to sit side-by-side while retaining block-level characteristics like width and height.

#### Font Awesome Integration

Font Awesome provides scalable vector icons that can be customized with CSS.

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
```

- The link tag imports the Font Awesome library.

##### Using Font Awesome Icons

```html
<i class="fa-solid fa-plane color"></i>
```

- `<i class="fa-solid fa-plane color"></i>` adds an airplane icon.
- The `fa-solid` and `fa-plane` classes are from Font Awesome.
- The `color` class is a custom class defined in CSS.

```css
.color {
  color: red;
  font-size: 50px;
}
```

- The `color` class sets the icon's color to red and font size to 50px