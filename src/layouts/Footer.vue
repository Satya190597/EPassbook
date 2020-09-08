<template>
    <v-footer padless class="primary footer-custom lighten-2 py-4 text-center white--text">
        <v-col
        class="text-center"
        cols="12">
            {{ new Date().getFullYear() }} — <strong>E-Passbook.</strong>
        </v-col>
    </v-footer>
</template>
<style scoped>
    .footer-custom {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
    }
</style>