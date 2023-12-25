function findUniqueElements(arr) {
    var uniqueArray = [];
  
    for (var i = 0; i < arr.length; i++) {
      var isUnique = true;
  
      for (var j = 0; j < uniqueArray.length; j++) {
        if (arr[i] === uniqueArray[j]) {
          isUnique = false;
          break;
        }
      }
  
      if (isUnique) {
        uniqueArray.push(arr[i]);
      }
    }
  
    return uniqueArray;
  }
  
  // Example usage:
  var inputArray = [11, 22, 332, 4, 8,22, 5, 6, 3,5, 7, 8, 11];
  var result = findUniqueElements(inputArray);
  console.log(result);  // Output: [1, 2, 3, 4, 5, 6, 7, 8]
  