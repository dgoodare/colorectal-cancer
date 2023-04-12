<template>
<Card class="case-study-card" id="introduction">
    <template #title>
        <p class="case-name">Case 1</p>
        <Toolbar class="study-toolbar">
            <template #end>
                <Button class="next" label="Next" @click="showHistory1()"></Button>
            </template>
        </Toolbar>  
        
        <h3 class="case-study-header">Introduction</h3>   
    </template>
    <template #content>
        <p><b>Setting</b></p>
        <p>GP Surgery</p>
        <p><b>Patient Information</b></p>
        <p>John Cook, who is a 55-year-old male, walked into the clinic with a look of exhaustion on his face. </p>
        <p>When asked what he came in for, he replies “I am tired all the time doctor. And I have been noticing some blood in my stool for the past few months.”</p>
        
        
    </template>
    
</Card>

<Card class="case-study-card" id="history" style="display: none">
    <template #title>
        <p class="case-name">Case 1</p>
        <Toolbar class="study-toolbar">
            <template #start>
                <Button class="previous" label="Previous" @click="showIntro1()"></Button>
            </template>
            <template #end>
                <Button class="next" label="Next" @click="showDiagnosis1()"></Button>
            </template>
        </Toolbar>
        
        <h3 class="case-study-header">History and Physical Exam</h3>
    </template>
    <template #content>
        <p>You decide to start by taking a focused history and performing a physical exam.</p>
        <p>What question would you like to ask JC and what are you looking for on physical exam?</p>

        <Button class="showDialog" id="case-study-footer" label="Show Answer" @click="historyDialog()"></Button>
        <Dialog v-model:visible="history" :style="{ width: '90vw' }" @after-hide="showHistory1()">
            <p><b>History of Present Illness</b></p>
            <p>John has been experiencing fatigue and weakness for the past few months. He reports that he gets tired easily and has difficulty keeping up with his daily routine. He has also noticed that he is short of breath when he exerts himself, such as climbing stairs or walking uphill. He denies any chest pain, palpitations, or syncope. He reports that he has been feeling increasingly dizzy and light-headed lately.</p>

            <p><b>Past Medical History</b></p>
            <p>John has a history of hypertension, hyperlipidemia, and GERD. He is currently taking lisinopril, atorvastatin, and omeprazole.</p>

            <p><b>Family History</b></p>
            <p>John's mother had breast cancer at age 62, and his father died of a heart attack at age 72. His sister has a history of colon polyps.</p>

            <p><b>Social History</b></p>
            <p>John is married with three children. He works as an accountant and is a non-smoker. He drinks alcohol occasionally.</p>

            <p><b>Physical Examination</b></p>
            <p>John appears fatigued but is alert and oriented. His vital signs are within normal limits. His conjunctivae are pale, and his tongue is smooth and beefy. There are no palpable lymph nodes, and his abdomen is soft and non-tender. A rectal examination reveals no palpable masses or blood in the stool.</p>
        </Dialog>

        
    </template>
</Card>

<Card class="case-study-card" id="diagnosis" style="display: none">
    <template #title>
        <p class="case-name">Case 1</p>
        <Toolbar class="study-toolbar">
            <template #start>
                <Button class="previous" label="Previous" @click="showHistory1()"></Button>
            </template>
            <template #end>
                <Button class="next" label="Next" @click="showColonoscopy()"></Button>
            </template>
        </Toolbar>
        
        <h3 class="case-study-header">Differential Diagnosis</h3>
    </template>
    <template #content>
        <p>You were suspecting iron deficiency anaemia and ordered a lab test. </p>
        <p><b>Laboratory Tests</b></p>
        <ul>
            <li>Hemoglobin: 8.2 g/dL (normal range: 13.5-17.5 g/dL)</li>
            <li>Mean corpuscular volume (MCV): 65 fL (normal range: 80-100 fL)</li>
            <li>Serum ferritin: 10 ng/mL (normal range: 30-400 ng/mL)</li>
        </ul>

        <p>Before proceeding with the case take a moment to think.</p>
        <p>What is the differential diagnosis for Iron deficiency anaemia for a male of his age?</p>

        <Button class="showDialog" label="Show Answer" @click="diagnosisDialog()"></Button>
        <Dialog v-model:visible="diagnosis" :style="{ width: '90vw' }" @after-hide="showDiagnosis1()">
            <ol>
                <li>Nutritional deficiency: iron, folic acid, and vitamin B12.</li>
                <li>Gastrointestinal bleeding: Ulcers, diverticulitis, inflammatory bowel disease, and colorectal cancer.</li>
                <li>Chronic kidney disease</li>
                <li>Hemolysis</li>
                <li>Thalassemia</li>
            </ol>
        </Dialog>
    </template>
</Card>

<Card class="case-study-card" id="colonoscopy" style="display: none">
    <template #title>
        <p class="case-name">Case 1</p>
        <Toolbar class="study-toolbar">
            <template #start>
                <Button class="previous" label="Previous" @click="showDiagnosis1()"></Button>
            </template>
            <template #end>
                <Button class="next" label="Next" @click="showManagement1()"></Button>
            </template>
        </Toolbar>   
        
        <h3 class="case-study-header">Colonoscopy</h3>
    </template>
    <template #content>
        

        <Button class="showDialog" label="Show Answer" @click="colonoscopyDialog()"></button>
        <Dialog v-model:visible="colonoscopy" :style="{ width: '90vw' }" @after-hide="showColonoscopy()">
            
        </Dialog>

        
        
    </template>
</Card>

<Card class="case-study-card" id="management" style="display: none">
    <template #title>
        <p class="case-name">Case 1</p>
        <Toolbar class="study-toolbar">
            <template #start>
                <Button class="previous" label="Previous" @click="showColonoscopy()"></Button>
            </template>
            <template #end>
                <Button class="next" label="Next" @click="showStaging()"></Button>
            </template>
        </Toolbar>   
        
        <h3 class="case-study-header">Management</h3>
    </template>
    <template #content>
        <p><b>Surgery</b></p>
        <p>A right hemicolectomy is planned for this patient. This involves the dissection of the ascending colon and a part of the transverse colon.</p>
        <p>Which artery supplies the ascending colon and the transverse colon and has to be isolated for this surgery?</p>

        <Button class="showDialog" label="Show Answer" @click="managementDialog()"></button>
        <Dialog v-model:visible="management" :style="{ width: '90vw' }" @after-hide="showManagement1()">
            <ol>
                <li>Nutritional deficiency: iron, folic acid, and vitamin B12.</li>
                <li>Gastrointestinal bleeding: Ulcers, diverticulitis, inflammatory bowel disease, and colorectal cancer.</li>
                <li>Chronic kidney disease</li>
                <li>Hemolysis</li>
                <li>Thalassemia</li>
            </ol>
        </Dialog>

        
        
    </template>
</Card>

<Card class="case-study-card" id="staging" style="display: none">
    <template #title>
        <p class="case-name">Case 1</p>
        <Toolbar class="study-toolbar">
            <template #start>
                <Button class="previous" label="Previous" @click="showManagement1()"></Button>
            </template>
        </Toolbar>   
        
        <h3 class="case-study-header">Staging</h3>
    </template>
    <template #content>
        <img>
        <p>Which stage of colorectal cancer does this indicate?</p>

        <Button class="showDialog" label="Show Answer" @click="stagingDialog()"></button>
        <Dialog v-model:visible="management" :style="{ width: '90vw' }" @after-hide="showStaging()">
            <p>T1: Tumour has invaded the submucosa, but not the muscularis externa.</p>
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
                colonoscopy: false,
                management: false,
                staging: false,
            }
        },
    methods: {
        showIntro1(){
            var intro = document.getElementById("introduction")
            var history = document.getElementById("history")
            var diagnosis = document.getElementById("diagnosis")
            var colonoscopy = document.getElementById("colonoscopy")
            var management = document.getElementById("management")
            var staging = document.getElementById("staging")

            intro.style.display = "block"
            history.style.display = "none"
            diagnosis.style.display = "none"
            colonoscopy.style.display = "none"
            management.style.display = "none"
            staging.style.display = "none"
        },
        showHistory1(){
            var intro = document.getElementById("introduction")
            var history = document.getElementById("history")
            var diagnosis = document.getElementById("diagnosis")
            var colonoscopy = document.getElementById("colonoscopy")
            var management = document.getElementById("management")
            var staging = document.getElementById("staging")

            intro.style.display = "none"
            history.style.display = "block"
            diagnosis.style.display = "none"
            colonoscopy.style.display = "none"
            management.style.display = "none"
            staging.style.display = "none"
        },
        showDiagnosis1(){
            var intro = document.getElementById("introduction")
            var history = document.getElementById("history")
            var diagnosis = document.getElementById("diagnosis")
            var colonoscopy = document.getElementById("colonoscopy")
            var management = document.getElementById("management")
            var staging = document.getElementById("staging")

            intro.style.display = "none"
            history.style.display = "none"
            diagnosis.style.display = "block"
            colonoscopy.style.display = "none"
            management.style.display = "none"
            staging.style.display = "none"
        },
        showColonoscopy(){
            var intro = document.getElementById("introduction")
            var history = document.getElementById("history")
            var diagnosis = document.getElementById("diagnosis")
            var colonoscopy = document.getElementById("colonoscopy")
            var management = document.getElementById("management")
            var staging = document.getElementById("staging")

            intro.style.display = "none"
            history.style.display = "none"
            diagnosis.style.display = "none"
            colonoscopy.style.display = "block"
            management.style.display = "none"
            staging.style.display = "none"
        },
        showManagement1(){
            var intro = document.getElementById("introduction")
            var history = document.getElementById("history")
            var diagnosis = document.getElementById("diagnosis")
            var colonoscopy = document.getElementById("colonoscopy")
            var management = document.getElementById("management")
            var staging = document.getElementById("staging")

            intro.style.display = "none"
            history.style.display = "none"
            diagnosis.style.display = "none"
            colonoscopy.style.display = "none"
            management.style.display = "block"
            staging.style.display = "none"
        },
        showStaging(){
            var intro = document.getElementById("introduction")
            var history = document.getElementById("history")
            var diagnosis = document.getElementById("diagnosis")
            var colonoscopy = document.getElementById("colonoscopy")
            var management = document.getElementById("management")
            var staging = document.getElementById("staging")

            intro.style.display = "none"
            history.style.display = "none"
            diagnosis.style.display = "none"
            colonoscopy.style.display = "none"
            management.style.display = "none"
            staging.style.display = "block"
        },
        historyDialog(){
            this.history = true;
        },
        diagnosisDialog(){
            this.diagnosis = true;
        },
        colonoscopyDialog(){
            this.colonoscopy = true;
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