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
                <Button label="" icon="pi pi-search" @click="showHistology()" />
                
              </template>
              <template #center>
                <Button class="stage-btn" label="I" @click="setStage(0)"/>
                <Button class="stage-btn" label="II" @click="setStage(1)"/>
                <Button class="stage-btn" label="III" @click="setStage(2)"/>
                <Button class="stage-btn" label="IV" @click="setStage(3)"/>
              </template>
              <template #end>
                
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

    

    <Dialog v-model:visible="stage1" modal header="Stage 1 Histology" :style="{ width: '95vw' }">
        <p>TNM Stage: T1N0M0</p>
        <p>Clinical Stage: 1</p>
        <p>5-year survival prognosis: 95%</p>

        <Image src="histology/stage1-1.png" />
        <Image src="histology/stage1-2.png" />
    </Dialog>
    <Dialog v-model:visible="stage2" modal header="Stage 2 Histology" :style="{ width: '95vw' }">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </Dialog>
    <Dialog v-model:visible="stage3" modal header="Stage 3 Histology" :style="{ width: '95vw' }">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </Dialog>
    <Dialog v-model:visible="stage4" modal header="Stage 4 Histology" :style="{ width: '95vw' }">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </Dialog>
  </template>
  
  <script>
    import Button from 'primevue/button'
    import Toolbar from 'primevue/toolbar';
    import Dialog from 'primevue/dialog';
    import Image from 'primevue/image'

  export default {
    name: 'StagesComponent',
    components: {
        Button,
        Toolbar,
        Dialog,
        Image
    },
    data() {
      return {
        stage1: false,
        stage2: false,
        stage3: false,
        stage: false,
        histology: 0,
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
            this.histology = stage
            const toggleModelTop = document.querySelector('#toggle-model-top')
            const toggleModelBottom = document.querySelector('#toggle-model-bottom')

            const models = ['models/Astronaut.glb', 
                            'models/alpha-blend-litmus.glb', 
                            'models/BoomBox.glb']

            toggleModelTop.setAttribute('src', models[stage % 3])
            toggleModelBottom.setAttribute('src', models[(stage + 1) % 3])
        },
        showHistology(){
          if (this.histology == 0)
          {
            this.stage1 = true
            this.stage2 = false
            this.stage3 = false
            this.stage4 = false
          }
          else if (this.histology == 1)
          {
            this.stage1 = false
            this.stage2 = true
            this.stage3 = false
            this.stage4 = false
          }
          else if (this.histology == 2)
          {
            this.stage1 = false
            this.stage2 = false
            this.stage3 = true
            this.stage4 = false
          }
          else if (this.histology == 3)
          {
            this.stage1 = false
            this.stage2 = false
            this.stage3 = false
            this.stage4 = true
          }
        }
    }
  }
  </script>