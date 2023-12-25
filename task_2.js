// Create a car object
const car1 = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
  };
  
  // Create another car object
  const car2 = {
    color: "Blue",
    fuelType: "Petrol",
  };
  
  // Function to merge two car objects
  function mergeCars(car1, car2) {
    // Using the spread operator (...) to merge properties of both cars into a new object
    const mergedCar = { ...car1, ...car2 };
    return mergedCar;
  }
  
  // Call the function to merge the two car objects
  const mergedCar = mergeCars(car1, car2);
  
  // Display the merged car object
  console.log("Merged Car:", mergedCar);
  