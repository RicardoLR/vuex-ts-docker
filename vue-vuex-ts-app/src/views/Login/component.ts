import {Component, Vue} from "vue-property-decorator";
import {Action, State} from "vuex-class";
import {Route} from "vue-router";
import {User} from "@/store/modules/auth/types";
import Template from './template.vue';
import Secret from "@/views/Secret/component";

const namespace: string = "authModule";

Component.registerHooks([
    'beforeRouteEnter'
]);

@Component({
    mixins: [Template]
})
export default class Login extends Vue {

    // Partial algunos valores del Objeto pueden venir vacios
    public user: Partial<User> = {};
    
    @State('isLogged', {namespace}) isLogged !: boolean;
    @State('error', {namespace}) error !: boolean;
    @State('errorMessage', {namespace}) errorMessage !: string;
    @Action('login', {namespace}) login !: Function;
    
    signIn (): void {
        this.login(this.user).then(() => {
            if ( ! this.error) {
                this.$router.push('/secret');
            }
        })
    }

    async beforeRouteEnter (from: Route, to: Route, next: any) {
        next((vm: Secret) => {
            if (vm.isLogged === true) {
                next('/secret');
            }
        })
    }
}

