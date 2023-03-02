<template>
    <div class="stage-container">
        <model-viewer
            id="toggle-model"
            v-if="isMounted" 
            :src="src"
            camera-controls>
        </model-viewer>

        <div class="btn-container">
            <Button class="stage-btn" label="Stage 1" @click="setStage(0)"/>
            <Button class="stage-btn" label="Stage 2" @click="setStage(1)"/>
            <Button class="stage-btn" label="Stage 3" @click="setStage(2)"/>
        </div>
    </div>
  </template>
  
  <script>
    import Button from 'primevue/button'

  export default {
    name: 'StagesComponent',
    components: {
        Button
    },
    data() {
      return {
        isMounted: false,
        src: 'models/Astronaut.glb',
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
    methods: {
        setStage(stage) {
            const toggleModel = document.querySelector('#toggle-model')
            const models = ['models/Astronaut.glb', 'models/alpha-blend-litmus.glb', 'models/BoomBox.glb']
            toggleModel.setAttribute('src', models[stage])
            console.log(this.model[stage])
        }
    }
  }
  </script>