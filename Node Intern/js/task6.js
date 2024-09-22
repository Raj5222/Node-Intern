// Sort alphabatical

// console.time('myTimer'); 
//     const fruits = ["Mango","Coconat", "Orange", "orange", "Apple", "Banana"];
//     // console.log(fruits)
//     let newarr = fruits.sort((a,b)=> a<b? 0 : -1)
//     console.log(newarr,fruits)
//     console.timeEnd('myTimer');


// Sum OF Given All Matrix.

const matrix = [
    [1, [2, 3],
    [4, 5], 6,["Hello"]],
    [7, 8, 9, [10, 11, [12, [13, 14]], ["Hello1", ["Hello2"]]]]
];

function tot(mat) {
    mat.forEach((element) => {
        if (typeof element === 'number') {
            single.push(element);
            total += element;
        } else if (typeof element === 'string') {
            single.push(element);
        }
        else if(Array.isArray(element)){
            tot(element);
        }
        else{
            console.log("Not Valid.")
        }
    });
}

let single = [];
let total = 0;
tot(matrix);
console.log("Total : ", total, '\nArray : ', single);



// function maxfind(max){
//     let data = 0;
// for (const e of max) {
//     if(data>e){
//         data = e
//     }
// }    
// return data;
// }

// let arr = [3, 5, 17, 2, 8];
// console.log(maxfind(arr))


// let arr = [3, 5, 17, 2, 8];
// let rev = []
// for(let i = arr.length ;i>0;i--){
//     rev.push(arr[i-1])
// }
// console.log(rev)



function maxfind(max, check) {
    for (const e of max) {
        if (e === check) {
            return `${check} is Available.`;
        }
    }
    return `${check} is Not Available.`;
}

let arr = [3, 5, 17, 2, 8];
let ch = 17;
console.log(maxfind(arr, ch));
