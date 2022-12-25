/**Rant Exercise
Define a function called rant which accepts a string argument called message.  The function should print out an uppercased version of message 3 times (with 3 separate calls to console.log).  For example, rant("I hate beets") should print out:

I HATE BEETS
I HATE BEETS
I HATE BEETS */

// DEFINE YOUR FUNCTION:
function rant(message) {   // 3번 console.log 사용하여 출력 
    // console.log(message.toUpperCase());
    // console.log(message.toUpperCase());
    // console.log(message.toUpperCase());

    //반복문 사용하여 출력

    for (var i = 0; i < 3; i++) {

        console.log(message.toUpperCase());
    }
}
rant('I hate beets');

