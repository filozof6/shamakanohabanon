<template>
    <v-container>
        <v-row class="text-center">
            <v-col
                    class="text-center"
                    v-for="(healer, index) in healers"
                    :key="index"
            >
                <Healer :healer-data="healer" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  import Healer from './Healer';

  export default {
    name: 'HelloWorld',

    components: {
      Healer,
    },

    data: () => ({
      showEnoc: false,
      showRonald: false,
      healers: [
        {
          name: 'Enoc Barbaran Brito',
          image: 'enoc/enoc-image1',
          telephone: '+51988243569',
          email: 'example@example.com',
        },
        {
          name: 'Maestro Cheverenge',
          image: 'ronald/ronald-image2',
          telephone: '+51988243569',
          email: 'example@example.com',
        },
      ],
    }),
    methods: {
    }
  }
</script>
