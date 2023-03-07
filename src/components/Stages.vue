<template>
    <div class="stage-container">
        <model-viewer
            id="toggle-model"
            v-if="isMounted" 
            :src="src"
            camera-controls>
        </model-viewer>

        <div class="btn-container">
            
            <Toolbar>
              <template #start>
                <Button class="stage-btn" label="Stage 1" @click="setStage(0)"/>
              </template>
              <template #center>
                <Button class="stage-btn" label="Stage 2" @click="setStage(1)"/>
              </template>
              <template #end>
                <Button class="stage-btn" label="Stage 3" @click="setStage(2)"/>
              </template>
            </Toolbar>
        </div>
    </div>
  </template>
  
  <script>
    import Button from 'primevue/button'
    import Toolbar from 'primevue/toolbar';

  export default {
    name: 'StagesComponent',
    components: {
        Button,
        Toolbar
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
            const models = ['https://colorectal-cancer.s3.eu-west-1.amazonaws.com/models/Astronaut.glb', 
                            'https://colorectal-cancer.s3.eu-west-1.amazonaws.com/models/alpha-blend-litmus.glb', 
                            'https://colorectal-cancer.s3.eu-west-1.amazonaws.com/models/BoomBox.glb']
            toggleModel.setAttribute('src', models[stage])
            console.log(this.model[stage])
        }
    }
  }
  </script>