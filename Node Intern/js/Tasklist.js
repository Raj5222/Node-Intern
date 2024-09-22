// 1. Create a function that will convert from Fahrenheit to Celsius

function ftoc(num){
    return ((num-32)*5/9).toFixed(2)
}

let feranhit = 32
console.log(ftoc(feranhit),"C")

// 2. Calculate the sum of numbers in an array of numbers

function total(arr){
    let total = 0
arr.forEach(element => {
    total+=element
});
return total
}

let ar = [10,0,1,28,182,30]
console.log("Total Sum Of Array : ",total(ar))

// 3. Calculate the average of the numbers in an array of numbers

function avg(arr){
    let total = 0
    arr.forEach(element =>{
        total += element
    })
    return total/arr.length
}

let avgarr = [10,0,1,28,182,30]
console.log("Average Value : ",avg(avgarr))

// 4. Create a function that receives an array of numbers and returns an array containing only the positive numbers

function positive(arr){
    let newarr = []
    arr.forEach(element=>{
        if(element>=0){
            newarr.push(element)
        }
    })
    return newarr
}

let Q4 = [10,0,1,28,-182,30]
console.log("Positive Array : ",positive(Q4))

// 5. Find the maximum number in an array of numbers

function findmax(arr){
    let max = arr[1]
    arr.forEach(element => {
        if(element>max){
            max = element
        }
    })
    return max
}

let Q5 = [10,0,1,28,82,-30]
console.log("Max Number : ",findmax(Q5))

// 6. Print the first 10 Fibonacci numbers without recursion

function Fibonaccis(n) {
    let fibn = []
    if (n <= 0) return;
    
    let a = 0, b = 1;
    fibn.push(a); // Print the first Fib number

    if (n > 1) {
        fibn.push(b); // Print the second Fib number
    }

    for (let i = 2; i <= n; i++) {
        let c = a + b;
        fibn.push(c);
        a = b;
        b = c;
    }
    return fibn;
}

console.log("Fibonacci Numbers :",Fibonaccis(10));


// 7. Create a function that will find the nth Fibonacci number using
function Fibonacci(n) {
    return Fibonaccis(n)[n];
}

console.log("Fibonacci Number:", Fibonacci(10));

// 8. Create a function that will return a Boolean specifying if a number

function numb(val){
    if(typeof val === "number" ){
        return true
    }else{
        return false
    }
}

console.log("This Is Number : ", numb(123))

// 9. Calculate the sum of digits of a positive integer number

function positivesum(arr){
    return arr.reduce((acc,curr)=>{
        if(curr>0){
            return acc+curr
        }else{
            return acc
        }
    })
}

let q9arr = [2,-1,4,]
console.log("Positive Sum :", positivesum(q9arr))

// 11. Rotate an array to the left 1 position

    function left1(arr){
        let q6new = []
        arr.forEach((element,index) => {
            if (index === 0) {
                q6new[arr.length-1] = element    
            }else{
                q6new[index-1] = element
            }
        })
        return q6new
    }

    let Q6 = [10,0,1,28,82,-30,12]
    console.log("Left Rotated Array : ",left1(Q6))

// 12. Rotate an array to the right 1 position

function right1(arr){
   let lastElement = arr.pop();
   arr.unshift(lastElement);

    return arr;
    }

    let Q7 = [10,0,1,28,82,-30,12]
    console.log("Right Rotated Array : ",right1(Q7))


// 13.	Reverse an array

function rev(arr){
    let newarr = []
    for(let i=arr.length-1;i>=0;i--){ // Reverce Loop
        newarr.push(arr[i])
    }
    return newarr
}

let Q8 = [10,0,1,28,82,-30,12]
    console.log("Reverc Array : ",rev(Q8))

// 14.	Reverse a string

function revstring(arr){
    let newarr = []
    for(let i=arr.length-1;i>=0;i--){ // Reverce Loop
        newarr.push(arr[i])
    }
    return newarr
}

console.log("Reverc String : ",revstring("Raj").join(""))

// 15.	Create a function that will merge two arrays and return the result as a new array

function merge(arr1,arr2){
    return [...arr1,...arr2]
}

let data1 = [1,2,3,4,5]
let data2 = [6,7,8,9,10]
console.log("Merged Array : ", merge(data1,data2))

// 16.	Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

function mergeuniq(arr1,arr2){
    let newarr = [];
    [...arr1,...arr2].forEach(element =>{
        if(!(arr1.includes(element) && arr2.includes(element))){
            newarr.push(element)
        }
    })
    return newarr
}

let data = [1,2,3,6,4,5]
let data0 = [5,6,7,8,9,10]
console.log("Unique Array : ", mergeuniq(data,data0))


// 17.	Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

function mergeuniqA(arr1,arr2){
    let newarr = [];
    arr1.forEach(element =>{
        if(!(arr2.includes(element))){
            newarr.push(element)
        }
    })
    return newarr
}

let dat = [1,2,3,6,4,5]
let dat0 = [5,6,7,8,9,10]
console.log("First Unique Array : ", mergeuniqA(dat,dat0))

// 18.	Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

function Duplicateremove(arr1,arr2){
    return [...new Set([...arr1,...arr2])]
}

let arrx = [1,2,3,6,4,5]
let arry = [5,6,7,8,9,10]
console.log("Array Remove Duplicate : ", Duplicateremove(arrx,arry))

// 19.	Calculate the sum of first 100 prime numbers

function sumprime(limit) {

    let primes = [];
    let n = 1;

    while (primes.length < limit) {
        let bool = true;
        for (let i = 2; i*i<=n; i++) {
            if (n % i === 0) {
                bool = false;
                break;
            }
        }
        if (bool) {
            primes.push(n);
        }
        n++;
    }
    return primes.reduce((acc,cur) => acc+cur);
}

let q23 = 100
console.log(`Sum ${q23} Prime Numbers: ${sumprime(q23)}`)

// 20.	Print the distance between the first 100 prime numbers

function primedistance(limit){
    let primes = [];
    let n = 2;

    while (primes.length < limit) {
        let bool = true;
        for (let i = 2; i*i<=n; i++) {
            if (n % i === 0) {
                bool = false;
                break;
            }
        }
        if (bool) {
            primes.push(n);
        }
        n++;
    }
    let primedis = []
    primes.reduce((acc,cur) => {
        primedis.push(`${cur}-${acc} => ${cur-acc} `)
        return cur
    })
    return primedis
}

console.log(`Prime Number Distance : ${primedistance(100)}`)


// 21.	Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.

function Strsum(d1,d2) {
  d1 = parseInt(d1)
  d2 = parseInt(d2)
  return `${d1+d2}`
}

console.log("Two Number String Sum :",Strsum("145326468729837523","5274368271"));

// 22.	Create a function that will return the number of words in a text
function sizelength(x){
    return x.split(" ").length;
}

console.log("Number Of Word :",sizelength("Number Of Word abc5d ada"))

// 23.	Create a function that will capitalize the first letter of each word in a text

function size(x){
    let words = x.split(" ");
    words.forEach((element,index) => {
        words[index] = element[0].toUpperCase()+element.slice(1)
    })
    return words.join(" ")
}

console.log("Capital Words :",size("Number of word Abc5d ada"))

// 24.	Calculate the sum of numbers received in a comma delimited string

function total1(str){
let arr = str.split(",")
let total = 0
arr.forEach(element => {
    total += parseInt(element)
});
return total
}

let num = "10,1,2,3,4,5,6,7";
console.log("Total Sum : ",total1(num))

// 25.	Create a function that will return an array with words inside a text

function returnword(x){
    return x.split(" ")
}

console.log("Array Of Words :",returnword("Number Of Word abc5d ada"))

// 26.	Create a function to convert a CSV text to a “bi-dimensional” array


// 27.	Create a function that converts a string to an array of characters

function strToarr(x){
    return x.split("")
}

console.log("String To Array :",strToarr("Number Of Word abc5d ada"))


// 28.	Create a function that will convert a string in an array containing the ASCII codes of each character
function strToascii(x){
    return x.split("").map(char => char.charCodeAt(0));
}

console.log("String Char To ASCII :",strToascii("Number Of Word abc5d ada"))

// 29.	Create a function that will convert an array containing ASCII codes in a string

function asciiTostr(arr){
    return arr.map(x => String.fromCharCode(x)).join('')
}

let ascii = [78, 117, 109, 98, 101, 114, 32, 79, 102, 32, 87, 111, 114, 100, 32, 97, 98, 99, 53, 100, 32, 97, 100, 97]
console.log("ASCII To String:",asciiTostr(ascii))

// 30.	Implement the Caesar cypher

function cypher(str,shift){
let abcd = "abcdefghijklmnopqrstuvwxyz"
let cyfertext = str.toLowerCase().split("").reduce((acc,cur)=>{
    if(cur == " "){
        return acc+= " ";
    }
    for (let i = 0; i < 26; i++) {
        if(cur==abcd[i]){
            console.log(cur,">>",abcd[(i+shift)%26])
            return acc+=abcd[(i+shift)%26];
        }
    }
},"x")

return cyfertext.slice(1)
}

console.log("Text To Cyfer :", cypher("hello Raj",20))


// 31.	Implement the bubble sort algorithm for an array of numbers

function bubbleSort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-1-i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

console.log("Bubble Sort :",bubbleSort([0,9,8,7,6,0,-1,0,5,4,3,2,1]))

// 32.	Create a function to calculate the distance between two points defined by their x, y coordinates

function finddistance(x,y){
    return Math.sqrt(Math.pow(0-x,2) + Math.pow(0-y,2))
}
console.log("Distance Of X and Y Cordinetes :", finddistance(4,8))


// 33.	Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting	

    function circle(circle1, circle2) {
    let { x: x1, y: y1, radius: r1 } = circle1;
    let { x: x2, y: y2, radius: r2 } = circle2;
    
    const distanceBetweenCenters = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    
    return distanceBetweenCenters <= (r1 + r2);
  }

  let c1 = {x:10,y:8,radius:7};
  let c2 = {x:3,y:4,radius:0};

  console.log("Radius Are Intersecting :",circle(c1,c2))

// 34.	Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number.

function bidimension(arr, inx) {
    return arr.map(row => row[inx]);
}

console.log("Bi-Dimensional Array To Seleted Row",bidimension([["Raj",1,"Node"],["Chintan",2,"React"],["Deep",2,"Data Analyst"]],2))


// 36.	Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)

function jugedarrsum(arr){
      return arr.reduce((acc,curr) => {
        if (typeof curr === 'number') {
            return acc += curr;
        }
        else{
            return acc += jugedarrsum(curr); // Nested Arr Call
        }
    },0);
}

console.log("Jugged Array Sum :",jugedarrsum([1,2,[2,[3,[1,[2,1],3],],2]]))

// 37.	Find the maximum number in a jagged array of numbers or array of numbers

function jugedarrmax(arr) {
    return arr.reduce((acc, curr) => {
        if (typeof curr === 'number') {
            if(acc>curr){
                return acc
            }else{
                return curr
            }
        } else {
            let call = jugedarrmax(curr); // Nested Arr Call
            if(acc>call){
                return acc
            }else{
                return call
            }
        }
    }, 0);
}

console.log("Jugged Array Max :", jugedarrmax([1, 2, [2, [3, [1, [21, 1], 3],], 2]]));



// 38.	Deep copy a jagged array with numbers or other arrays in a new array

function deepcopy(arr) {
    return arr.map((item) => {
        return Array.isArray(item) ? deepcopy(item) : item
    });
}

let org = [1, 2, [2, [0, [1, [21,1], 3]], 2]];
const Deep = deepcopy(org)
org[2][1][0] = 5;
console.log("Original Copy :", org, "\n", org[2][1][0])
console.log("Deep Copy :", Deep, "\n", Deep[2][1][0])



// 39.	Create a function to return the longest word(s) in a string
    
function longest(str){
    return str.split(" ").reduce((acc,curr)=>{
        if(acc.length>curr.length){
                return acc
            }else{
                return curr
            }
        })
    }
    
    console.log("Longest Word Is :",longest("Hello Raj"))

// 40.	Shuffle an array of strings
function shufflearr(arr){
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

let Q40 = [1,2,3,4,5,6,7,8,9,10]
console.log("Shuffle Array :",shufflearr(Q40))