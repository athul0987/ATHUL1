//Write a JavaScript program to find the sum of squares of the elements of an array
function sum_sq(array) {
    var sum = 0, 
        i = array.length;
    while (i--) 
     sum += Math.pow(array[i], 2);
    return sum;
  }
   
  console.log(sum_sq([0,3,2,5,4])); 
  //Write a JavaScript program to find the most frequent item of an array
  var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;
//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even
for (var x=0; x<=15; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}
//Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 
function isPrime(num) {
        if (num <= 1) {
          return false;
        }
      
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            return false;
          }
        }
      
        return true;
      }
      
      function checkFirstElement(array) {
        if (array.length === 0) {
          console.log("The array is empty.");
          return;
        }
      
        const firstElement = array[0];
      
        if (isPrime(firstElement)) {
          console.log(`${firstElement} is a prime number.`);
        } else {
          console.log(`${firstElement} is not a prime number.`);
        }
      }
      
      const inputArray = [17, 4, 7, 11, 23];
      checkFirstElement(inputArray);