/* 1) Write a function that returns the sum of two numbers*/
function solution1( param1, param2) {
    const a = param1;
    const b = param2;

    return a + b;
}

/* 2) Given a year, return the century it is in. The first century spans from the year 1 up to and including
 the year 100, the second from the year 101 up to and including the year 200, etc*/
 function solution2(year) {
    let century = Math.ceil(year / 100);

    return century;
 }

 /* 3) Given de string. Check if it is a palindrome*/
 function solution3(inputString) {
    const regex = /[^a-z0-9]/gi;
    const newString = inputString.replace(regex, '').toLowerCase();
    const newString2 = newString.split('').reverse().join('');

    return newString === newString2;
 }