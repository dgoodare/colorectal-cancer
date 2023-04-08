<template>
    <div class="stage-container">
        <model-viewer
            id="toggle-model-top"
            v-if="isMounted" 
            :src="srcTop"
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

        <model-viewer
            id="toggle-model-bottom"
            v-if="isMounted" 
            :src="srcBottom"
            camera-controls>
        </model-viewer>
    </div>
  </template>
  
  <script>
    import Button from 'primevue/button'
    import Toolbar from 'primevue/toolbar';

  export default {
    name: 'StagesComponent',
    components: {
        Button,
        Toolbar,
    },
    data() {
      return {
        isMounted: false,
        srcTop: 'models/Astronaut.glb',
        srcBottom: 'models/alpha-blend-litmus.glb',
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
            const toggleModelTop = document.querySelector('#toggle-model-top')
            const toggleModelBottom = document.querySelector('#toggle-model-bottom')

            const models = ['models/Astronaut.glb', 
                            'models/alpha-blend-litmus.glb', 
                            'models/BoomBox.glb']

            toggleModelTop.setAttribute('src', models[stage])
            toggleModelBottom.setAttribute('src', models[(stage + 1) % 3])
            console.log(this.model[stage])
        }
    }
  }
  </script>