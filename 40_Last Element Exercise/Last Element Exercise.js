/**Last Element Exercise
Please write a function called lastElement which accepts a single array argument.  The function should return the last element of the array (without removing the element).  If the array is empty, the function should return null.

lastElement([3,5,7]) //7
lastElement([1]) //1
lastElement([]) //null */

function lastElement(a) {

    if (a.length === 0) {
        return null
    } else {
        return a[a.length - 1];
    }

}



