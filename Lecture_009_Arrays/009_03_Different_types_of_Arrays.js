let Array = ['Sun', 'Star', 'Moon']
console.log(Array[2])


// //-------------------


let printArray = (arr) => {
    for (let a = 0; a <= arr.length-1; a++){
        console.log(arr[a])
    }
}


let array2 = [2,4,6,8]
let test = printArray(array2)


// Output:
// 2
// 4
// 6
// 8