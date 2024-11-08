// Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.



//is the value passed a prime number?


// codition: 
//     number**p - number only need to do this once;
//     get the return from the equation and compare it the % Promise
// the number passed has to be 1 <= a < prime
    
const value = 2;
console.log(isPrime(value,3,true));




function isPrime(number, potentialPrime, flag) { //number is random, prime is the number passed

    if (flag && FermatLittle(number, potentialPrime)) //is the first value passed a prime number
    {
        console.log(`Skipping Prime Detected as first input on ${number}`);
        return isPrime(2, potentialPrime + 1,false);
    }

    console.log(`Checking: number=${number}, potentialPrime=${potentialPrime}, flag=${flag}`);

    //Is this the first time the function was called and the number is a prime number skip
    if(number >= 1 && number < potentialPrime) // check the range of the number 1 <= a < prime
    {
        return( FermatLittle(number, potentialPrime) ? potentialPrime: isPrime( 2, potentialPrime + 1, false)  );
    }
    else
        return isPrime( 2, potentialPrime + 1, false)
}

function FermatLittle(a,P)
{
    //a**P - a = P * a
    let result = a**P - a;
    return result % P == 0;
}