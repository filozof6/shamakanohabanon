<template>
    <v-app>
        <v-app-bar
                app
                color="primary"
                dark
        >
            <div class="d-flex align-center">
                <div class="logo">
                    Alternative medicine
                </div>
            </div>

            <v-spacer></v-spacer>

<!--            <v-btn-->
<!--                    href="https://github.com/vuetifyjs/vuetify/releases/latest"-->
<!--                    target="_blank"-->
<!--                    text-->
<!--            >-->
<!--                <span class="mr-2">Latest Release</span>-->
<!--                <v-icon>mdi-open-in-new</v-icon>-->
<!--            </v-btn>-->
        </v-app-bar>

        <v-content>
            <v-container>
                <Jumbotron />
                <v-divider class="my-3"></v-divider>
                <h2>Our healers</h2>
                <br />
                <HelloWorld />
                <v-divider class="my-3"></v-divider>
                <h2>Where do you find us</h2>
                <br />
            </v-container>
            <Map />
            <v-container>
                <h2>Opening hours</h2>
                <OpeningHours />
                <h2>Services</h2>
                <Services />
            </v-container>
            <br />
            <v-container class="center">
                <p>
                    The healing office has one spare room and dedicated bathroom with shower to very sick patients or
                    persons undergoing healing/learning diets. The room has internet connection, bed, office desk and
                    office
                    chair.
                </p>
                <p>
                    <strong>
                        During the healing process its very important that the patient follows strictly the rules set by
                        the
                        healer otherwise he/she can suffer severe adverse effects and complications!
                    </strong>
                </p>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
  import HelloWorld from './components/HelloWorld';
  import Jumbotron from './components/Jumbotron';
  import Map from './components/Map';
  import OpeningHours from './components/OpeningHours';
  import Services from './components/Services';

  export default {
    name: 'App',

    components: {
      HelloWorld,
      Jumbotron,
      Map,
      OpeningHours,
      Services,
    },

    data: () => ({
      //
    }),
  };
</script>

<style>
    .logo {
        font-size: 25px;
        font-weight: bolder;
    }

    h1 {
        margin-bottom: 20px;
    }

    .center {
        text-align: center;
    }
</style>