import Vue from 'vue';
import { AxiosResponse } from 'axios';

import {ActionContext, ActionTree} from 'vuex';

import { RootState } from '@/store/types';
import { CarroState, Carro } from './types';

type CarroActionContext = ActionContext<CarroState, RootState>;
type CarroActionTree = ActionTree<CarroState, RootState>;

export const actions: CarroActionTree = {

    /**
     * Peticion de axios que hace "commit" a "mutations.ts y se obtendra con el getter"
     */
    async getAll (context: CarroActionContext): Promise<any> {
        try {
            const response: AxiosResponse = await Vue.axios({
                method: 'POST',
                url: '/api/carros?unir=false',
                headers: {
                    'Authorization': 'Bearer 43' //+localStorage.getItem('userToken')
                }
            });
            const payload: Carro[] = response && response.data.carros;
            context.commit('carrosLoaded', payload);

            return payload; 

        } catch (e) {
            context.commit('todosError', e.message);

        } finally {
            console.log('petición para obtener todos finalizada');
        }
    },

      
    async unirAgenciasCarros (context: CarroActionContext, carrosOld: Carro[]): Promise<any> {
        try {
            const response: AxiosResponse = await Vue.axios({
                method: 'POST',
                url: '/api/carros?unir=true',
                data: {
                    carros: carrosOld
                }
            });
            if (response && response.data.carros) {

                // commit a mutation
                context.commit('onionCarsMutation', response.data.carros);                
            }

            const payload: Carro[] = response && response.data.carros;
            console.log("payload", payload);
            return payload; 

        } catch (e) {
            context.commit('todosError', e.message);
        } finally {
            console.log('petición para insertar todos finalizada');
        }
    },



}
















