import DG from "2gis-maps";

window.onload = function() {
    if (!window.location.pathname.includes("map.html")) {
        return null;
    }

    DG.map("map", {
        center: [54.98, 82.89],
        zoom: 13
    });
};
