// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for([initialexpression/declaration]; [condition]; [changer]){
//     //body{execute this part if condition true      }
// }



// for(let UserScore = 1; UserScore <= 10; UserScore++){
// console.log(`UserScore is ${UserScore}`);
// }


// let UserScore = 1
// const highestValue = 10
// for( UserScore ; UserScore <=  highestValue; UserScore++){
//     console.log(`UserScore is ${UserScore}`);
//     }



    
let UserScore = 10
const minValue = 0

//if score hits 5 , dont print anything after it
//remove previous demand , if score hits 5 , skip printing 5 but rest value should be printed  

let Username = "himanshu"
for( UserScore ; UserScore >= minValue;UserScore-- ){
    // if(UserScore == 5){
    //     break;
    // }
    if(UserScore == 5){
        continue
    }

    console.log(`UserScore is ${UserScore}`);
    console.log(Username);
    }