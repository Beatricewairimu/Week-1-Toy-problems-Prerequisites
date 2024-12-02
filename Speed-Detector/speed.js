
function radarDevice(speed) { //This function is called radar device.
  const velocityLimit = 70; //The legal velocitylimit is 70.
  const distancePerPoint = 5; // The distance travelled per every point is 5km.

  if (speed <= velocityLimit) {//This a conditional statement. it checks if the speed is <= the velocitylimit
      console.log("Ok"); //If true it will display the string "ok".
  } else if (speed > velocityLimit) {
      // If the speed is greater than the velocitylimit,velocitylimit is subtracted from the speedlimit and divided by the distanceperpoint.
      let points = ((speed - velocityLimit) / distancePerPoint);

      if (points > 12) {
          console.log("License suspended"); //This checks for points exceeded and is > than 12, it displays licence suspended.
      } else {
          console.log(`Points: ${points}`);//If points are not exceeded,it displays the value in the points container.
      }
  }
}
//Here i am calling the function velocity is being called.
radarDevice(80); 
radarDevice(280); 
radarDevice(60);  
