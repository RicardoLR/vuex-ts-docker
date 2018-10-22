import {MutationTree} from 'vuex';
import {AuthState, User} from '@/store/modules/auth/types';

type AuthMutationTree = MutationTree<AuthState>;

export const mutations: AuthMutationTree = {

    /** como redux teniendo mi estado inicial state: AuthState seguido del payload de cambio */
    setUser (state: AuthState, user: User) {
        state.user = user;
        state.isLogged = true;
        state.error = false;
        state.errorMessage = '';
    },
    unsetUser (state: AuthState) {
        state.user = null;
        state.isLogged = false;
    },
    authError (state: AuthState, payload: string) {
        state.error = true;
        state.errorMessage = payload;
        state.user = null;
        state.isLogged = false;
    }
};