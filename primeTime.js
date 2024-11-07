// Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.



//is the value passed a prime number?


// codition: 
//     number**p - number only need to do this once;
//     get the return from the equation and compare it the % Promise
// the number passed has to be 1 <= a < prime
    
    
console.log(isPrime(100,8));


// function toPrimeNumber(number){








//     return // Return the  As soon as you find the prime number, log that number and exit the loop.
// }



function isPrime(number, potentialPrime) { //number is random, prime is the number passed
    if(number >= 1 && number < potentialPrime) // check the range of the number 1 <= a < prime
    {
        let result = number**potentialPrime - number;
        return((result % potentialPrime == 0 ? potentialPrime : isPrime( getRandomInt(1,4), potentialPrime + 1)));
    }
    else
        return isPrime( getRandomInt(1,4), potentialPrime+=1)
}
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
  

