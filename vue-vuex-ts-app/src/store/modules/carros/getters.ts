import { GetterTree } from 'vuex';
import {Carro, CarroState} from '@/store/modules/carro/types';
import { RootState } from '@/store/types';

type TodoGetter = GetterTree<CarroState, RootState>;

export const getters: TodoGetter = {


    carrosAll (state: CarroState): Carro[] {
        const {carros} = state;
        return carros.filter(carro => !carro.done);
    },

    carrosSold (state: CarroState): Carro[] {
        const {carros} = state;
        return carros.filter(carro => carro.vendido);
    },

    carrosUnidos (state: CarroState): Carro[] {
        const {carrosUnidos} = state;
        return carrosUnidos;
    },
};