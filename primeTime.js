// Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.



//is the value passed a prime number?


// codition: 
//     number**p - number only need to do this once;
//     get the return from the equation and compare it the % Promise
// the number passed has to be 1 <= a < prime
console.log(`The next prime number is ${isPrime(7,true)}`);

function isPrime(potentialPrime, flag) { //number is random, prime is the number passed

    if (flag && TrailByDivision(potentialPrime)) //is the first value passed a prime number
    {
        console.log(`${potentialPrime} is already a prime number onto the next number`);
        return isPrime(potentialPrime + 1, false);
    }
    console.log(`Checking if ${potentialPrime} is a prime number`);
    return(TrailByDivision(potentialPrime) ? potentialPrime: isPrime(potentialPrime + 1, false));
    //Is this the first time the function was called and the number is a prime number skip
    // if(number >= 1 && number < potentialPrime) // check the range of the number 1 <= a < prime
    // {
        
    // }
    // else
    //     return isPrime( 2, potentialPrime + 1, false)
}

function TrailByDivision(n) {
    for (i = 2; i <= Math.sqrt(n); i++) { //We us a square root based on the fact that on of the pair factors of n is less than 
                                         //the square root of n 
        if (n % i == 0) return false; // check if i is a divisor of n again prime is only one and itself if we have a factor of 
                                    //that is greater than 1 exit the loop 
    }
    return true;
}


//This works in theory but there must be mathematical errors when raising a by a very large P = percision errors 
// function FermatLittle(a,P)
// {
//     //a**P - a = P * a
    //a**P - a = P * a
    // let result = a**(P - 1)-1;
    // return result % P == 0;
// }