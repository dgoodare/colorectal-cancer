<template>
    <Card class="case-study-card" id="introduction">
        <template #title>
            <p class="case-name">Case 3</p>
            <Toolbar class="study-toolbar">
                <template #end>
                    <Button class="next" label="Next" @click="showHistory()"></Button>
                </template>
            </Toolbar>  
            
            <h3 class="case-study-header">Introduction</h3>   
        </template>
        <template #content>
            <p class="case-text"><b>Setting</b></p>
            <p class="case-text">Emergency department</p>
            <p class="case-text"><b>Patient Information</b></p>
            <p class="case-text">Lynn Clooney, who is a 40-year-old male, was brought into the hospital emergency department complaining of severe abdominal pain and distention.</p>
        </template>
        
    </Card>
    
    <Card class="case-study-card" id="history" style="display: none">
        <template #title>
            <p class="case-name">Case 3</p>
            <Toolbar class="study-toolbar">
                <template #start>
                    <Button class="previous" label="Previous" @click="showIntro()"></Button>
                </template>
                <template #end>
                    <Button class="next" label="Next" @click="showDiagnosis()"></Button>
                </template>
            </Toolbar>
            
            <h3 class="case-study-header">History and Physical Exam</h3>
        </template>
        <template #content>
            <p class="case-text">You decide to start by taking a focused history and performing a physical exam.</p>
            <p class="case-text">What question would you like to ask LC and what are you looking for on physical exam?</p>
    
            <Button class="showDialog" id="case-study-footer" label="Show Answer" @click="historyDialog()"></Button>
            <Dialog v-model:visible="history" class="case-study-dialog" @after-hide="showHistory()">
                <p class="case-text"><b>History of Present Illness:</b></p>
                <p class="case-text">Lynn presented with a 4 days history of abdominal pain and abdominal distention. The pain started gradually over the lower left quadrant of her abdomen and radiated throughout the abdomen. It is colicky in nature. She also has distention of abdomen at the same time which has been progressively worse. When asked, she mentioned that she has not open her bowel for the past 2 weeks. She noted that she has been self-medicating with laxatives over-the-counter for the past 6 months due to constipation. She has not passed any gas in the past 2 days. He vomited once on the ambulance. The paramedic noted that the content was dark green in colour. </p>
    
                <p class="case-text"><b>Past Medical History</b></p>
                <p class="case-text">Lynn does not have any significant medical history.</p>
    
                <p class="case-text"><b>Family History</b></p>
                <p class="case-text">Lynn has no significant family history of note.</p>
    
                <p class="case-text"><b>Social History</b></p>
                <p class="case-text">Lynn started smoking since the age of 15. He smokes about 1-2 pack in a day.</p>
    
                <p class="case-text"><b>Physical Examination</b></p>
                <p class="case-text">Lynn appears to be in severe pain. His abdomen is grossly distended. On palpation, he is tender all throughout his abdomen. A mass is felt on the left lower quadrant of his abdomen.</p>
            </Dialog>
        </template>
    </Card>
    
    <Card class="case-study-card" id="diagnosis" style="display: none">
        <template #title>
            <p class="case-name">Case 3</p>
            <Toolbar class="study-toolbar">
                <template #start>
                    <Button class="previous" label="Previous" @click="showHistory()"></Button>
                </template>
                <template #end>
                    <Button class="next" label="Next" @click="showInvestigation()"></Button>
                </template>
            </Toolbar>
            
            <h3 class="case-study-header">Differential Diagnosis</h3>
        </template>
        <template #content>
            <p class="case-text">After reviewing Lynn, the consultant in the emergency department suspected that he might have a large bowel obstruction.</p>
            <p class="case-text">What could possibly cause large bowel obstruction?</p>
            <Button class="showDialog" label="Show Answer" @click="diagnosisDialog()"></Button>
            <Dialog v-model:visible="diagnosis" class="case-study-dialog" @after-hide="showDiagnosis()">
                <ol>
                    <li>malignancy
                        <ul class="ul">
                            <li>colorectal carcinoma (most common, 50-60%)</li>
                            <li>pelvic tumors; direct spread or metastatic disease</li>
                        </ul>
                    </li>
                    <li>colonic diverticulitis</li>
                    <li>volvulus</li>
                    <li>ischemic stricture</li>
                    <li>fecal impaction/fecaloma</li>
                    <li>hernias (uncommon)</li>
                    <li>intussusception</li>
                </ol>
            </Dialog>
        </template>
    </Card>

    <Card class="case-study-card" id="investigation" style="display: none">
        <template #title>
            <p class="case-name">Case 3</p>
            <Toolbar class="study-toolbar">
                <template #start>
                    <Button class="previous" label="Previous" @click="showDiagnosis()"></Button>
                </template>
                <template #end>
                    <Button class="next" label="Next" @click="showImaging()"></Button>
                </template>
            </Toolbar>
            
            <h3 class="case-study-header">Investigation</h3>
        </template>
        <template #content>
            <p class="case-text">What imaging investigation would you order at this point?</p>


            <Button class="showDialog" label="Show Answer" @click="investigationDialog()"></Button>
            <Dialog v-model:visible="investigation" class="case-study-dialog" @after-hide="showInvestigation()">
                <ol>
                    <li>Abdominal x-ray</li>
                    <li>CT Scan</li>
                </ol>
            </Dialog>
        </template>
    </Card>

    <Card class="case-study-card" id="imaging" style="display: none">
        <template #title>
            <p class="case-name">Case 3</p>
            <Toolbar class="study-toolbar">
                <template #start>
                    <Button class="previous" label="Previous" @click="showInvestigation()"></Button>
                </template>
                <template #end>
                    <Button class="next" label="Next" @click="showManagement()"></Button>
                </template>
            </Toolbar>   
            
            <h3 class="case-study-header">Imaging</h3>
        </template>
        <template #content>
            <p class="case-text"><b>Abdominal X-ray</b></p>
            <p class="case-text">The large bowel is gas filled and distended down to the level of the distal descending colon-sigmoid. Consistent with large bowel obstruction.</p>
            <img class="case-study-img" src="case-studies/case-3-xray.jpg">
            
            <p class="case-text"><b>CT Scan</b></p>
            <p class="case-text">Circumferential wall thickening (15 mm) of the rectosigmoid junction for a length of about 5 cm, with near complete obstruction of the lumen and gross proximal large bowel dilatationn.</p>
            <img class="case-study-img" src="case-studies/case-3-ct.jpg">
        </template>
    </Card>
    
    <Card class="case-study-card" id="management" style="display: none">
        <template #title>
            <p class="case-name">Case 3</p>
            <Toolbar class="study-toolbar">
                <template #start>
                    <Button class="previous" label="Previous" @click="showImaging()"></Button>
                </template>
                <template #end>
                    <Button class="next" label="Next" @click="showStaging()"></Button>
                </template>
            </Toolbar>   
            
            <h3 class="case-study-header">Management</h3>
        </template>
        <template #content>
            <p class="case-text"><b>Surgery</b></p>
            <p class="case-text">Emergency surgery is planned for Lynn as a treatment of her obstruction.</p>
            <p class="case-text">A Hartmann's procedure was indicated for Lynn. To maximise the amount of lymph node sampling, sigmoid colon and the descending colon were resected.</p>
            <p class="case-text">Which artery supplies the descending colon and the sigmoid colon and has to be isolated for this surgery?</p>
    
            <Button class="showDialog" label="Show Answer" @click="managementDialog()"></Button>
            <Dialog v-model:visible="management" class="case-study-dialog" @after-hide="showManagement()">
               <p class="case-text">The ascending colon receives its blood supply from the ileocolic and right colic arteries, both branches of the superior mesenteric artery.</p>
               <p class="case-text">The transverse colon, being derived from both midgut and hindgut, is supplied by the right colic and middle colic arteries from the superior mesenteric artery, as well as the left colic artery from the inferior mesenteric artery.</p>
            </Dialog>
        </template>
    </Card>

    <Card class="case-study-card" id="staging" style="display: none">
        <template #title>
            <p class="case-name">Case 3</p>
            <Toolbar class="study-toolbar">
                <template #start>
                    <Button class="previous" label="Previous" @click="showManagement()"></Button>
                </template>
            </Toolbar>   
            
            <h3 class="case-study-header">Staging</h3>
        </template>
        <template #content>
            <img class="case-study-img" src="case-studies/case-3-staging1.jpg">
            <img class="case-study-img" src="case-studies/case-3-staging2.jpg">
            <p class="case-text">Which stage of colorectal cancer does this indicate?</p>
            <p class="case-text">You may want use the <router-link to="/stages-of-crc">3D models</router-link> to help answer this question</p>
    
            <Button class="showDialog" label="Show Answer" @click="stagingDialog()"></Button>
            <Dialog v-model:visible="staging" class="case-study-dialog" @after-hide="showStaging()">
               <p class="case-text">Patient has a T4 tumour on the sigmoid colon.</p>
               <p class="case-text">Tumour has directly invaded other organs (i.e. not through metastasis, but as a continuous tumour) or has perforated the serosa of the colon (and thus is now exposed to the peritoneal cavity).</p>
               <p class="case-text">2 of the regional lymph nodes shows presence of cancerous cells. This indicates N1 stage.</p>
            </Dialog>
        </template>
    </Card>
    </template>
    
    <script>
    import Card from 'primevue/card';
    import Button from 'primevue/button';
    import Toolbar from 'primevue/toolbar';
    import Dialog from 'primevue/dialog';
    
    export default {
        components: {
            Card,
            Button,
            Toolbar,
            Dialog
        },
        data() {
                return {
                    history: false,
                    diagnosis: false,
                    investigation: false,
                    //imaging: false,
                    management: false,
                    staging: false
                }
            },
        methods: {
            showIntro(){
                var intro = document.getElementById("introduction")
                var history = document.getElementById("history")
                var diagnosis = document.getElementById("diagnosis")
                var investigation = document.getElementById("investigation")
                var imaging = document.getElementById("imaging")
                var management = document.getElementById("management")
                var staging = document.getElementById("staging")
    
                intro.style.display = "block"
                history.style.display = "none"
                diagnosis.style.display = "none"
                investigation.style.display = "none"
                imaging.style.display = "none"
                management.style.display = "none"
                staging.style.display = "none"
            },
            showHistory(){
                var intro = document.getElementById("introduction")
                var history = document.getElementById("history")
                var diagnosis = document.getElementById("diagnosis")
                var investigation = document.getElementById("investigation")
                var imaging = document.getElementById("imaging")
                var management = document.getElementById("management")
                var staging = document.getElementById("staging")
    
                intro.style.display = "none"
                history.style.display = "block"
                diagnosis.style.display = "none"
                investigation.style.display = "none"
                imaging.style.display = "none"
                management.style.display = "none"
                staging.style.display = "none"
            },
            showDiagnosis(){
                var intro = document.getElementById("introduction")
                var history = document.getElementById("history")
                var diagnosis = document.getElementById("diagnosis")
                var investigation = document.getElementById("investigation")
                var imaging = document.getElementById("imaging")
                var management = document.getElementById("management")
                var staging = document.getElementById("staging")
    
                intro.style.display = "none"
                history.style.display = "none"
                diagnosis.style.display = "block"
                investigation.style.display = "none"
                imaging.style.display = "none"
                management.style.display = "none"
                staging.style.display = "none"
            },
            showInvestigation(){
                var intro = document.getElementById("introduction")
                var history = document.getElementById("history")
                var diagnosis = document.getElementById("diagnosis")
                var investigation = document.getElementById("investigation")
                var imaging = document.getElementById("imaging")
                var management = document.getElementById("management")
                var staging = document.getElementById("staging")
    
                intro.style.display = "none"
                history.style.display = "none"
                diagnosis.style.display = "none"
                investigation.style.display = "block"
                imaging.style.display = "none"
                management.style.display = "none"
                staging.style.display = "none"
            },
            showImaging(){
                var intro = document.getElementById("introduction")
                var history = document.getElementById("history")
                var diagnosis = document.getElementById("diagnosis")
                var investigation = document.getElementById("investigation")
                var imaging = document.getElementById("imaging")
                var management = document.getElementById("management")
                var staging = document.getElementById("staging")
    
                intro.style.display = "none"
                history.style.display = "none"
                diagnosis.style.display = "none"
                investigation.style.display = "none"
                imaging.style.display = "block"
                management.style.display = "none"
                staging.style.display = "none"
            },
            showManagement(){
                var intro = document.getElementById("introduction")
                var history = document.getElementById("history")
                var diagnosis = document.getElementById("diagnosis")
                var investigation = document.getElementById("investigation")
                var imaging = document.getElementById("imaging")
                var management = document.getElementById("management")
                var staging = document.getElementById("staging")
    
                intro.style.display = "none"
                history.style.display = "none"
                diagnosis.style.display = "none"
                investigation.style.display = "none"
                imaging.style.display = "none"
                management.style.display = "block"
                staging.style.display = "none"
            },
            showStaging(){
                var intro = document.getElementById("introduction")
                var history = document.getElementById("history")
                var diagnosis = document.getElementById("diagnosis")
                var investigation = document.getElementById("investigation")
                var imaging = document.getElementById("imaging")
                var management = document.getElementById("management")
                var staging = document.getElementById("staging")
    
                intro.style.display = "none"
                history.style.display = "none"
                diagnosis.style.display = "none"
                investigation.style.display = "none"
                imaging.style.display = "none"
                management.style.display = "none"
                staging.style.display = "block"
            },
            historyDialog(){
                this.history = true;
            },
            diagnosisDialog(){
                this.diagnosis = true;
            },
            investigationDialog(){
                this.investigation = true;
            },
            managementDialog(){
                this.management = true;
            },
            stagingDialog(){
                this.staging = true;
            }
        }
    }
    </script>