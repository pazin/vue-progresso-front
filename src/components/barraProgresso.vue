<template>
    <div class="row">
        <div class="col-md-3 col-sm-5 col-lg-3">
            <img :src="getImagem()" alt="" height="100px">
        </div>
        <div class="col-md-7 col-sm-5 col-lg-7">
            <h4>{{ dados.nome }} <small>{{ item.qtd }} jobs</small></h4>
            <div class="progress">
                <div class="progress-bar" v-bind:class="getClassEspecifica()" role="progressbar" aria-valuemin="0" aria-valuemax="100" v-bind:style="{width: item.qtd + '%'}">
                    <span class="">{{ item.qtd }}</span>
                </div>
            </div>
        </div>
        <div class="col-md-2 col-sm-2 col-lg 2">
            <button class="btn btn-primary" v-on:click="aumentarValor()">Aumentar</button>
        </div>
    </div>
</template>


<script>

    import {mapGetters} from 'vuex';

    export default {
        props : ['dados'],
        data(){
            return {
                progresso : 40
            }
        },
        methods: {
            getClassEspecifica(){
                if (this.dados.class != '')
                    return 'progress-bar-' + this.dados.class;
                else
                    return '';
            },
            getImagem(){
                if (this.dados.icon)
                    return require('../static/' + this.dados.icon + '.png');
                else 
                    return '';
            },
            aumentarValor(){
                var param = { nome : this.dados.nome, newQtd : 1}
                this.$store.commit('incrementItem', param);
            }
        },
        computed: {
            item(){
                let result = this.$store.getters.getItemByNome(this.dados.nome);
                return result;
            }
        }
    }
</script>

<style scoped>

.vcenter {
    display: inline-block;
    vertical-align: middle;
    float: none;
}

</style>

