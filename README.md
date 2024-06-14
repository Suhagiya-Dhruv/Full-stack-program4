### CSS Grid Layout: Concepts and Explanation

#### 1. **Grid Container and Grid Items**
   - **Grid Container**: The parent element with `display: grid` or `display: inline-grid`.
   - **Grid Items**: The direct children of the grid container.

#### 2. **Defining the Grid**
   - **`grid-template-columns` and `grid-template-rows`**: Define the columns and rows of the grid.
     ```css
     .container {
       display: grid;
       grid-template-columns: 1fr 2fr 1fr;
       grid-template-rows: auto 100px;
     }
     ```

#### 3. **Grid Gaps**
   - **`grid-gap`, `row-gap`, and `column-gap`**: Control the spacing between grid items.
     ```css
     .container {
       grid-gap: 10px;
     }
     ```

#### 4. **Grid Auto Placement**
   - **`grid-auto-rows` and `grid-auto-columns`**: Define the size of implicit rows and columns.
     ```css
     .container {
       grid-auto-rows: minmax(100px, auto);
     }
     ```

#### 5. **Alignment**
   - **Align Items Horizontally and Vertically**: `justify-items`, `align-items`, `justify-content`, and `align-content`.
     ```css
     .container {
       justify-items: center; /* Aligns items horizontally */
       align-items: center;   /* Aligns items vertically */
     }
     ```

### References
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [MDN Web Docs on CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/)