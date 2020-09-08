<template>
    <div>
        <input type="text" v-model="transaction.name">
        <input type="text" v-model="transaction.amount">
        <select name="" id="" v-model="transaction.category">
            <option v-for="(element,index) in categories" v-bind:key="index">{{element}}</option>
        </select>
        <button @click="addTransaction">Add</button>
    </div>
</template>
<script>
import {Transaction} from '../model/Transaction'
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