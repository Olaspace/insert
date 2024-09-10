function insertionSort(arr) {
    // Iterate over the array from the second element to the end
    for (let i = 1; i < arr.length; i++) {
        // Store the current element to be inserted
        let current = arr[i];
        // Initialize the position to insert the current element
        let j = i - 1;
        
        // Shift elements of the sorted segment to the right to make space
        // for the current element
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Insert the current element into its correct position
        arr[j + 1] = current;
    }
    
    return arr;
}

// Example usage
const array = [5, 2, 9, 1, 5, 6];
console.log("Sorted array:", insertionSort(array));
