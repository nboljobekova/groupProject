import DG from "2gis-maps";

window.onload = function() {
    if (!window.location.pathname.includes("map.html")) {
        return null;
    }

    DG.map("map", {
        center: [42.85, 74.61],
        zoom: 13
    });
    DG.marker([42.87,74.59]).addTo(map).bindPopup("Amalie Beauty Studio");
};
