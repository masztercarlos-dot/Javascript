// using functions with parameters create function to check gender of a person 
// NB: male or female or others
function checkgender(gender){
    if (gender=="male"){
        console.log("you are male");
        
    }
    else if(gender=="female"){
        console.log("you are female");
    }
    else{
        console.log(" you are other gender")
    }
}
// ivoke function 
checkgender("female")