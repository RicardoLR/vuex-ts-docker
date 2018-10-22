import { Module } from 'vuex';

import { state } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

import { CarroState } from './types';
import { RootState } from '@/store/types';

const namespaced: boolean = true;

export const carrosModule: Module<CarroState, RootState> = {
    namespaced,

    actions,
    mutations,
    state,
    getters,
};
