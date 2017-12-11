import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        items : [
            { nome : 'Buffer', qtd : 13 },
            { nome : 'Coordenador', qtd : 0 },
            { nome : 'Fila', qtd : 0 },
            { nome : 'Executando', qtd : 0 },
            { nome : 'Finalizando', qtd : 0 }
        ]
    },
    getters: {
        getItems : state => {
            return state.items;
        },
        getItemByNome: (state) => (nome) => {
            let filtro = state.items.find(item => item.nome === nome);
            return filtro;
        }

    },
    mutations: {
        incrementItem(state, itemArg){
            let itemLocal = state.items.find(item => item.nome === itemArg.nome);
            itemLocal.qtd += itemArg.newQtd;
        },
        setItemValue(state, itemArg){
            let itemLocal = state.items.find(item => item.nome === itemArg.nome);
            itemLocal.qtd = itemArg.qtd;
        }
    },
    actions: {
        
    }
});