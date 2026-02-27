// else if else statement 
let score= 200
if (score>=0 && score<=30){
    console.log("Failed")

}else if (score>=31 && score<=50){
    console.log("Below average")
}
else if (score>=51 && score<=70){
    console.log("Above average")
}
else if (score>=71 && score<=100){
    console.log("Excellent")
}
else {
    console.log("Invalid score")
}

// example 2
let distance =100
if (distance>=0 && distance<=100){
    console.log("pay 5 USD")
}
else if (distance>=101 && distance<500){
    console.log("pay 10 USD")
}
else if (distance >=501 && distance <=1000) {
    console.log('pay 20 USD');
}
else if (distance > 1001) {
    console.log("pay 40 USD")
}
else {
    console.log("invalid distance")
}