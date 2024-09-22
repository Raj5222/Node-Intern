// function find(data,find){
//     data.forEach(element => {
//         element.student.forEach(element2 =>{
//             if(element2.name == find){
//                 console.log(element2)
//             }
//             console.log("Not Avalable")
//         })
//     });
// }

// let collection = [{
//     student:[{name:"Raj",
//         subject:{Maths: 76, CN: 89, DSA: 85,Projects:95},
//         Prcentage:87},
//         {name:"Manan",
//             subject:{Maths: 67, CN: 84, DSA: 75,Projects:90},
//             Prcentage:82}]
// }]
// find(collection,"Manan")


function findMax(arr){
let max = 0
arr.forEach((element) => {
    if(element !== Infinity && element !== -Infinity && element !== NaN){
        if(element>max) {
            max=element
        }
    }
});
console.log(max)
}
findMax([-11, 21, Infinity, NaN, -Infinity, 4])