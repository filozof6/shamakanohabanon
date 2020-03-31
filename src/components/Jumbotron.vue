<template>
    <v-jumbotron color="grey lighten-2">
            <v-layout align-center>
                <v-flex>
                    <h1 class="display-3">Welcome to the site</h1>
                    <span class="subheading">
                        This site is the web presentation of traditional Peruvian healers that have acquired healing
                        abilities through years of so called master plant diets. They can provide healing of the mind,
                        body, spirit complex through use of plants native to Amazon jungle and sacred brew ayahuasca.
                    </span>
                </v-flex>
            </v-layout>
    </v-jumbotron>
</template>

<script>

  export default {
    name: 'Jumbotron',


    data: () => ({
      show: false,
    }),
  }
</script>
