# recursionExersice1
Linear sum for Even Numbers:
## Description:

This project features a JavaScript function called linearSumEvent that calculates the sum of even numbers within a given range using recursion. The function takes an integer number as its parameter and returns the sum of even numbers from 2 up to the given number. Here's how it works:

1-The function checks if number is equal to 0. If it is, it returns 0, effectively terminating the recursion. This serves as the base case for stopping the recursion.

2- If number is not 0, the function checks if number is equal to 2 * number + 1. This condition is unusual because it will generally not be true. It seems like an error in your code.

3- If the condition in step 2 is not met, the function returns number + linearSumEvent(number - 1). This recursive call decrements the number by 1 and adds the current number to the sum of even numbers in the range below it.

4- The process continues until the base case is reached, and the recursion unwinds, summing the even numbers along the way.


<img width="368" alt="linearSumEvenChart" src="https://github.com/AtefehHosseini/recursionExersice1/assets/116660739/fa20113e-077b-4e11-a7b6-3d1df4f3080c">

