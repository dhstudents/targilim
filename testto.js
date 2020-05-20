
console.log("1. I will say something I")
//setTimeout( say , 3000)
var handle = setInterval(say, 2000)
setTimeout( function() { clearInterval(handle)} , 7000)
console.log("3. I will say something II")



function say() {
    console.log("2. Corrona Free");
}