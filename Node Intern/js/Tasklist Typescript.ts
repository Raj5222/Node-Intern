// 1. Create a function that will convert from Fahrenheit to Celsius

function FtoC(num:number):number {
  return parseFloat((((num - 32) * 5) / 9).toFixed(2));
}

let fahrenhait: number = 32;
console.log(`${FtoC(fahrenhait)} C`);


// 2. Calculate the sum of numbers in an array of numbers

function Total(arr:number[]):number{
    let total:number = 0
arr.forEach(element => {
    total+=element
});
return total
}

let ary:number[] = [10,0,1,28,182,30]
console.log("Total Sum Of Array : ",Total(ary))


// 3. Calculate the average of the numbers in an array of numbers

function avrg(arr:number[]):number{
    let total:number = 0
    arr.forEach(element =>{
        total += element
    })
    return total/arr.length
}

let avgary:number[] = [10,0,1,28,182,30]
console.log("Average Value : ",avrg(avgary))


// 4. Create a function that receives an array of numbers and returns an array containing only the positive numbers

function positiv(arr:number[]):number[]{
    let newarr:number[] = []
    arr.forEach(element=>{
        if(element>=0){
            newarr.push(element)
        }
    })
    return newarr
}

let q4:number[] = [10,0,1,28,-182,30]
console.log("Positive Array : ",positiv(q4))

// 5. Find the maximum number in an array of numbers

function fndmax(arr:number[]):number{
    let max:number = -Infinity
    arr.forEach(element => {
        if(element>max){
            max = element
        }
    })
    return max
}

let q5:number[] = [10,0,1,28,82,-30]
console.log("Max Number : ",fndmax(q5))



// 6. Print the first 10 Fibonacci numbers without recursion

function Fibonacis(n:number):number[] | (number|string){
    let fibn:number[] = []
    if (n <= 0) return "Not Valid";
    
    let a:number = 0, b:number = 1;
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

console.log("Fibonacci Numbers :",Fibonacis(10));


// 7. Create a function that will find the nth Fibonacci number using
function Fibonaci(n:number) {
    return Fibonacis(n)[n];
}

console.log("Fibonacci Number:", Fibonaci(10));


// 8. Create a function that will return a Boolean specifying if a number

function numbe(val:unknown):boolean{
    if(typeof val === "number" ){
        return true
    }else{
        return false
    }
}

console.log("This Is Number : ", numbe(123))


// 9. Calculate the sum of digits of a positive integer number

function positivsum(arr:number[]):number{
    return arr.reduce((acc:number,curr:number):number =>{
        if(curr>0){
            return acc+curr
        }else{
            return acc
        }
    })
}

let q9ary:number[] = [2,-1,4,]
console.log("Positive Sum :", positivsum(q9ary))


// 11. Rotate an array to the left 1 position

    function left(arr:number[]):number[]{
        let q6new:number[] = []
        arr.forEach((element,index) => {
            if (index === 0) {
                q6new[arr.length-1] = element    
            }else{
                q6new[index-1] = element
            }
        })
        return q6new
    }

    let q6:number[] = [10,0,1,28,82,-30,12]
    console.log("Left Rotated Array : ",left(q6))


    // 12. Rotate an array to the right 1 position

function right(arr:number[]):number[]{
   let lastElement:number|any = arr.pop();
   arr.unshift(lastElement);

    return arr;
    }

    let q7:number[] = [10,0,1,28,82,-30,12]
    console.log("Right Rotated Array : ",right(q7))


    // 13.	Reverse an array

function reverse(arr:number[]):number[]{
    let newarr:number[] = []
    for(let i:number=arr.length-1;i>=0;i--){ // Reverce Loop
        newarr.push(arr[i])
    }
    return newarr
}

let q8 = [10,0,1,28,82,-30,12]
    console.log("Reverc Array : ", reverse(q8));


// 14.	Reverse a string

function revstr(arr:string):string[]{
    let newarr:string[] = []
    for(let i=arr.length-1;i>=0;i--){ // Reverce Loop
        newarr.push(arr[i])
    }
    return newarr
}

console.log("Reverc String : ",revstr("Raj").join(""))


// 15.	Create a function that will merge two arrays and return the result as a new array

function merg(arr1:number[],arr2:number[]):number[]{
    return [...arr1,...arr2]
}

let dat1:number[] = [1,2,3,4,5]
let dat2:number[] = [6,7,8,9,10]
console.log("Merged Array : ", merg(dat1,dat2))


// 16.	Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

function merguniq(arr1:number[],arr2:number[]):number[]{
    let newarr:number[] = [];
    [...arr1,...arr2].forEach(element =>{
        if(!(arr1.includes(element) && arr2.includes(element))){
            newarr.push(element)
        }
    })
    return newarr
}

let datx:number[] = [1,2,3,7,4,5]
let daty:number[] = [5,6,7,8,9,10]
console.log("Unique Array : ", merguniq(datx,daty))


// 17.	Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

function mergeuni(arr1:number[],arr2:number[]):number[]{
    let newarr:any[] = arr1.filter(element =>{
        return !(arr2.includes(element))
        }
    )
    return newarr
}

let datqa = [1,2,3,6,4,5]
let dat0qa = [5,6,7,8,9,10]
console.log("First Unique Array : ", mergeuni(datqa,dat0qa))


// 18.	Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

function Duplicateremo(arr1:number[],arr2:number[]):number[]{
    return [...new Set([...arr1,...arr2])]
}

let arr = [1,2,3,6,4,5]
let arr1 = [5,6,7,8,9,10]
console.log("Array Remove Duplicate : ", Duplicateremo(arr, arr1));



// 19.	Calculate the sum of first 100 prime numbers

function sumprim(limit:number) {

    let primes:number[] = [];
    let n = 1;

    while (primes.length < limit) {
        let bool:boolean = true;
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

    return primes.reduce((acc:number,cur:number) => acc+cur);
}

let Q23:number = 100
console.log(`Sum ${Q23} Prime Numbers: ${sumprim(Q23)}`)