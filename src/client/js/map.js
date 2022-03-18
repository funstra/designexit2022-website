import * as L from "leaflet";
import { GestureHandling } from "leaflet-gesture-handling";

import "leaflet/dist/leaflet.css";
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";

L.Map.addInitHook("addHandler", "gestureHandling", GestureHandling);

var map = window.L.map("map", {
  gestureHandling: true,
  center: [60.60389, 15.63079],
  zoom: 15,
});

L.tileLayer(
  "https://api.maptiler.com/maps/toner/{z}/{x}/{y}.png?key=ugsBnK00iYFCSKkRKe3j#11.0/37.79774/-122.41877",
  {
    attribution:
      '<a class="map-ref" href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(map);

var blackMarker = L.icon({
  iconUrl: "./assets/svg/map-marker.svg",
  iconSize: [60, 60],
});

/*var marker = L.marker([60.60384, 15.63142]).addTo(map);*/
var marker = L.marker([60.60384, 15.63142], { icon: blackMarker }).addTo(map);
