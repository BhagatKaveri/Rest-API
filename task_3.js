function findCommonElements(arr1, arr2) {
    const commonElements = [];
  
    // Iterate through each element in the first array
    for (let i = 0; i < arr1.length; i++) {
      const currentElement = arr1[i];
  
      // Check if the current element is present in the second array
      for (let j = 0; j < arr2.length; j++) {
        if (currentElement === arr2[j]) {
          // If it's a common element, add it to the result array
          commonElements.push(currentElement);
          // Break the inner loop as we found a match for the current element
          break;
        }
      }
    }
  
    return commonElements;
  }
  
  // Example usage
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 4, 5, 6, 7];
  
  const commonElementsArray = findCommonElements(array1, array2);
  
  console.log("Common Elements:", commonElementsArray);
  