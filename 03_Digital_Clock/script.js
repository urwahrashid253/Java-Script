const clock = document.querySelector('#clock');

// Update the clock every second using setInterval
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);