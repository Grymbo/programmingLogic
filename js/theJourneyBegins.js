/* 4.- Given an array of integers, find the pair of adjacent elements that has the largest product and return that product */
function solution4(inputArray) {
    let maxProduct = - Infinity;

    for (let i4 = 0; i4 < inputArray.length - 1; i4++) {
        const product4 = inputArray[i4] * inputArray[i4 + 1];

        if (product4 > maxProduct ) {
            maxProduct = product4;
        }
    }

    return maxProduct;
}

/* 5.- Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking 
the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see 
the 1-, 2-, 3- and 4-interesting polygons in the picture below.*/ 

function solution5(n)  {
    return n * n + (n - 1) * (n - 1); 
}
console.log(solution5(2));

