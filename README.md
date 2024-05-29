# CSS Box Model

The CSS Box Model is a fundamental concept in web development that describes the structure of elements on a webpage. Every element is represented as a rectangular box, which consists of the following areas:

1. **Content**: The innermost part, where the text and images appear.
2. **Padding**: Clears an area around the content. The padding is transparent.
3. **Border**: A border that surrounds the padding (if any) and content.
4. **Margin**: Clears an area outside the border. The margin is also transparent.

## CSS Box Model Properties

### Universal Selector

The universal selector `*` applies styles to all elements on the page.

```css
* {
  margin: 0;
  padding: 0;
}
```

- This resets the default margin and padding for all elements.

### Styling the `div` Element

The following properties demonstrate various aspects of the CSS Box Model applied to `div` elements.

#### Font Size

```css
div {
  font-size: 24px;
}
```

- Sets the font size of the text inside the `div` to 24 pixels.

#### Border

Borders can have various styles, widths, and colors.

```css
div {
  border: 1px solid #5501FC;
}
```

- `border`: Sets a 1-pixel wide solid border with the color `#5501FC`.

Other possible border styles include:
- `solid`
- `double`
- `dashed`
- `dotted`
- `groove`
- `ridge`
- `inset`
- `outset`

#### Padding

Padding creates space inside the element, between the content and the border.

```css
/* padding-top: 10px;
padding-bottom: 20px;
padding-right: 50px;
padding-left: 20px; */

/* padding: 10px 50px 10px 20px; */
/* padding: 10px 10px 20px; */
/* padding: 10px 50px */
```

- Individual sides: `padding-top`, `padding-right`, `padding-bottom`, `padding-left`.
- Shorthand:
  - `padding: 10px 50px 10px 20px;` (top, right, bottom, left)
  - `padding: 10px 10px 20px;` (top, right & left, bottom)
  - `padding: 10px 50px;` (top & bottom, right & left)

#### Margin

Margin creates space outside the element, between the border and the surrounding elements.

```css
/* margin-top: 10px;
margin-bottom: 20px;
margin-right: 50px;
margin-left: 20px; */

/* margin: 10px 50px 10px 20px; */
/* margin: 10px 10px 20px; */
/* margin: 10px 50px */
```

- Individual sides: `margin-top`, `margin-right`, `margin-bottom`, `margin-left`.
- Shorthand:
  - `margin: 10px 50px 10px 20px;` (top, right, bottom, left)
  - `margin: 10px 10px 20px;` (top, right & left, bottom)
  - `margin: 10px 50px;` (top & bottom, right & left)

#### Border Radius

The `border-radius` property creates rounded corners.

```css
/* border-radius: 5px 20px 50px 100px; */
```

- This sets the border radius for the top-left, top-right, bottom-right, and bottom-left corners, respectively.

#### Width and Height

```css
div {
  width: 200px;
  height: 200px;
}
```

- Sets the width and height of the `div` to 200 pixels each.

#### Circle Shape

To create a circle, set equal width and height, and a `border-radius` of 50%.

```css
div {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
```

For more detailed information, you can refer to the [MDN Web Docs on Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model).