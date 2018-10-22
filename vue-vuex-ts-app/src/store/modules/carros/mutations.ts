import { MutationTree } from "vuex";
import { Carro, CarroState } from "@/store/modules/Carro/types";

type TodoMutationsTree = MutationTree<CarroState>;

export const mutations: TodoMutationsTree = {
    
    carrosLoaded (state: CarroState, carros: Carro[]) {
        state.carros = carros;
    },


    onionCarsMutation (state: CarroState, carrosUnidos: Carro[]) {
        state.carrosUnidos = carrosUnidos;
    },

    updateManualtext (state: CarroState, payload: string) {
        // state.carros.map(t =>{
        //     t.text = t.text + " editado " + payload;
        //     return t;
        // });
        return state.carros;
    },
    carrosError (state: CarroState, payload: string) {
        state.error = true;
        state.errorMessage = payload;
        state.carros = [];
    }
    
};