<template>
    <h1 class="mb-3">Détails sur la plante</h1>

    <v-card v-if="currentPlant"
            class="mx-auto"
            max-width="500">
        <v-img :src="currentPlant.image_url"
               height="250px"
               cover></v-img>

        <v-card-title>{{ currentPlant.common_name }}</v-card-title>

        <v-card-subtitle>{{ currentPlant.scientific_name }}</v-card-subtitle>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                   @click="show = !show"
            ></v-btn>
        </v-card-actions>

        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>
                <v-card-text>Identification du genre : {{ currentPlant.genus_id }}</v-card-text>
                <v-card-text>Type : {{ currentPlant.rank }}</v-card-text>
                <v-card-text>Famille : {{ currentPlant.family }}</v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script>
    import {useMyStore} from '@/store/store';
    import {mapState} from 'pinia';
    import axios from 'axios';

    export default {
        data() {
            const trefleStore = useMyStore();
            return {
                plantId: this.$route.params.plantId,
                currentPlant: null,
                show: false,
                botanicDatas: trefleStore.botanicDatas,
                setCurrentPlant: trefleStore.setCurrentPlant,
                setBotanicDatas: trefleStore.setBotanicDatas
            }
        },
        computed: {
            ...mapState(useMyStore, ['count'])
        },
        mounted() {
            let _vm = this;
            if (!this.botanicDatas) {
                axios({
                    method: 'GET',
                    url: `https://trefle.io/api/v1/plants?token=vFofOYMiBLQolXay8HkRs0RfnDYNnxtKs3kfzP4lOC4`,
                }).then((response) => {
                    _vm.currentPlant = response.data.data.find(p => p.id == _vm.plantId);
                }).catch((error) => {
                    console.log(error);
                });
            } else {
                this.currentPlant = this.botanicDatas.find(p => p.id == _vm.plantId);
            }
        },
    }
</script>
