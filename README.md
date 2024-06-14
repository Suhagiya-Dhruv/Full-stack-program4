# CSS and HTML Concepts

This README provides an overview of some important CSS and HTML concepts, including animations, filters, backdrop filters, aspect-ratio, z-index, background images, linear gradients, and HTML redirects using an `<a>` tag.

## Table of Contents

- [Animations](#animations)
- [Filters](#filters)
- [Backdrop Filters](#backdrop-filters)
- [Aspect-Ratio](#aspect-ratio)
- [Z-Index](#z-index)
- [Background Images](#background-images)
- [Linear Gradients](#linear-gradients)
- [References](#references)

## Animations

CSS animations allow you to animate transitions between different states of an element. An animation is defined using `@keyframes`, and the animation is applied to an element using the `animation` property.

### Example1

```css
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.element {
  animation: slideIn 2s ease-in-out;
}
```

### Example2

```css
@keyframes slideIn {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(0);
  }
  100%{
    transform: translateX(-100%);
  }
}

.element {
  animation: slideIn 2s ease-in-out;
}
```

In this example, the `.element` will slide in from the left over 2 seconds.

## Filters

CSS filters apply graphical effects like blur, brightness, contrast, and more to elements. This is particularly useful for images and backgrounds.

### Example

```css
.element {
  filter: blur(5px) brightness(0.8);
}
```

This will apply a blur and decrease the brightness of the `.element`.

## Backdrop Filters

Backdrop filters apply effects to the area behind an element. This requires the element to have a semi-transparent background or be inside an element with a semi-transparent background.

### Example

```css
.element {
  backdrop-filter: blur(10px) brightness(0.5);
  background-color: rgba(255, 255, 255, 0.5);
}
```

This will blur and dim the background behind the `.element`.

## Aspect-Ratio

The `aspect-ratio` property is used to set a preferred aspect ratio for an element, maintaining the width to height ratio.

### Example

```css
.element {
  aspect-ratio: 16 / 9;
}
```

This sets the aspect ratio of `.element` to 16:9.

## Z-Index

The `z-index` property determines the stacking order of elements. Higher values are placed in front of lower values. It only works on positioned elements (i.e., elements with `position` set to `relative`, `absolute`, `fixed`, or `sticky`).

### Example

```css
.element {
  position: relative;
  z-index: 10;
}
```

This positions the `.element` above other elements with a lower `z-index`.

## Background Images

CSS allows you to set background images for elements, which can be controlled with properties like `background-size`, `background-position`, and `background-repeat`.

### Example

```css
.element {
  background-image: url('image.jpg');
  background-size: cover;
  background-position: center;
}
```

This sets `image.jpg` as the background of `.element`, covering the entire element and centering the image.

## Linear Gradients

Linear gradients create a smooth transition between two or more specified colors. They can be used anywhere you can use an image.

### Example

```css
.element {
  background: linear-gradient(to right, red, yellow);
}
```

## References

- [Website Template](https://templatemo.com/live/templatemo_559_zay_shop)
- [Online Tutorials YouTube Channel](https://www.youtube.com/@OnlineTutorialsYT)
- [Gradient Generator](https://mycolor.space/gradient?ori=circle&hex=%23435B5E&hex2=%23BFA0DC&sub=1)
- [Bootstrap Documentation](https://getbootstrap.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
