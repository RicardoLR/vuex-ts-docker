import {Component, Vue} from "vue-property-decorator";
import {Route} from 'vue-router';
import {State} from 'vuex-class';
import Template from './template.vue';
import {User} from '@/store/modules/auth/types';
import AuthMixin from "@/mixins/AuthMixin";
const namespace: string = 'authModule';

/**
 * Hooks para proteger ruta
 */
Component.registerHooks([
    'beforeRouteEnter'
]);

@Component({
    mixins: [Template, AuthMixin]
})
export default class Secret extends Vue {
    @State('isLogged', {namespace}) isLogged !: boolean;
    @State('user', {namespace}) user !: User;
    
    /**
     * los hooks no tienes contexto de la clase, ej this.isLoggedes undefined
     */
    async beforeRouteEnter (from: Route, to: Route, next: any) {
        next((vm: Secret) => {

            /** vm: MiClase, podemos acceder dentro a vm.miState etc 
             * 
             * Lo mas comveniente seria del Token tomar el rol
            */
            if (vm.isLogged === false) {
                next('/login');
            }
        })
    }
    
    /**
     * Propiedades computadas con GET 
     */
    get fullUser (): string {
        return `Email: ${this.user.email}, Password: ${this.user.password}`;
    }
}