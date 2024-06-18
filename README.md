#### 1. **Basic If-Else Structure**

An `if-else` statement evaluates a condition inside the parentheses. If the condition is `true`, the block of code within the `if` statement is executed. If the condition is `false`, the block of code within the `else` statement is executed (if present).

```java
if (condition) {
    // Executes when the condition is true
} else {
    // Executes when the condition is false
}
```

##### **Example**

```java
int a = 10;
int b = 20;

if (a > b) {
    System.out.println("a is greater than b");
} else {
    System.out.println("a is less than or equal to b");
}
```

In this example, since `a` (10) is not greater than `b` (20), the output will be "a is less than or equal to b".

#### 2. **If-Else-If Ladder**

The `if-else-if` ladder is used to check multiple conditions sequentially. It allows you to execute different blocks of code based on which condition is true first.

```java
if (condition1) {
    // Executes when condition1 is true
} else if (condition2) {
    // Executes when condition2 is true
} else {
    // Executes when none of the conditions are true
}
```

##### **Example**

```java
int a = 10;
int b = 20;

if (a > b) {
    System.out.println("a is greater than b");
} else if (a < b) {
    System.out.println("a is less than b");
} else {
    System.out.println("a is equal to b");
}
```

Here, since `a` (10) is less than `b` (20), the output will be "a is less than b".

#### 3. **Nested If-Else**

Nested `if-else` statements are used when you need to make further decisions inside another `if` or `else` block. This helps in handling more complex conditions.

```java
if (condition1) {
    if (condition2) {
        // Executes when both condition1 and condition2 are true
    } else {
        // Executes when condition1 is true but condition2 is false
    }
} else {
    if (condition3) {
        // Executes when condition1 is false and condition3 is true
    } else {
        // Executes when both condition1 and condition3 are false
    }
}
```

##### **Example**

```java
int a = 100;
int b = 200;
int c = 150;

if (a > b) {
    if (a > c) {
        System.out.println("a is the greatest");
    } else {
        System.out.println("c is the greatest");
    }
} else {
    if (b > c) {
        System.out.println("b is the greatest");
    } else {
        System.out.println("c is the greatest");
    }
}
```

In this case, since `b` (200) is greater than both `a` (100) and `c` (150), the output will be "b is the greatest".

### Summary

- **If-Else Statements**: Evaluate a condition and execute code blocks based on whether the condition is true or false.
- **If-Else-If Ladder**: Allows for checking multiple conditions in sequence, executing the corresponding block of code for the first true condition.
- **Nested If-Else**: Enables more complex decision-making by nesting `if-else` statements inside each other.
