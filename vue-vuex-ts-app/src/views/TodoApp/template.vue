<template>
    <div>
        <div v-if="!errorLoadingTodos">
            <b-row class="my-5">
                
                <!-- 
                    mi componente 
                -->
                <todo-form class="mx-auto"/>
            </b-row>
            <b-row>
                <b-col>
                    <h2 class="text-center text-muted">Todos pending</h2>

                    <!-- 
                        mi componente 
                    -->
                    <todo-list :todos="todos" />
                </b-col>

                <b-col>
                    <h2 class="text-center text-muted">Todos finished</h2>
                    
                    <!-- 
                        mi componente 
                    -->
                    <todo-list :todos="done" />
                </b-col>
            </b-row>

            <h2> Obtener parametro puesto en router {{ $route.params.id }}</h2>
            <Carros />
        </div>

        <div v-else class="alert alert-danger text-center">
            Error cargando los todos
            <p>{{ errorMessage }}</p>
        </div>
    </div>
</template>