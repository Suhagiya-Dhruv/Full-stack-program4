### Time Complexity Examples with For Loops

Here are different time complexities illustrated using the conditions of `for` loops in Java:

#### 1. **O(1) - Constant Time Complexity**

In this example, the loop runs a fixed number of times, irrespective of the input size.

```java
for (int i = 0; i < 10; i++) {
    // Loop body executes 10 times, constant time
}
```

#### 2. **O(log n) - Logarithmic Time Complexity**

Here, the loop condition reduces the problem size by half at each iteration.

```java
for (int i = 1; i < n; i = i * 2) {
    // Loop body executes log(n) times
}
```

#### 3. **O(n) - Linear Time Complexity**

In this loop, the number of iterations is directly proportional to the input size.

```java
for (int i = 0; i < n; i++) {
    // Loop body executes n times
}
```

#### 4. **O(n log n) - Log-Linear Time Complexity**

This complexity often arises from nested loops where the outer loop runs `n` times and the inner loop runs `log n` times.

```java
for (int i = 0; i < n; i++) {
    for (int j = 1; j < n; j = j * 2) {
        // Outer loop executes n times
        // Inner loop executes log(n) times
    }
}
```

#### 5. **O(n^2) - Quadratic Time Complexity**

This complexity is seen in nested loops where both loops iterate `n` times.

```java
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        // Loop body executes n * n = n^2 times
    }
}
```

#### 6. **O(n!) - Factorial Time Complexity**

This complexity can arise in loops involving permutations where the number of iterations grows factorially with the input size.

```java
// Example to demonstrate factorial complexity is complex and involves recursion or combinatorial generation
// Here is an abstract loop to illustrate the factorial complexity

for (int i = 0; i < factorial(n); i++) {
    // Loop body executes n! times
}
```


### 7. **O(n^3) - Cubic Time Complexity**

This complexity arises in triple nested loops where each loop iterates `n` times.

```java
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        for (int k = 0; k < n; k++) {
            // Loop body executes n * n * n = n^3 times
        }
    }
}
```

### 8. **O(2^n) - Exponential Time Complexity**

Exponential time complexity can arise in loops where the number of iterations doubles with each increment.

```java
// Example to demonstrate exponential complexity usually involves recursion
// Here is an abstract loop to illustrate exponential complexity

for (int i = 0; i < Math.pow(2, n); i++) {
    // Loop body executes 2^n times
}
```

### 9. **O(sqrt(n)) - Square Root Time Complexity**

This complexity can occur in loops that iterate up to the square root of `n`.

```java
for (int i = 0; i * i < n; i++) {
    // Loop body executes sqrt(n) times
}
```

### 10. **O(log(log(n))) - Double Logarithmic Time Complexity**

This complexity can arise in scenarios where the number of iterations is a logarithm of a logarithm of the input size.

```java
for (int i = 2; i < n; i = Math.pow(i, 2)) {
    // Loop body executes log(log(n)) times
}
```

### 11. **O(n * log(n)) - Linearithmic Time Complexity**

This is common in algorithms like merge sort or heap sort, where the outer loop runs `n` times and the inner loop runs `log(n)` times.

```java
for (int i = 0; i < n; i++) {
    for (int j = i; j > 0; j = j / 2) {
        // Outer loop executes n times
        // Inner loop executes log(n) times
    }
}
```

Certainly! Here is the order of time complexities from lowest to highest:

**O(1)** < **O(log(log(n)))** < **O(log(n))** < **O(sqrt(n))** < **O(n)** < **O(n * log(n))** < **O(n^2)** < **O(n^3)** < **O(2^n)** < **O(n!)**