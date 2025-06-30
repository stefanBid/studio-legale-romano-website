<script setup lang="ts">
import 'leaflet/dist/leaflet.css';
import L, { type LatLngTuple } from 'leaflet'; // Import Leaflet library
import { onMounted, ref } from 'vue';
import { openLink } from '@/utils';
import { BaseButton } from '@/components';
import { LockOpenIcon, LockClosedIcon, MapIcon } from '@heroicons/vue/24/outline';

interface OfficeMapProps {
  latCoordinate: number;
  lngCoordinate: number;
  zoomLevel?: number;
  googleMapsLink: string;
  pointIconPublicPath: string;
}

const props = withDefaults(defineProps<OfficeMapProps>(), {
  zoomLevel: 15,
});

// Feature 1: Office Location
const officeLocation: LatLngTuple = [props.latCoordinate, props.lngCoordinate];
const map = ref<L.Map>();

onMounted(() => {
  // Initialize the map and set its center to the office location with a zoom level of 15
  map.value = L.map('office-map', { scrollWheelZoom: false }).setView(
    officeLocation,
    props.zoomLevel,
  );

  // Add OpenStreetMap tiles as the map layer
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/">CartoDB</a>',
  }).addTo(map.value);

  // Custom icon for the office location
  const customIcon = L.icon({
    iconUrl: props.pointIconPublicPath,
    iconSize: [50, 50], // Dimensione dell'icona in pixel
    iconAnchor: [25, 50], // Punto di ancoraggio (centro alla base)
    popupAnchor: [0, -50], // Posizione del popup rispetto al marker
  });

  // Add a marker to the map for the office location
  L.marker(officeLocation, { icon: customIcon })
    .addTo(map.value)
    .bindPopup(
      '<span class="!text-rm-main !font-lora !text-center flex flex-col justify-center items-center transition-all duration-300 ease-in-out"><strong>Studio Legale Romano</strong><span class="block !text-center !text-rm-main-light">Via Partenio, 56, Avellino</span></span>',
    )
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
      class="absolute rounded w-full h-[400px] z-rm-base-1 border-rm-secondary border-2 focus-visible:outline-rm-secondary"
    ></div>
    <div
      id="extra-panel"
      class="absolute flex flex-col items-end justify-start gap-3 transition-all duration-300 ease-in-out bg-transparent w-fit z-rm-base-2 right-3 top-3 bottom-3 h-fit"
    >
      <BaseButton size="small" :icon="MapIcon" @click="openLink(props.googleMapsLink)" />
      <transition name="fade">
        <BaseButton
          v-if="showEnableScrollPanel"
          size="small"
          :icon="isScrollEnabled ? LockOpenIcon : LockClosedIcon"
          @click="handleManageScroll"
        />
      </transition>
    </div>
  </div>
</template>
