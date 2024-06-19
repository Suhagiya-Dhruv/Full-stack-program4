### Java Control Flow: Loop Statements

Loops are used in Java to execute a block of code repeatedly. Java supports three main types of loops: `while`, `do-while`, and `for`. Here’s a detailed explanation of each with examples from your code:

#### 1. **While Loop**

The `while` loop is used to execute a block of code as long as a specified condition is true. The condition is evaluated before the execution of the loop body.

```java
int b = 1;
while (b < 5) { // condition is checked before executing the loop body
    System.out.println("While Loop");
    b = b + 1;
    System.out.println(b);
}
```

In this example, the loop continues to run as long as `b` is less than 5. Each iteration increments `b` by 1 and prints the value.

#### 2. **Do-While Loop**

The `do-while` loop is similar to the `while` loop, but it guarantees that the loop body is executed at least once. The condition is evaluated after the execution of the loop body.

```java
int a = 5;
do {
    System.out.println(a);
    a = a - 1;
} while (a >= 0);
```

In this example, the loop body executes first, printing the value of `a` and then decrementing it by 1. The condition is checked after the loop body, ensuring the loop runs at least once.

#### 3. **For Loop**

The `for` loop is used for a known number of iterations. It consists of three parts: initialization, condition, and increment/decrement.

```java
for (int a = 1; a < 5; a = a + 3) {
    System.out.println(a);
}
```

In this example:
- **Initialization**: `int a = 1;` (sets the starting value of `a`)
- **Condition**: `a < 5;` (the loop runs as long as this condition is true)
- **Increment/Decrement**: `a = a + 3` (increments `a` by 3 after each iteration)

#### 4. **Using Loops for Specific Tasks**

##### **Reading Input with Scanner and Calculating**

```java
Scanner s = new Scanner(System.in);
int a = s.nextInt();
```

Here, `Scanner` is used to read an integer input from the user and store it in variable `a`.

##### **Printing a Multiplication Table**

```java
for(int i = 1; i <= 10; i++) {
    System.out.println(a + " x " + i + " = " + a * i);
}
```

This loop iterates from 1 to 10 and prints the multiplication table for the input number `a`.

##### **Calculating the Sum of Natural Numbers**

```java
int sum = 0;
for(int i = 1; i <= a; i++) {
    sum = sum + i;
}
System.out.println(sum);
```

This loop calculates the sum of all natural numbers from 1 to `a` and prints the result.

### Summary

- **While Loop**: Executes a block of code as long as the condition is true. The condition is checked before the loop body.
- **Do-While Loop**: Similar to the while loop but guarantees at least one execution of the loop body. The condition is checked after the loop body.
- **For Loop**: Used for a known number of iterations with initialization, condition, and increment/decrement.

Understanding these loops helps in performing repetitive tasks efficiently in Java.