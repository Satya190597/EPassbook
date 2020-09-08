<template>
    <div>
        <v-card
        v-if="isDataExist()"
        max-width="600px"
        class="mx-auto">
            <v-card-title 
            class="font-weight-medium">
                Do you want to reset all the transaction?
            </v-card-title>
            <v-card-actions>
                <v-btn 
                text 
                color="deep-purple accent-4" 
                @click="reset()">
                Yes
                </v-btn>   
            </v-card-actions>
        </v-card>
        <v-card
        v-if="!isDataExist()"
        max-width="600px"
        class="mx-auto">
            <v-card-title v-if="!isDataExist()" class="font-weight-medium">
                No transaction found.
            </v-card-title>            
        </v-card>
    </div>
</template>
<script>
export default {
    methods: {
        isDataExist: function() {
            console.log(this.$store.getters.transactions.length)
            return this.$store.getters.transactions.length > 0 ? true : false
        },
        reset: function() {
            console.log('Reset')
            this.$store.commit('reset')
        }
    }
}
</script>