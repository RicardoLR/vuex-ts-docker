export interface Carro {
    id: number;
    text: string;
    vendido: boolean;
    unidades: string[];
}

export interface CarroState {
    carros: Carro[];
    carrosUnidos: Carro[],
    error: boolean;
    errorMessage: string;
}
