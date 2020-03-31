<template>
    <div>
        <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
                data-projection="EPSG:4326" style="height: 400px">
            <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

<!--            <vl-geoloc @update:position="geolocPosition = $event">-->
<!--                <template slot-scope="geoloc">-->
<!--                    <vl-feature v-if="geoloc.position" id="position-feature">-->
<!--                        <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>-->
<!--                        <vl-style-box>-->
<!--                            <vl-style-icon :src="require(`../assets/pin2.png`)" :scale="0.4"-->
<!--                                           :anchor="[0.5, 1]"></vl-style-icon>-->
<!--                        </vl-style-box>-->
<!--                    </vl-feature>-->
<!--                </template>-->
<!--            </vl-geoloc>-->

            <vl-feature id="office-feature">
                <vl-geom-point :coordinates="officePosition"></vl-geom-point>
                <vl-style-box>
                    <vl-style-icon :src="require(`../assets/pin2.png`)" :scale="1" :anchor="[0.5, 1]"></vl-style-icon>
                </vl-style-box>
            </vl-feature>

            <vl-layer-tile id="osm">
                <vl-source-osm></vl-source-osm>
            </vl-layer-tile>
        </vl-map>
        <div style="padding: 20px">
            Zoom: {{ zoom }}<br>
            Center: {{ center }}<br>
            Rotation: {{ rotation }}<br>
            My geolocation: {{ geolocPosition }}
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Map',
    data() {
      return {
        zoom: 13,
        center: [-74.57443711954969, -8.353774765254514],
        rotation: 0,
        geolocPosition: [-8.353774, -74.574480],
        officePosition: [-74.574480, -8.353774],
      }
    },
  }
</script>