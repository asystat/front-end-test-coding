<template>
    <LMap
        v-if="lat && lon"
        :zoom="zoom"
        :center="{ lat: lat, lng: lon }"
        :options="mapOptions"
        class="map"
    >
        <LTileLayer
        :url="url"
        :attribution="attribution"
        />

        <LMarker :lat-lng="{ lat: lat, lng: lon }"/>
    </LMap>
</template>

<script>
import { LMap, LTileLayer, LMarker} from "vue2-leaflet";
import {Icon} from "leaflet";
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
export default {
  name: 'Map',
  data: function(){
      return {
            zoom: 13,
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            currentZoom: 11.5,
            mapOptions: {
                zoomSnap: 0.5
            }
      }
  },
  components: {
      LMap, LTileLayer, LMarker
  },
  props: {
    lat: Number,
    lon: Number
  }
}
</script>