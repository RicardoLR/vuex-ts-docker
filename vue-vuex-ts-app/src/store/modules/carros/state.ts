import {CarroState} from "@/store/modules/carros/types";

/**
 * En types son los modelos (interces) y en state en el estado inicial como en redux
 */
export const state: CarroState = {
    carros: [],
    carrosUnidos: [],
    error: false,
    errorMessage: ''
};