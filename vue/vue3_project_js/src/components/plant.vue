<template>
  <v-card class="mx-auto pa-4" max-width="434" rounded="0">
      {{ currentPlant }}
  </v-card>
</template>

<script>
export default {
  data() {
        const trefleStore = useMyStore();
        return {
            currentPlant: trefleStore.currentPlant
        }
    },
}
</script>