

function filterTo(limit, ...args) {
    let container = [];
    for (let i = 1; i <= limit; i++) { //responsible for checking each number and passing it to the function below
        //check the position at based on the argument
        if(args.every(item => i % item === 0)) // making sure it adheers to the same type[]
        {
            console.log(`${i} is divisible by all items in args: ${args.join(", ")}`);
            continue; // Skip to the next iteration
        }
        else
        {
            for (let item of args) // for each item in the args loop through each and compare to the passed numerator
            {
                if(i % item !== 0) // making sure it adheers to the same type[]
                    console.log(`${i} is not divisible by ${item}`);
                else
                    console.log(`${i} is divisible by ${item}`);  
            } 
        } 
    }
}
 
filterTo(100,3,5);


// function fizzBuzz(limit) {
//     for (let i = 1; i <= limit; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("Fizz Buzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }
