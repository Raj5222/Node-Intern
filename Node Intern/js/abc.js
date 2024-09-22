// let string = "Hello How Are You"
// let rev = []
// for(let a=string.length-1;a>=0;a--){
// // console.log("Value Of A : ",a)
//     rev += string[a]
// // console.log(rev)
// }
// console.log(rev)


// let i = 2;
// while (i < 5) {
//     console.log(i);
//     i++;
// }


// let i = 5;
// do {
//     i++;
//     console.log(i);
// } while (i < 5);


// let arr = [10,2,3,4]
// let newarr = arr.reduce((a,b,c,d)=>{
//     console.log("Value A : ",a,"Value B : ",b,"Value C : ",c)
//     return a+b;
// },0)
//     console.log("New Value : ",newarr)


// async function myFunction() {
//     let arr = [10,2,3,4]
//         return Promise.resolve("Hello");
// }
// // let x = myFunction()
// console.log(myFunction())

// async function myFunction() {
//                 let arr = [10, 2, 3, 4]
//                 return Promise.resolve("Hello");
//             }
//             let x = myFunction()
//             x.then(console.log((data,b,c)=> console.log("Data : ",data)))

// const promise1 = new Promise((resolve) => setTimeout(() => resolve("First"), 1000));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve("Second"), 2000));

// Promise.race([promise1, promise2])
//   .then((result) => {
//     console.log("ABC : ",result);
//   });


// const promise1 = new Promise((resolve) => setTimeout(() => resolve("First"), 1000));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve("Second"), 2000));
// const promise3 = new Promise((resolve,reject) => setTimeout(() => reject("Third"), 3000));

// Promise.all([promise1, promise2, promise3])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((error) => {
//     console.error("Error In : ",error);
//   });


// const promise1 = Promise.resolve("First");
// const promise2 = Promise.reject("Second");
// const promise3 = Promise.resolve("Third");

// Promise.allSettled([promise1, promise2, promise3])
//   .then((results) => {
//     console.log(results);
//   });


// const promise1 = Promise.reject("First");
// const promise2 = Promise.reject("Second");
// const promise3 = Promise.reject("Third");

// Promise.any([promise1, promise2, promise3])
//   .then((result) => {
//     // console.log(result); 
//   })
//   .catch((error)=> console.log(error));