<template>
    <div>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-left">Day of the week</th>
                    <th class="text-left">Morning</th>
                    <th class="text-left">Afternoon</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="openingHour in openingHours" :key="openingHour.day">
                    <td>{{ openingHour.day }}</td>
                    <td>{{ openingHour.morning }}</td>
                    <td>{{ openingHour.afternoon }}</td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script>

  export default {
    name: 'OpeningHours',

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
