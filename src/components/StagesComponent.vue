<template>
    <div class="stage-container">
      <p>This page contains 3D models of the different tumor stages. By using the blue buttons, you can scroll through the different stages. For each of the four stages, there is a large model of the sigmoid colon (top) and a small model showing just the tumor (bottom).</p>
      <h3>General colon histology</h3>
    <p>The 4 layers of the colon are:</p>
    <ul class="ul">
      <li>Mucosa</li>
      <li>Submucosa</li>
      <li>Muscularis externa</li>
      <li>Serosa</li>
    </ul>
    <p>Depending on the layer that the tumour penetrates and/or the lymph nodes affected determines the colorectal cancer stage.</p>
        <model-viewer class="model-container"
            id="toggle-model-top"
            v-if="isMounted" 
            :src="srcTop"
            camera-controls>
        </model-viewer>
            
        <Toolbar class="stage-toolbar">
          <template #start>
            <Button class="stage-btn" label="" icon="pi pi-search" @click="showHistology()" />
            
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

        <model-viewer class="model-container"
            id="toggle-model-bottom"
            v-if="isMounted" 
            :src="srcBottom"
            camera-controls>
        </model-viewer>
    </div>

    

    <Dialog v-model:visible="stage1" modal header="Stage 1 Histology" class="histology-dialog">
        <p><strong>TNM Stage:</strong></p>
        <p>T1 or T2, N0, M0</p>
        <p><strong>Are lymph nodes affected?</strong> </p>
        <p>No</p>
        <p><strong>Where is the tumour located?</strong></p>
        <p> Within the submucosa (T1) or embedded within the muscularis externa (T2)</p>
        <p><strong>5-year survival prognosis:</strong></p>
        <p>90%</p>

        <img class="histology-img" src="histology/stage-1/1-1.png" />
        <img class="histology-img" src="histology/stage-1/1-2.png" />
    </Dialog>

    <Dialog v-model:visible="stage2" modal header="Stage 2 Histology" class="histology-dialog">
      <p><strong>TNM Stage:</strong></p>
      <p>T3 or T4, N0, M0</p>
        <p><strong>Are lymph nodes affected?</strong></p>
        <p>No</p>
        <p><strong>Where is the tumour located?</strong></p>
        <p>Either within the connective tissue (T3) or has perforated the serosa and or adjacent organs (T4)</p>
        <p><strong>5-year survival prognosis:</strong></p>
        <p>80%</p>

        <img class="histology-img" src="histology/stage-2/2-1.png">
        <p class="hist-ref">(Fleming et al, 2012)</p>

        <p>Here you can see that the tumour cells are close to the serosal surface but not quite there yet.  This may be considered T4 by some physicians.</p>
    </Dialog>

    <Dialog v-model:visible="stage3" modal header="Stage 3 Histology" class="histology-dialog">
      <p><strong>TNM Stage:</strong></p>
      <p>Any T, N1 or N2, M0</p>
        <p><strong>Are lymph nodes affected?</strong></p>
        <p>Yes</p>
        <p><strong>Where is the tumour located?</strong></p>
        <p>Can be located anywhere within the colon layers with cancer spreading to nearby lymph nodes</p>
        <p><strong>5-year survival prognosis:</strong></p>
        <p>70%</p>

        <img class="histology-img" src="histology/stage-3/3-1.png">
        <img class="histology-img" src="histology/stage-3/3-2.png">

        <p>Here the cancer has spread into the submucosa but not into the muscularis externa. It has also spread to neighbouring lymph nodes.  Thehist-refore, these images would have a TNM staging of T1, N1, M0</p>
    </Dialog>

    <Dialog v-model:visible="stage4" modal header="Stage 4 Histology" class="histology-dialog">
      <p><strong>TNM Stage:</strong></p>
      <p>Any T, Any N, M1</p>
        <p><strong>Are lymph nodes affected?</strong></p>
        <p>Normally but not always</p>
        <p><strong>Where is the tumour located?</strong></p>
        <p>Cancer can be at any size and will have spread to organs like the lungs or liver.  It can spread into distant lymph nodes, but this is not always the case.</p>
        <p><strong>5-year survival prognosis:</strong></p>
        <p>10%</p>

        <img class="histology-img" src="histology/stage-4/4-1.png">
        <p>An example of a sample that is T4.</p>
        <p>In Stage 4 patients, other organs like the liver contain tumour cells.  Below are examples of what liver metastasis might look like.</p>
        <img class="histology-img" src="histology/stage-4/4-2.png">
        <p class="hist-ref">(Oliveira et al 2019)</p>
    </Dialog>
  </template>
  
  <script>
    import Button from 'primevue/button'
    import Toolbar from 'primevue/toolbar';
    import Dialog from 'primevue/dialog';

  export default {
    name: 'StagesComponent',
    components: {
        Button,
        Toolbar,
        Dialog,
    },
    data() {
      return {
        stage1: false,
        stage2: false,
        stage3: false,
        stage4: false,
        histology: 0,
        isMounted: false,
        srcTop: 'models/stages/stage-1-m-v1.glb',
        srcBottom: 'models/stages/stage-1-s-v1.glb',
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

            const modelsMedium = ['models/stages/stage-1-m-v1.glb', 
                                  'models/stages/stage-2-m-v1.glb',
                                  'models/stages/stage-3-m-v1.glb',
                                  'models/stages/stage-4-m-v1.glb',]
            
            const modelsSmall = [ 'models/stages/stage-1-s-v1.glb', 
                                  'models/stages/stage-2-s-v1.glb',
                                  'models/stages/stage-3-s-v1.glb',
                                  'models/stages/stage-4-s-v1.glb',]

            toggleModelTop.setAttribute('src', modelsMedium[stage])
            toggleModelBottom.setAttribute('src', modelsSmall[stage])
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