<template>
    <div>
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
}
</script>