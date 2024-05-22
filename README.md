# HTML Document Explanation

This document demonstrates the use of various HTML list tags and a table with different attributes. Here is a breakdown of the content and structure:

## Lists

### Ordered List (`<ol>`)

An ordered list is used to create a list of items with a specific order. The `<ol>` tag defines the ordered list, and each list item is defined by the `<li>` tag. The `type` attribute specifies the kind of marker to use (in this case, numbers), and the `start` attribute specifies the starting number for the list.

```html
<ol type="1" start="1">
    <li>Hello</li>
    <li>Hello</li>
    <li>Hello</li>
    <li>Hello</li>
    <li>Hello</li>
</ol>
```

### Unordered List (`<ul>`)

An unordered list is used to create a list of items without a specific order. The `<ul>` tag defines the unordered list, and each list item is defined by the `<li>` tag. The `type` attribute specifies the type of bullet to use (in this case, a disc).

```html
<ul type="disc">
    <li>Hello</li>
    <li>Hello</li>
    <li>Hello</li>
    <li>Hello</li>
    <li>Hello</li>
</ul>
```

### Description List (`<dl>`)

A description list is used to define a list of terms and their descriptions. The `<dl>` tag defines the description list, the `<dt>` tag defines the term, and the `<dd>` tag defines the description.

```html
<dl>
    <dt>title</dt>
    <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quisquam!</dd>
    <dt>title2</dt>
    <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi, nesciunt ratione aliquid inventore, error officia fugit, nobis quod mollitia esse? Hic dolore laborum facere. Fuga quidem fugit, ipsum voluptatibus ipsam voluptas cum molestiae quasi amet consectetur quae est mollitia inventore eius ducimus quos sed id accusantium cumque alias laboriosam!</dd>
</dl>
```

### Miscellaneous List Item

There is a standalone list item `<li>` that is not part of any list. This is not standard practice and should be within either `<ol>`, `<ul>`, or `<dl>` tags.

```html
<li>sfsd</li>
```

## Horizontal Rule

The `<hr>` tag is used to create a horizontal rule or line, which can be used to separate content.

```html
<hr />
```

## Table

The table demonstrates the use of several attributes such as `border`, `cellpadding`, and `cellspacing`. It also includes examples of using `colspan` to merge columns and `rowspan` to merge rows.

```html
<table border="1" cellpadding="5" cellspacing="5">
    <tr>
        <td colspan="6">Time Table</td>
    </tr>
    <tr>
        <td rowspan="6">Hours</td>
        <td>Mon</td>
        <td>Tus</td>
        <td>Wed</td>
        <td>Thu</td>
        <td>Sat</td>
    </tr>
    <tr>
        <td>Subject</td>
        <td>Subject</td>
        <td>Subject</td>
        <td>Subject</td>
        <td>Subject</td>
    </tr>
    <tr>
        <td>Subject</td>
        <td>Subject</td>
        <td>Subject</td>
        <td>Subject</td>
        <td>Subject</td>
    </tr>
    <tr>
        <td colspan="5">Lunch</td>
    </tr>
    <tr>
        <td>Subject</td>
        <td>Subject</td>
        <td>Subject</td>
        <td rowspan="2" colspan="2">Project</td>
    </tr>
    <tr>
        <td>Subject</td>
        <td>Subject</td>
        <td>Subject</td>
    </tr>
</table>
```

## Images

Two images are included in the document. The first image is linked from an external URL, while the second image is sourced locally.

```html
<img src="https://miro.medium.com/v2/resize:fit:489/1*xdegLAa2CZ2QTEboPYFPlw.png" alt="image text"/>
<img src="./image/download.jpeg" alt="image text"/>
```
