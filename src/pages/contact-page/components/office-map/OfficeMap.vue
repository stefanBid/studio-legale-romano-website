<script setup lang="ts">
import 'leaflet/dist/leaflet.css';
import L, { LatLngTuple } from 'leaflet'; // Import Leaflet library

import { onMounted, ref } from 'vue';

// Feature 1: Office Location
const officeLocation: LatLngTuple = [40.9150884, 14.79021]; // Example: Milan, Italy
const map = ref<L.Map>();

onMounted(() => {
  // Initialize the map and set its center to the office location with a zoom level of 15
  map.value = L.map('office-map').setView(officeLocation, 19);

  // Add OpenStreetMap tiles as the map layer
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/">CartoDB</a>',
  }).addTo(map.value);

  // Custom icon for the office location
  const customIcon = L.icon({
    iconUrl: '/public/map-logo.svg',
    iconSize: [50, 50], // Dimensione dell'icona in pixel
    iconAnchor: [25, 50], // Punto di ancoraggio (centro alla base)
    popupAnchor: [0, -50], // Posizione del popup rispetto al marker
  });

  // Add a marker to the map for the office location
  L.marker(officeLocation, { icon: customIcon })
    .addTo(map.value)
    .bindPopup('<strong>Studio Legale Romano</strong><br>Via Partenio, 56, Avellino')
    .openPopup();
});
</script>

<template>
  <div
    id="office-map"
    class="rounded-md w-full h-[400px] z-rm-base-1 border-rm-secondary border-2"
  ></div>
  <!--
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.0276294751734!2d14.787786376720947!3d40.91514007136384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133bcc51014eb7b5%3A0xd8e3de02f392103c!2sVia%20Partenio%2C%2056%2C%2083100%20Avellino%20AV!5e0!3m2!1sit!2sit!4v1737590798095!5m2!1sit!2sit"
    width="600"
    height="450"
    style="border: 0"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
--></template>
