function countTo(limit) {
    let container = [];
    for (let i = 1; i <= limit; i++) {
        container.push(i);
    }
    return container;
}

let count = countTo(100);

function filterTo(limit, ...args) {
    let container = [];
    for (let i = 1; i <= limit; i++) { //responsible for checking each number and passing it to the function below
        for (let item of args) // for each item in the args loop through each and compare to the passed numerator
        {
            if(i % item !== 0) // making sure it adheers to the same type[]
            {
                console.log(`${i} is not divisible by ${item}`);
            }
            else
                console.log(`${i} is divisible by ${item}`);  
        }  
    }
}
 
filterTo(10,2,4);
