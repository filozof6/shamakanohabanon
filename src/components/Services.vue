<template>
    <v-card
            class="mx-auto"
            tile
    >
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title>Ayahusca ceremonies</v-list-item-title>
                <v-list-item-subtitle>Ceremony starts usually at 23:00 and lasts 4-5 hours</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title>Flower baths</v-list-item-title>
                <v-list-item-subtitle>Have positive effect on persons intimate and career life</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title>Plant saunas</v-list-item-title>
                <v-list-item-subtitle>
                    Used to treat various diseases and clean the organism from pathogens.
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title>Vomitivos</v-list-item-title>
                <v-list-item-subtitle>
                    Plant coctail that induces vomiting, used to speed up the body detox. To use this treatment
                    patient needs to come to the healing office early in the morning (5:00).
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title>Massages</v-list-item-title>
                <v-list-item-subtitle>
                    Special massages to relieve pain and symptoms of varius diseases.
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title>Master plant diet</v-list-item-title>
                <v-list-item-subtitle>
                    Forms of diets used to heal or learn the healer craft.
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-card>
</template>

<script>

  export default {
    name: 'Services',

    props: {
      healerData: {
        type: Object,
        required: true
      }
    },

    data: () => ({
      openingHours: [
        {
          day: 'Monday',
          morning: '8:00 - 12:00',
          afternoon: '15:00 - 20:00',
        },
        {
          day: 'Tuesday',
          morning: '8:00 - 12:00',
          afternoon: '15:00 - 20:00',
        },
        {
          day: 'Wednesday',
          morning: '8:00 - 12:00',
          afternoon: '15:00 - 20:00',
        },
        {
          day: 'Thursday',
          morning: '8:00 - 12:00',
          afternoon: '15:00 - 20:00',
        },
        {
          day: 'Frday',
          morning: '8:00 - 12:00',
          afternoon: '15:00 - 20:00',
        },
        {
          day: 'Saturday',
          morning: '8:00 - 12:00',
          afternoon: '15:00 - 20:00',
        },
        {
          day: 'Sunday',
          morning: '8:00 - 12:00',
          afternoon: ' - ',
        },
      ],
    }),
    methods: {
    }
  }
</script>
