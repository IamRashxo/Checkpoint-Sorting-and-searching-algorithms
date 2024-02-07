function insertionSort(arr) {
    // Iterate through the array, starting from the second element (index 1)
    for (let i = 1; i < arr.length; i++) {
      // Take the current element to be inserted
      const current = arr[i];
  
      // Work with the first i-1 elements, which are considered sorted
      let j = i - 1;
  
      // Shift elements greater than current one position right until we find the insertion point
      while (j >= 0 && current < arr[j]) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Insert the current element at the correct position
      arr[j + 1] = current;
    }
  
    return arr;
  }
  
  // Example usage
  const unsortedArray = [5, 2, 8, 1, 3];
  const sortedArray = insertionSort(unsortedArray);
  console.log(sortedArray); // Output: [1, 2, 3, 5, 8]
  