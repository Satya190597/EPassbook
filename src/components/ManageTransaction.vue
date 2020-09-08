<template>
    <div>
        <h1>Manage Transaction</h1>
        <AddNewTransaction/>
    </div>
</template>
<script>
import AddNewTransaction from './AddNewTransaction'
export default {
    name: 'ManageTransactions',
    components: {
        AddNewTransaction : AddNewTransaction
    },
    data: function() {
        return {

        }
    },
    methods: {

    }
}
</script>