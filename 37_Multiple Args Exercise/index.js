/** Multiple Args Exercise
In some dice games like Craps, a roll of two 1's is called "Snake Eyes".  It's generally not a good roll.  Please write a function called isSnakeEyes, which accepts two numbers as inputs, representing two dice.  If the two numbers are both 1's, please print "Snake Eyes!" otherwise print "Not Snake Eyes!"

isSnakeEyes(1,1) //Snake Eyes!
isSnakeEyes(1,5) //Not Snake Eyes!
isSnakeEyes(4,5) //Not Snake Eyes!*/

function isSnakeEyes(num1, num2) {
    if (num1 + num2 === 2)
        console.log('Snake Eyes!')

    else console.log('Not Snake Eyes!')
}