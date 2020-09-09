<template>
    <v-card
    class="mx-auto pa-md-4"
    max-width="500px">
        <v-card-title 
        class="font-weight-medium">
           Add A New Transaction
        </v-card-title>
        <v-form
        ref="form">
            <!-- BENEFICIARY NAME -->
            <v-text-field 
            type="text" 
            label="Beneficiary name"
            :rules="nameRule"        
            v-model="transaction.name">
            </v-text-field>
             <!-- AMOUNT -->
            <v-text-field 
            type="number" 
            label="Amount"
            :rules="amountRule"
            v-model="transaction.amount">
            </v-text-field>
             <!-- TRANSACTION TYPE -->
            <v-select
            label="Transaction Type"
            v-model="transaction.category"
            v-bind:items="categories">
            </v-select>
            <v-btn text color="deep-purple accent-4" @click="addTransaction">Add</v-btn>
        </v-form>
        <!-- SNACKBAR -->
        <v-snackbar
        color="primary"
        v-model="snackbar">
            {{ text }}
            <template v-slot:action="{ attrs }">
                <v-btn
                color="white"
                text
                v-bind="attrs"
                @click="snackbar = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
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
            categories : ['Credit','Debit'], 
            text: 'Transaction added successfully.',
            snackbar:false         
        }
    },
    computed: {
        nameRule: function() {
            return [v => !!v || 'Name is required']
        },
        amountRule: function() {
            return [v => v > 0 || 'Amount must be greather then zero']
        } 
    },
    methods : {
        addTransaction: function() {    
            if(this.$refs.form.validate())
            {
                this.$store.dispatch('add',this.transaction)
                this.reset()
                this.$refs.form.resetValidation()
                this.snackbar = true
            }         
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