# HTML Document Explanation

This document demonstrates the use of CSS (Cascading Style Sheets) with both internal and external styles, along with various HTML elements such as images. Here is a breakdown of the content and structure:

## Head Section

### Title

The `<title>` tag defines the title of the HTML document, which is displayed on the browser tab.

```html
<title>CSS</title>
```

### Internal CSS

Internal CSS is used to apply styles directly within the HTML document. The styles are placed within a `<style>` tag inside the `<head>` section. In this case, the internal CSS changes the color of `<h2>` elements to blue.

```html
<style>
  h2 {
    color: blue;
  }
</style>
```

### External CSS

External CSS is linked to the HTML document using the `<link>` tag. This method allows you to keep your CSS in a separate file, making your HTML cleaner and easier to maintain. The `href` attribute specifies the path to the external CSS file.

```html
<link rel="stylesheet" href="./style.css">
```

## Body Section

### Commented Out Elements

Several HTML elements are commented out in the document. These comments prevent the browser from rendering the elements.

```html
<!-- <button>Submit</button> -->
<!-- <a href="#">Jump to content</a> <br/>
<input type="checkbox"> Main Menu
<div>Main Menu</div>
<button>1</button>
<button>2</button>
<img src="" alt="">
<input type="text">
<ul>
  <li><a href="#">Log in</a></li>
</ul>
<div>Lorem ipsum dolor <a href="#">Log in</a> sit amet.</div>
<div>Lorem ipsum dolor sit amet.</div>
<div>Lorem ipsum dolor sit <b>amet.</b></div>
<figcaption>Lorem ipsum dolor sit amet.</figcaption> -->
<!-- <h1 style="color:red">CSS Learning</h1>
<h2>CSS Learning</h2>
<h3>CSS Learning</h3>
<button>Hello</button> -->
```

### Images

Two images are included in the document. The first image is linked from an external URL, while the second image is sourced locally.

#### External Image

The `src` attribute specifies the URL of the image, and the `alt` attribute provides alternative text for the image.

```html
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/United_States_Antarctic_Program_website_from_2018_02_22.png/360px-United_States_Antarctic_Program_website_from_2018_02_22.png" alt="image path" />
```

#### Local Image

The `src` attribute specifies the relative path to the local image file, and the `alt` attribute provides alternative text for the image.

```html
<img src="./image/img.png" alt="" />
```

### Additional Links

```html
<!-- https://en.wikipedia.org/wiki/Website#bodyContent -->
<!-- https://chromewebstore.google.com/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm -->
```

### Notes

- Ensure the local image path (`./image/img.png`) is correct relative to the HTML file location.
- Internal and external CSS should be used effectively to manage styles.
- Commented-out elements can be uncommented if needed for testing or future use.
