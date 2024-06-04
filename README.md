### Detailed Explanation of CSS Positioning

CSS positioning is a powerful tool that allows you to control the layout of elements on a web page. There are several positioning methods in CSS: `static`, `relative`, `absolute`, `fixed`, and `sticky`. Here's a detailed explanation of each one used in your code:

#### 1. Static Positioning
Static positioning is the default positioning for all elements in HTML. When an element is positioned statically, it is placed in the normal document flow, and properties like `top`, `right`, `bottom`, and `left` do not apply.

```css
.div {
  position: static;
}
```
- **Behavior**: The element is placed in the normal flow of the document.

#### 2. Relative Positioning
Relative positioning allows you to position an element relative to its original position in the document flow.

```css
.div2 {
  position: relative;
  left: 50px;
}
```
- **Behavior**: The element is moved 50px to the right from its original position, but it still occupies its original space in the document flow.

#### 3. Absolute Positioning
Absolute positioning allows you to place an element at a specific position relative to its nearest positioned ancestor (an ancestor with `position: relative`, `absolute`, `fixed`, or `sticky`). If no such ancestor exists, the element is positioned relative to the initial containing block (usually the `<html>` element).

```css
.child {
  position: absolute;
  top: -55px;
  left: -45px;
}
```
- **Behavior**: The element is positioned 55px above and 45px to the left of its nearest positioned ancestor. It is removed from the normal document flow and does not affect the position of other elements.

#### 4. Fixed Positioning
Fixed positioning is similar to absolute positioning, but the element is positioned relative to the viewport, not the containing block. It remains in the same position even when the page is scrolled.

```css
.fixed-element {
  position: fixed;
  top: 10px;
  right: 10px;
}
```
- **Behavior**: The element is positioned 10px from the top and right edges of the viewport and stays fixed in that position regardless of scrolling.

#### 5. Sticky Positioning
Sticky positioning is a hybrid between relative and fixed positioning. An element with `position: sticky` toggles between `relative` and `fixed` positioning depending on the user's scroll position.

```css
.sticky-element {
  position: sticky;
  top: 0;
}
```
- **Behavior**: The element is positioned relatively until it reaches the top of the viewport, at which point it sticks to the top.