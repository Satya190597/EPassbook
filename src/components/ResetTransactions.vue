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
                <v-dialog v-model="dialog" persistent max-width="500">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        text 
                        color="deep-purple accent-4" 
                        v-bind="attrs"
                        v-on="on">
                            Yes
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title class="headline">Are you sure to reset all the transactions?</v-card-title>
                        <v-card-text>
                            Reset transaction will remove all the transaction history.
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
                        <v-btn color="green darken-1" text @click="reset()">Agree</v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
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
    data: function() {
        return {
            dialog: false
        }
    },
    methods: {
        isDataExist: function() {            
            return this.$store.getters.transactions.length > 0 ? true : false
        },
        reset: function() {            
            this.$store.commit('reset')
            this.dialog = false
        }
    }
}
</script>