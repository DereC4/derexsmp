var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: 0,
    maxBounds: [[0, 0], [886, 1773]],
    maxBoundsViscosity: 1.0
  });
  
  var imageUrl = '/docs/pl3xmap.png'; 
  var imageBounds = [[0, 0], [886, 1773]]; 
  
  L.imageOverlay(imageUrl, imageBounds).addTo(map);
  
  map.fitBounds(imageBounds);