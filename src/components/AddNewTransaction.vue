<template>
    <v-card
    class="mx-auto pa-md-4"
    max-width="500px">
        <v-card-title 
        class="font-weight-medium">
           Add A New Transaction
        </v-card-title>
        <v-form>
            <v-text-field 
            type="text" 
            v-model="transaction.name">
            </v-text-field>
            <v-text-field 
            type="number" 
            v-model="transaction.amount">
            </v-text-field>
            <v-select
            v-model="transaction.category"
            v-bind:items="categories">
            </v-select>
            <v-btn text color="deep-purple accent-4" @click="addTransaction">Add</v-btn>
        </v-form>
    </v-card>
</template>
<script>
export default {
    name: 'AddNewTransaction',
    data: function() {
        return {
            transaction: {
                id: null,
                name: null,
                amount: 0,
                date: new Date(),
                category: 'Credit',
                active: true
            },
            categories : ['Credit','Debit']
        }
    },
    methods : {
        addTransaction: function() {     
            this.$store.dispatch('add',this.transaction) 
            this.reset()         
        },
        reset: function() {
            this.transaction = {
                id: null,
                name: null,
                amount: 0,
                date: new Date(),
                category: 'Credit',
                active: true
            }  
        }
    }
}
</script>