<template>
    <div>

        <b-button
            size="sm" 
            @click.prevent="updateProps({id:34545})" 
            class="mr-1"
        >
            emit change prop
        </b-button>
        <h1> Valor recibio de padre {{this.carroForm.id}} </h1>
    </div>
</template>

