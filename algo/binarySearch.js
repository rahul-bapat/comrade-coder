const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const target = 8 ; 

console.log(binarySearch(array, target)); 

let result = binarySearchRecursion(array, target, 0, array.length - 1);

console.log(result);
/**
 * Performs a binary search on a sorted array to find the index of a target element.
 *
 * @param {Array} array - The sorted array to search in.
 * @param {*} target - The target element to search for.
 * @returns {number} - The index of the target element in the array, or -1 if not found.
 */
function binarySearch(array, target) {
    let left = 0; 
    let right = array.length - 1;

    while (left <= right ) {
        let mid = Math.floor ( (left+right) / 2 ) ;

        if(array[mid] === target) {
            return mid; 
        } else if(array[mid] < target) {
            left = mid + 1; 
        }else { 
            right = mid - 1; 
        }
    }
    return -1; 
}


function binarySearchRecursion(array, target, left, right) { 
    if(left >= right) {
        return -1;
    }
        let mid = Math.floor ( (left + right)/ 2); 
        if ( array[mid] === target)  {
            return mid ; 
        } else if (array[mid] < target){
            binarySearchRecursion(array, target, mid + 1, right);
        } else {
            binarySearchRecursion(array, target, left, mid -1 );
        }    

}