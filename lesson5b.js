// arrow functions with parameters
// example 1 
const greeting = (name)=>{
    console.log("Hello "+name)
}
// invoke the function
greeting("Jirnna")
greeting("euphy")
greeting("Sherrif")

// example 2 
const mycounty=(county)=>{
    console.log("my  county is "+ county);

    
}
// invoke the function 
mycounty("nairobi")
mycounty("Elgeyo")
mycounty("Mombasa")
mycounty("kirinyaga")


// example 3 
const addition =(num1,num2)=>{
    let answer=num1+num2
    console.log("the sum is "+answer);

    
}
// invoke the function 
addition(50,100)


// example 4 
const subtraction=(num1,num2)=>{
    let answer=num1-num2
    console.log("the difference is " +answer)
}
// invoke the function 
subtraction(100,80)


// example 5 
const multiplication=(num1,num2)=>{
    let answer=num1*num2
    console.log("the product is "+answer)

}
// invoke the function 
multiplication(10,10)


const checktrafficlights = (light)=> {
    if (light=="red"){
        console.log("stop");
        
    }
    else if(light=="orange"){
        console.log("get ready");
        
    }
    else if(light=="green"){
        console.log("go");
        
    }
    else{
        console.log("invalid traffic light color");
    }
}
// invoke the function
checktrafficlights("green")