
let blockTarget = document.querySelector('.frame');
let dragging = false;
let offsetX, offsetY;

blockTarget.addEventListener('mousedown', function (event) {
  if (event.button === 0 ){
  let rect = blockTarget.getBoundingClientRect();

  if (blockTarget.classList.contains('reset-position')) {
    blockTarget.style.width = '200px';
    blockTarget.style.height = '200px';
    offsetX = 0; 
    offsetY = 0; 
    blockTarget.classList.remove('reset-position');
  } else {
  
  offsetX = event.clientX - rect.left;
  offsetY = event.clientY - rect.top;
  dragging = true;
  }
  }
});
document.addEventListener('mousemove', function (event) {
  if (dragging) {
    let newWidth = event.clientX - offsetX;
    let newHeight = event.clientY - offsetY;

    blockTarget.style.width = newWidth  + 'px';
    blockTarget.style.height = newHeight  + 'px';
  }
});

blockTarget.addEventListener('mouseup', function (event) {
  if (dragging) {
    dragging = false;
  } else {
    blockTarget.classList.add('reset-position');
  }
});




