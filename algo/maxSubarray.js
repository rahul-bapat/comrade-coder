var maxSubarray = (nums) => {
    // [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    //keep track of max value 
    //accumulated number 
    //iterate through the array
    //current number is big or prev accumumated number

    //see if accumulated value is bigger than maxValue , if so Replace it 
    if (nums.length === 1) return nums[0];
    let max = nums[0];
    let accumulated = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let calc = Math.max(nums[i], accumulated + nums[i]);
        if (calc > max) { max = calc; }

        accumulated = calc;
    }
    return max;
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
console.log(maxSubarray([4, -1, 2, 1])); //6