const rotateObject = (element, angle, duration) => {
    let currentAngle = 0;
    const interval = setInterval(() => {
      currentAngle += angle;
      if (currentAngle > 360) {
        currentAngle = 0;
      }
      element.style.transform = `rotate(${currentAngle}deg)`
    }, duration);
  };
  
  const element = document.querySelector('.leftBottomCircle');
  rotateObject(element, 1, 60);
  

