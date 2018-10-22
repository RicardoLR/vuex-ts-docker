import { Component, Prop, Vue } from 'vue-property-decorator';
import {Carro} from "@/store/modules/carros/types";

//@ts-ignore
import Template from "./template.vue";

@Component({
    mixins: [Template]
})
export default class CarrosChild extends Vue {
    
    //public todo!: Carro;

    @Prop({
        type: Object,
        required: true,
    }) carroForm!: Carro;
    
    constructor () {
        super();
        //this.todo = {id:432};
    }
    
    /**
     * Metodo onClick
     */
    async updateProps (data) {
        console.log("Child ", data)

        /**
         * Uso de emit para llamar a evento de padre
         */
        this.$emit('updatePropsInParend', data);

    }
    
   
}