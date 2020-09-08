<template>
    <div>
        <table>
            <tr v-for="(element,index) in transactions" v-bind:key="index">
                <td>{{element.id}}</td>
                <td>{{element.name}}</td>
                <td>{{element.date | formatDate}}</td>
                <td>{{element.category}}</td>
                <td>{{element.amount}}</td>
                <td><button v-if="element.active" @click="cancleTransaction(element)">Cancel Transaction</button></td>
            </tr>
        </table>
    </div>
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
            transactions: this.$store.state.transactions
        }
    },
    methods: {
        cancleTransaction : function(transaction) {
            this.$store.dispatch('cancel',transaction)
        }
    }
}
</script>