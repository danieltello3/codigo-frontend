mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsdGVrIiwiYSI6ImNrbXpveHN4cjBmdjMydm5ueWF0cDhmeTEifQ.9UVtyFjnEmtF4wPRA3G5bQ';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-77.02824, -12.04318], // starting position
zoom: 11 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());