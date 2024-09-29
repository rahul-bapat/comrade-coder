var containsDuplicates = (nums) => {
    let memory = {};
    for (let i = 0; i < nums.length; i++) {
        if (memory[nums[i]] === undefined) {
            memory[i] = nums[i];
        } else {
            return true
        }
    }
    return false;
}


console.log(containsDuplicates([1, 2, 3, 4, 5]));