var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: 0,
    maxBounds: [[0, 0], [1939, 3367]],
    maxBoundsViscosity: 1.0
  });
  
  var imageUrl = 'https://raw.githubusercontent.com/DereC4/derexsmp/refs/heads/main/docs/pano4_2025.jpg'; 
  var imageBounds = [[0, 0], [1939, 3367]]; 
  
  L.imageOverlay(imageUrl, imageBounds).addTo(map);
  
  map.fitBounds(imageBounds);