<script setup lang="ts">
import 'leaflet/dist/leaflet.css';
import L, { LatLngTuple } from 'leaflet'; // Import Leaflet library
import { onMounted, ref } from 'vue';
import { BaseButton } from '@/components';
import { LockOpenIcon, LockClosedIcon } from '@heroicons/vue/24/outline';

// Feature 1: Office Location
const officeLocation: LatLngTuple = [40.9150884, 14.79021];
const map = ref<L.Map>();

onMounted(() => {
  // Initialize the map and set its center to the office location with a zoom level of 15
  map.value = L.map('office-map', { scrollWheelZoom: false }).setView(officeLocation, 19);

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

// Feature 2: Manage Scroll Wheel Zoom on the map
const isScrollEnabled = ref(false);
const showEnableScrollPanel = ref(false);

const handleManageScroll = (): void => {
  if (isScrollEnabled.value) {
    // Disabilita lo zoom con la rotellina del mouse
    isScrollEnabled.value = false;
    map.value?.scrollWheelZoom.disable();
    return;
  } else {
    // Abilita lo zoom con la rotellina del mouse
    isScrollEnabled.value = true;
    map.value?.scrollWheelZoom.enable();
  }
};
</script>

<template>
  <div
    class="relative w-full h-[400px] shadow-lg"
    @mouseover="showEnableScrollPanel = true"
    @mouseleave="showEnableScrollPanel = false"
  >
    <div
      id="office-map"
      class="absolute rounded-md w-full h-[400px] z-rm-base-1 border-rm-secondary border-2"
    ></div>
    <transition name="fade">
      <div
        v-if="showEnableScrollPanel"
        id="scroll-panel"
        class="absolute flex flex-col items-end justify-start w-fit bg-transparent z-rm-base-2 right-2.5 top-2.5 bottom-2-5 h-fit"
      >
        <BaseButton
          content-size="small"
          spacing-size="small"
          :icon="isScrollEnabled ? LockOpenIcon : LockClosedIcon"
          @click="handleManageScroll"
        />
      </div>
    </transition>
  </div>
</template>
