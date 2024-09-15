const twoSum =  (nums, target) =>  { 
    let storage = {}; 

    for (let [index, num ] of nums.entries()) { 
        if(storage[num]  !== undefined) { 
            return [storage[num], index];
        }
        storage[target-num] = index; 
        console.log(storage);
    }

}

console.log(twoSum([2,7,6,9], 15 )); 