## Java Syntax & Operators

```java
public class Main
{
	public static void main(String[] args) {
	    System.out.println("Hello World"); // Print
	}
}
```

```java
System.out.println() // nextline print in new line
System.out.print() // netline print in same line

int a; // variable declaration
int a = 10; // variable declaration and value assigned
a = 20; // reassigned or update

```

### Data Types
- **int (Integer)** - use for rounded numbers like 1, 6, 8, 15, 989
- **float** - use for floating numbers like 1, 5.2, 98, 875.25
- **double** - use for large numbers like 1, 50.2, 9865789874
---
- **char (Character)** - use for single characters like 'f', '0', '2', '5'
- **String** - used for store the word like "Hello", "World", "12"
---
- **bool (Boolean)** - used to store a true and false value

### Type of Operators
---
1. Arithmetic Operators
   - These operators are used to perform arithmetic/mathematical operations on operands. Examples: (+, -, \*, /, %)
   
2. Increment Operators
   - This operator is used to perform increments by one (++)
   - post-increment (v++)
   - pre-increment (++v)

3. Decrement Operators
   - This operator is used to perform decrement by one (--)
   - post decrement (v--)
   - pre decrement (--v)

4. Relational Operators
   - These are used for the comparison of the values of two operands. For example, checking if one operand is equal to the other operand or not, whether an operand is greater than the other operand or not, etc. Some of the relational operators are (==, >, <, >= , <=, != ) and those relational operators return either true or false

5. Logical Operators - Logical Operators are used to combine two or more conditions/constraints or to complement the evaluation of the original condition in consideration. The result of the operation of a logical operator is a Boolean value either true or false.

   - AND (&&)
     |Value 1| Value 2 | Answer |
     |--|--|--|
     | 0 |0 |0 |
     | 0 |1 |0 |
     | 1 |0 |0 |
     | 1 |1 |1 |
   - OR (||)
     |Value 1| Value 2 | Answer |
     |--|--|--|
     | 0 |0 |0 |
     | 0 |1 |1 |
     | 1 |0 |1 |
     | 1 |1 |1 |
   - Not (!)
     |Value 1| Answer |
     |--|--|
     | 0 | 1 |
     | 1 |0 |

6. Bitwise Operators (Not requirement)
   - The Bitwise operators are used to perform bit-level operations on the operands. The operators are first converted to bit-level and then the calculation is performed on the operands. Mathematical operations such as addition, subtraction, multiplication, etc. can be performed at the bit level for faster processing.
   - AND (&)
   - OR (|)
   - Right shift (>>)
   - Left shift (<<)
   - Not(~)
   - XOR(^)

7. Assignment Operators
   - Assignment operators are used to assign value to a variable. The left side operand of the assignment operator is a variable and the right side operand of the assignment operator is a value. The value on the right side must be of the same data type as the variable on the left side otherwise the compiler will raise an error.
   - Example (=, +=, -=, \*=, /=, %=)
