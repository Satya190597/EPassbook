<template>
    <v-app-bar
    dense
    elevation=0
    class="header-custom primary lighten-2 py-4 text-center white--text"
    color="white">
        <h1>Passbook App</h1>
        <v-spacer></v-spacer>
        <router-link to="/">
            <v-btn text class="white--text">Reset Transactions</v-btn>
        </router-link>  
        <router-link to="/transaction/new">
            <v-btn text class="white--text">Add New Transaction</v-btn>
        </router-link>  
        <router-link to="/transactions/edit">
            <v-btn text class="white--text">Transaction List</v-btn>
        </router-link>
    </v-app-bar>
</template>
<style  scoped>
    .header-custom {
        max-height: 100px;
    }
    a {
        text-decoration: none;
    }
</style>