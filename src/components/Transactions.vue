<template>
    <v-card
    max-width="90%"
    class="mx-auto">
        <v-simple-table 
        height=300
        v-if="isDataExist()">
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">ID</th>
                        <th class="text-left">Name</th>
                        <th class="text-left">Date</th>
                        <th class="text-left">Category</th>
                        <th class="text-left">Amount</th>
                        <th class="text-left">Control</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(element,index) in transactions" v-bind:key="index">
                        <td>{{element.id}}</td>
                        <td>{{element.name}}</td>
                        <td>{{element.date | formatDate}}</td>
                        <td v-fontDecorator="element.category">{{element.category}}</td>
                        <td v-fontDecorator="element.category">{{element.amount}}</td>
                        <td>
                            <v-btn 
                            text 
                            color="error"
                            v-if="element.active" @click="cancleTransaction(element)">
                                Cancel Transaction
                            </v-btn>
                            <v-btn
                            text
                            v-if="!element.active">
                                Canceled
                            </v-btn>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="5">
                            Total Balance
                        </td>
                        <td>
                            {{totalBalance()}}
                        </td>
                    </tr>
                </tbody>
            </template>        
        </v-simple-table>
        <v-card-title v-if="!isDataExist()">No transaction found.</v-card-title>
    </v-card>
</template>
<script>
export default {
    name: 'Transactions',
    filters: {
        formatDate: function(value) {
            if(!value)
                return ''   
            const inputDate = new Date(value);     
            return inputDate.getDate() + '/' + inputDate.getMonth() + "/" + inputDate.getFullYear()
        }
    },
    data: function() {
        return {
            transactions: this.$store.getters.transactions
        }
    },
    directives: {
        fontDecorator: {
            inserted: function(el,binding) {
                binding.value === 'Debit' ? el.style.color = 'red' : el.style.color = 'green' 
            }
        }
    },
    methods: {
        cancleTransaction: function(transaction) {
            this.$store.dispatch('cancel',transaction)
        },
        totalBalance: function() {
            var balance = 0
            if(this.transactions.length<=0)
             return balance            
            this.transactions.forEach(element => {
                if(element.category==='Credit')
                    balance = balance + parseInt(element.amount)
                else
                    balance = balance - parseInt(element.amount)
            });            
            return balance;
        },
        isDataExist: function() {
            return this.$store.getters.transactions.length > 0 ? true : false
        }
    }
}
</script>