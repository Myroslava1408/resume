
document.addEventListener('DOMContentLoaded',function () {
  let trafficLights = document.querySelector('.traffic_lights');
  let lamps = trafficLights.querySelectorAll('div');
  let button = document.querySelector('button');

  let currentLightIndex = 0;

  let lightColors = ['red','yellow','green'];

  function updateTrafficLight() {
    for (let i = 0; i < lightColors.length; i++ ) {
      lamps[i].style.backgroundColor = i === currentLightIndex ? lightColors[i] : 'gray';
    }
  }

  function switchTrafficLight() {
    currentLightIndex++;
    if (currentLightIndex === lightColors.length) {
      currentLightIndex = 0;
    }
    updateTrafficLight();
  }
  

 button.addEventListener('click', switchTrafficLight);

 updateTrafficLight();
});
  






