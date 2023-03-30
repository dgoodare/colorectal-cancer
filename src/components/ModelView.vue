<template>
  <model-viewer
    v-if="isMounted" 
    :src="src"
    camera-controls>
  </model-viewer>
</template>

<script>
export default {
  name: 'ModelView',
  data() {
    return {
      isMounted: false,
      src: 'models/healthyColon-lit-v1.glb'
    }
  },
  mounted() {
    this.isMounted = true;
    this.loadComponent();
  },
  computed: {
    loadComponent() {
      return () => import('@google/model-viewer');
    }
  },
}
</script>