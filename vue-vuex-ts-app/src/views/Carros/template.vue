<template>
    <div class="espacio-footer">
        <hr>

        <h3 class="text-center text-muted striped-border">
            Carros API
        </h3>

        <div class="float-right">
            <b-button 
                variant="danger"
                size="sm" @click.prevent="cargar" 
                class="mr-1"
            >
                Cargar
            </b-button>
            <b-button 
                variant="danger"
                size="sm" @click.prevent="unir" 
                class="mr-1"
            >
                Unir objetos en consola
            </b-button>
         </div>
    </div>
</template>

<style lang="scss">
hr { 
    display: block;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    margin-left: auto;
    margin-right: auto;
    border-style: inset;
    border-width: 2px;
} 

.espacio-footer{
    margin-bottom: 100px;
}

</style>