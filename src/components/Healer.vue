<template>
    <v-card class="mx-auto" max-width="344">
        <v-img :src="require(`../assets/images/healers/${healerData.image}.jpg`)" aspect-ratio="1" contain="1"/>

        <v-card-title>
            {{healerData.name}}
        </v-card-title>

        <v-card-actions>
            <v-btn text @click="makeCall(healerData.telephone)">Call</v-btn>

            <v-btn color="purple" text @click="sendEmail(healerData.email)">
                Send Email
            </v-btn>

            <v-spacer />

            <!--                        <v-btn icon @click="showEnoc = !showEnoc">-->
            <!--                            <v-icon>{{ showEnoc ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>-->
            <!--                        </v-btn>-->
        </v-card-actions>

        <v-expand-transition>
            <div v-show="show">
                <v-divider />

                <v-card-text>
                    I'm a thing. But, like most politicians, he promised more than he
                    could deliver. You won't have time for sleeping, soldier, not with
                    all the bed making you'll be doing. Then we'll go with that data
                    file! Hey, you add a one and two zeros to that or we walk! You're
                    going to do his laundry? I've got to find a way to escape.
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script>

  export default {
    name: 'HelloWorld',

    props: {
      healerData: {
        type: Object,
        required: true
      }
    },

    data: () => ({
      show: false,
    }),
    methods: {
      makeCall(telephoneNumber) {
        window.open('tel:' + telephoneNumber)
      },
      sendEmail(email) {
        window.open('mailto:' + email)
      },
    }
  }
</script>
