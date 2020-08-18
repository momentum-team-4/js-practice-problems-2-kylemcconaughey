// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.

function remove(ar, p) {
    let newarray = []
    for (let name of ar) {
        if (name !== p) {
            newarray.push(name)
        }
    }
    return newarray
}

//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.

// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

//I think that's what it does

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum(ar) {
    let num = 0
    for (let idx of ar) {
        num += idx
    }
    return num
}

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

function average(ar) {
    let avg = 0
    if (ar.length === 0) {
        return undefined
    } else {
        for (let idx of ar) {
            avg += idx
        }
        return avg /= ar.length
    }
}

// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimum(ar) {
    let low = ar[0]
    if (ar.length === 0) {
        return undefined
    } else {
        for (let test of ar) {
            if (low > test) {
                low = test
            }
        }
        return low
    }
}


// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.


function getIndex(array, goal) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === goal) {
            return i
        }
    }
}


function selectionSort(a1) {
    let array = a1.slice(0);
    let final = []
    for (let i = 0; i < a1.length; i++) {
        final.push(minimum(array))
        array.splice(getIndex(array, minimum(array)), 1)
    } return final
}
//there HAS to be a built in way to getIndex something, and I'll try to streamline this code later on. Ideally I'd like one function, not two.



// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.





// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.

function textList(names) {
    let string = ""
    for (let name of names) {
        string += name
        string += ","
    }
    return string.substring(0, (string.length - 1))
}