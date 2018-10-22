import {Component, Vue} from 'vue-property-decorator';
import {Mutation} from 'vuex-class';

/**
 * Metodo para cerrar sesion y mandar con el router a login
 * 
 * el vue-router con $ router
 */
@Component
export default class AuthMixin extends Vue {
    @Mutation('unsetUser', {namespace: 'authModule'}) unsetUser !: any;
    
    logout () {
        this.unsetUser();
        this.$router.push('/login');
    }
}

/**
 * mixins para compartir informacion
 * 
 * en la "view secret" y el "nav de logout"
 */