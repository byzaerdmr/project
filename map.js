// Haritayı belirli bir genişlik ve zoom seviyesiyle başlat
var map = L.map('map', {
    center: [37.0, 35.0], // Harita başlangıç noktası
    zoom: 7, // Küçük harita için zoom seviyesini yükselttik
    maxBounds: [[33, 25], [42, 45]], // Türkiye sınırlarına odaklanabilir
    maxBoundsViscosity: 1.0
});

// OpenStreetMap katmanını ekleyelim
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap Katkıda Bulunanlar'
}).addTo(map);

// FitBounds ile haritayı belirli bir alana küçültelim
map.fitBounds([
    [36.5, 28.5],  // Güneybatı Köşe (Muğla çevresi)
    [38.0, 30.0]   // Kuzeydoğu Köşe
]);

// Yangın bölgelerini gösteren noktalar ekleyelim
L.marker([36.8, 28.3]).addTo(map)
    .bindPopup('Yangın Noktası 1');

L.marker([37.0, 28.7]).addTo(map)
    .bindPopup('Yangın Noktası 2');
