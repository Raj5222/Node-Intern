let arr = [0,1,2,3,4,-5,6,7,8,-9];
let newval = []
let mapdata = arr.map((val,i,a)=>{
    newval[i] = (val / a.length)+0.8
    // console.log("Old Val : ",val,"\nNew Val : ", newval[i])
    newval[i]>=2 ? console.log(newval[i]," Is Positive"):console.log(newval[i]," Is Nagative")
    return newval[i] > 1
})

console.log("FilterData : ",mapdata)
console.log("New Map Val All : ", newval)