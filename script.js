$.getJSON('https://api.ipgeolocation.io/ipgeo?apiKey=2e3264ba3e344fcdacf577972cde6a83', function(data) {
  document.getElementById("dox").textContent = JSON.stringify(data);
});
