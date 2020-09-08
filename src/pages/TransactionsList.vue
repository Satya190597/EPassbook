<template>
    <div>
        <h1>Transaction List</h1>
        <Transactions  />
    </div>
</template>
<script>
import Transactions from '../components/Transactions'
export default {
    name: 'TransactionList',
    components: {
        Transactions: Transactions
    },
    data: function() {
        return {
            transactionList: this.$store.getters.transactions
        }
    }
}
</script>