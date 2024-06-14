## Media Queries

### What are Media Queries?

Media queries are a feature of CSS that allows content rendering to adapt to different conditions such as screen resolution, viewport size, or device orientation. They are essential for responsive web design, enabling web pages to look good on various devices, from desktops to smartphones.

### Syntax

A media query consists of a media type and one or more expressions that check for the conditions of particular media features.

```css
@media media-type (media-feature) {
  /* CSS rules go here */
}
```

### Example

```css
/* Apply styles for screens larger than 600px */
@media screen and (min-width: 600px) {
  body {
    background-color: lightblue;
  }
}

/* Apply styles for screens smaller than 600px */
@media screen and (max-width: 599px) {
  body {
    background-color: lightcoral;
  }
}
```

### Common Media Features

- `width` / `height`: The width and height of the viewport.
- `min-width` / `max-width`: Minimum and maximum width of the viewport.
- `min-height` / `max-height`: Minimum and maximum height of the viewport.
- `orientation`: Orientation of the device (landscape or portrait).
- `resolution`: Resolution of the device.

### Device Size Table

Here's a table of common device sizes in pixels, which can be used with media queries to create responsive designs:

| Device Type           | Device                 | Width (px) |
|-----------------------|------------------------|------------|
| Extra Small Devices   | Mobile Phones (Portrait)| < 576      |
| Small Devices         | Mobile Phones (Landscape) / Small Tablets | 576 - 767 |
| Medium Devices        | Tablets                | 768 - 991  |
| Large Devices         | Desktops               | 992 - 1199 |
| Extra Large Devices   | Large Desktops         | >= 1200    |

### Example Media Queries for Common Devices

```css
/* Extra small devices (phones, less than 576px) */
@media (max-width: 575.98px) {
  body {
    background-color: lightcoral;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
  body {
    background-color: lightblue;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
  body {
    background-color: lightgreen;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
  body {
    background-color: lightgoldenrodyellow;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  body {
    background-color: lightgray;
  }
}
```
