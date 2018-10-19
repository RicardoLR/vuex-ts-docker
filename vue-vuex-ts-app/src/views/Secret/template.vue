<template>
    <b-alert show variant="success" v-if="user">
        <h4 class="alert-heading">Bien hecho!</h4>
        <p>
            Bienvenido a la página secreta <b>{{ fullUser }}</b>!
        </p>
        <hr>
        <p class="mb-0">
            Puedes cerrar sesión desde <b @click="logout">aquí</b> o desde la navegación
        </p>
    </b-alert>
</template>
