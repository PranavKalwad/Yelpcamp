mapboxgl.accessToken=mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-73.5804, 45.53483],
    pitch: 60,
    bearing: -60,
    zoom: 10
});