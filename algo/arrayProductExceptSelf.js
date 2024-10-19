var arrayProductExceptSelf = (nums) => {
    let leftProduct = [];
    let rightProduct = [];

    let solution = [];

    //populate leftProduct 
    //populate rightProduct
    //populate solution

    for (let i = 0; i < nums.length; i++) {
        if (leftProduct.length === 0) {
            leftProduct.push(1);
        } else {
            leftProduct.push(leftProduct[i - 1] * nums[i - 1]);
        }
    }
    
    
    //the rightProduct array is populated reverse
    //logic is the start from top of the array and multiply the current number with the previous number
    //if the array is empty, push 1
    //if not, unshift the product of the current number and the previous number
    
    
    for (let i = nums.length - 1; i > -1; i--) {
        if (rightProduct.length === 0) {
            rightProduct.push(1);
        } else {
            rightProduct.unshift((rightProduct[0] * nums[i + 1]));
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        solution.push(leftProduct[i] * rightProduct[i]);
    }
    console.log("nums - " , nums);
    console.log("leftProduct - " , leftProduct);
    console.log("rightProduct - ", rightProduct);
    return solution
}



console.log(arrayProductExceptSelf([1, 2, 3, 4])); //[24, 12, 8, 6]
console.log("----------------------------------------");
console.log(arrayProductExceptSelf([-1, 1,0, -3, 3  ])); // [0, 0, 9, 0, 0]