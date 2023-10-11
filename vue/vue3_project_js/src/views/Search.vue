<template>
    <h1>Liste des plantes</h1>
    <v-data-table v-if="botanicDatas" :headers="headers" :items="botanicDatas" :search="search">
        <template v-slot:item.actions="{ item }">
            <v-btn size="small"
                   @click="$router.push({ name: 'plant', params: { plantId: item.id } })">Détails
            </v-btn>
        </template>
    </v-data-table>
</template>

<script>
    import {useMyStore} from '@/store/store';
    import {mapState} from 'pinia';
    import axios from 'axios';

    export default {
        data() {
            const trefleStore = useMyStore();

            return {
                search: '',
                headers: [
                    {key: 'id', title: 'Id'},
                    {key: 'common_name', title: 'Nom Commun'},
                    {key: 'scientific_name', title: 'Nom scientifique'},
                    {key: 'year', title: 'Année'},
                    {key: 'bibliography', title: 'Bibliographie'},
                    {key: 'actions', title: 'Actions', sortable: false},
                ],
                setBotanicDatas: trefleStore.setBotanicDatas
            }
        },
        computed: {
            ...mapState(useMyStore, ['botanicDatas'])
        },
        mounted() {
            let _vm = this;

            axios({
                method: 'GET',
                url: `https://trefle.io/api/v1/plants?token=vFofOYMiBLQolXay8HkRs0RfnDYNnxtKs3kfzP4lOC4`,
            }).then(function (response) {
                _vm.setBotanicDatas(response.data.data);
            }).catch(function (error) {
                console.log(error);
            });

        },
    }
</script>