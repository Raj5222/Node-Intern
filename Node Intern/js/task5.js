//Q.1 find average marks of entire array

    // let student_Marks = [60,71,89,43,55,23,75,81,73];
    // let avg = student_Marks.reduce((total,curr)=>{
    //     return total+curr;
    // },0);
    // console.log("Average Marks Of : ",avg/student_Marks.length)


//Q.2 For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

    // let prices = [250,645,300,900,50];
    // let offer = 10;
    // console.log("Original Prices : ",prices)
    // prices.forEach((Val,i)=>{
    //     prices[i] -= Val*(offer/100);
    // })
    // console.log(`${offer}% Off Prices : ${prices}`)

// Q.3 Create an array to store companies -> “Bloomberg”,“Microsoft”,“Uber”,“Google”,“IBM”,“Netflix”
    // a. Remove the first company from the array
    // b. Remove Uber & Add Ola in its place 
    // c. Add Amazon at the end

    // A
    // let arr = ['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];
    // arr.shift()
    // console.log(arr)

    // B
    // let arr = ['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];
    // // arr[2]="Ola"
    // arr.splice(2,1,"Ola")
    // console.log(arr)

    // C
    // let arr = ['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];
    // arr.push("Amazon")
    // console.log(arr)