import {Component, Vue} from "vue-property-decorator";
import {Route} from 'vue-router';
import {State} from 'vuex-class';
import Template from './template.vue';
import {User} from '@/store/modules/auth/types';
import AuthMixin from "@/mixins/AuthMixin";
const namespace: string = 'authModule';

Component.registerHooks([
    'beforeRouteEnter'
]);

@Component({
    mixins: [Template, AuthMixin]
})
export default class Secret extends Vue {
    @State('isLogged', {namespace}) isLogged !: boolean;
    @State('user', {namespace}) user !: User;
    
    async beforeRouteEnter (from: Route, to: Route, next: any) {
        next((vm: Secret) => {
            if (vm.isLogged === false) {
                next('/login');
            }
        })
    }
    
    get fullUser (): string {
        return `Email: ${this.user.email}, Password: ${this.user.password}`;
    }
}