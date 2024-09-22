async function f1(para1) {
    let Prom1 = await new Promise((resolve)=>{
            resolve(para1)

        setTimeout(() => {
            resolve(para1)
        }, para1*1000);
    })
    return Prom1;
}

let Prom2 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject("Timeout.")
        }, 1000);
    })

Promise.allSettled([f1(3),Prom2]).then((result)=>{
    result.forEach((result)=>{
        console.log("Promise Status :> ",result)
        if (result.status === 'fulfilled') {
            console.log("Value:", result.value);
        } else {
            console.log("Rejected:", result.reason);
        }
    })
})
