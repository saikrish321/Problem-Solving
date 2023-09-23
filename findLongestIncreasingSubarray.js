function findLongestIncreasingSubarray(arr) {
    let maxLength = 1;  // Initialize the length of the longest increasing subarray
    let currentLength = 1;  // Initialize the length of the current increasing subarray
    let startIndex = 0;  // Initialize the starting index of the current subarray
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            currentLength++;
        } else {
            if (currentLength > maxLength) {
                maxLength = currentLength;
                startIndex = i - currentLength;
            }
            currentLength = 1;
        }
    }
    
    // Check if the longest increasing subarray extends to the end of the array
    if (currentLength > maxLength) {
        maxLength = currentLength;
        startIndex = arr.length - currentLength;
    }
    
    // Extract the longest increasing subarray
    const longestIncreasingSubarray = arr.slice(startIndex, startIndex + maxLength);
    
    return longestIncreasingSubarray;
}

// Example usage:
const arr = [1, 2, 3, 1, 2, 3, 4, 5, 1, 2];
const longestSubarray = findLongestIncreasingSubarray(arr);
console.log("Longest increasing subarray:", longestSubarray);
