function calculateDistance(startSpeed) {
    let speed = startSpeed; 
    const maxSpeed = 120;
    const intervalMinutes = 10;
    const intervalHours = intervalMinutes / 60;
    let totalDistance = 0;

    while (speed <= maxSpeed) {
        totalDistance += speed * intervalHours;
        
        
        if (speed * 2 > maxSpeed) break;

        speed *= 2; 
    }

    return totalDistance;
}


const distance = calculateDistance(1);
console.log("Total distance from A to B:", distance.toFixed(2), "km");
console.log(167);