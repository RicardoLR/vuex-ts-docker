import { Component, Vue } from 'vue-property-decorator';

// mis componentes
import TodoList from '@/components/TodoList/component';
import TodoForm from '@/components/TodoForm/component';

import Carros from '@/views/Carros/component';


import {Action, Getter, State} from 'vuex-class';

import {Todo} from '@/store/modules/todo/types';
import Template from './template.vue';
const namespace: string = 'todoModule';


@Component({
    components: {
        TodoList, TodoForm, Carros,
    },
    mixins: [Template],
})
export default class TodoApp extends Vue {

    @Action('fetchData', {namespace}) fetchData!: Function;

    /**
     * seran pasados como props a los componentes
     */
    @Getter('todos', {namespace}) todos!: Todo[];
    @Getter('done', {namespace}) done!: Todo[];
    
    @State('error', {namespace}) errorLoadingTodos!: boolean;
    @State('errorMessage', {namespace}) errorMessage!: string;
    
    mounted () {

        /** usar route, no router como en push */
        console.log(this.$route.params.id);
        this.fetchData();
    }
}
