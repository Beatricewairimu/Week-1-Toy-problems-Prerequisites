function speedDetector(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed <= speedLimit) {
      console.log("Ok");
  } else if (speed > speedLimit) {
      
      let points = ((speed - speedLimit) / kmPerPoint);

      if (points > 12) {
          console.log("License suspended");
      } else {
          console.log(`Points: ${points}`);
      }
  }
}

speedDetector(80); 
speedDetector(280); 
speedDetector(60);  
