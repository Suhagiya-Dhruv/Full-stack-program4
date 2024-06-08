### Flexbox Model in CSS

The Flexbox Layout (Flexible Box) module in CSS is designed to provide a more efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown or dynamic. This makes it easier to design flexible and responsive layout structures without using floats or positioning.

#### Key Concepts of Flexbox

1. **Flex Container**: The parent element where the `display: flex;` is applied.
2. **Flex Items**: The children of the flex container.

### Flex Container Properties

1. **display**: Defines a flex container; inline or block depending on the given value.
   ```css
   .container {
     display: flex;
   }
   ```

2. **flex-direction**: Defines the direction of the flex container's main axis.
   ```css
   .container {
     flex-direction: row; /* row-reverse, column, column-reverse */
   }
   ```

3. **flex-wrap**: Controls whether the flex items should wrap or not.
   ```css
   .container {
     flex-wrap: nowrap; /* wrap, wrap-reverse */
   }
   ```

4. **justify-content**: Aligns flex items along the main axis.
   ```css
   .container {
     justify-content: flex-start; /* flex-start, center, flex-end, space-between, space-around, space-evenly */
   }
   ```

5. **align-items**: Aligns flex items along the cross axis.
   ```css
   .container {
     align-items: stretch; /* flex-start, center, flex-end, baseline */
   }
   ```

6. **align-content**: Aligns flex lines (if there's space) when there's extra space in the cross-axis.
   ```css
   .container {
     align-content: stretch; /* flex-start, center, flex-end, space-between, space-around */
   }
   ```

### Flex Item Properties

1. **order**: Controls the order of the flex items.
   ```css
   .item {
     order: 0; /* any integer value */
   }
   ```

2. **flex-grow**: Defines the ability for a flex item to grow if necessary.
   ```css
   .item {
     flex-grow: 0; /* default 0, can be any positive number */
   }
   ```

3. **flex-shrink**: Defines the ability for a flex item to shrink if necessary.
   ```css
   .item {
     flex-shrink: 1; /* default 1, can be any positive number */
   }
   ```

4. **flex-basis**: Defines the default size of an element before the remaining space is distributed.
   ```css
   .item {
     flex-basis: auto; /* can be any length unit */
   }
   ```

5. **align-self**: Allows the default alignment (or the one specified by `align-items`) to be overridden for individual flex items.
   ```css
   .item {
     align-self: auto; /* flex-start, center, flex-end, stretch, baseline */
   }
   ```


### Useful Resources
- [CSS Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Interactive Flexbox Guide](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)
- [Flexbox Froggy Game](https://flexboxfroggy.com/)
