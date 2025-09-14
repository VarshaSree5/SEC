function calculateFare(distanceKm) 
{
  let fare = 0;

  if (distanceKm <= 4) {
    fare = 3;
  } else if (distanceKm <= 9) {
    fare = 3 + 10; 
  } else if (distanceKm <= 19) {
    fare = 3 + 10 + 15; 
  } else {
    fare = 3 + 10 + 15 + 20; 
  }

  return fare;
}


const distanceTravelled = 19.5;
const totalFare = calculateFare(distanceTravelled);
console.log(`Total fare for ${distanceTravelled} km is ₹${totalFare}`);
