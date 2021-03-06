import {Component, Vue} from "vue-property-decorator";
import {Action, State} from "vuex-class";

import {Carro} from "@/store/modules/carros/types";
import CarrosChild from '@/components/CarrosChild/component';

import Template from './template.vue';

const namespace: string = "carrosModule";


@Component({
    components: {
        CarrosChild,
    },
    mixins: [Template]
})
export default class Carros extends Vue {

    /** 
     * Estos variables public serian mis estados locales
     */
    public carroForm: Partial<Carro> = { id: 43234 };
    
    /**
     * los getter a diferencia del state puede ser un filtrado y el state el objeto o entidad completo
     */
    @State('carros', {namespace}) carros !: Carro[];
    @State('carrosUnidos', {namespace}) carrosUnidos !: Carro[];
    @State('errorMessage', {namespace}) errorMessage !: string;

    @Action('getAll', {namespace}) getAll !: Function;
    @Action('unirAgenciasCarros', {namespace}) unirAgenciasCarros !: Function;
    
    updatePropsInParend (variable):void {
        this.carroForm.id = variable.id;
        console.log("father", variable, " carroForm", this.carroForm);
    }

    cargar (event): void {

        console.log( "this.carros", this.carros);

        this.getAll().then( (data) => {
            console.log(data);
        })
    }

    unir (event): void {

        let obj: Carro[] = Object.assign([], this.carros);
        obj.map( o => {
            o.text = "richi modify";
        });

        this.unirAgenciasCarros( obj ).then( (data) => {
            console.log(data);
        })
    }

    mounted () {

        console.log(this.carros);
    }


}

