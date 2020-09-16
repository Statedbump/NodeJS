
//function that we provide to an arg with the intention
// that it will get called in a later time.

const names = ['Luis', "Jen", "Jess"]
const shortNames = names.filter((name => {
    return name.length <= 4
}))

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            lattitude: 10,
            longitude:10
    }
    callback(data)
 },2000)
}

geocode('Philadelphia', (data) => {
    console.log(data)

})

 
const add = (a,b,callback) => {
    setTimeout(()=>{
        sum = a + b
        callback(sum)
    }, 2000)
}  

add(1,4,(sum)=> {
    console.log(sum)
})

