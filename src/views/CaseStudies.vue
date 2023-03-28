<template>
<h1 id="sticky-header">A Case Study</h1>

<Card id="introduction">
    <template #title>
        <h3>Introduction</h3>
    </template>
    <template #content>
        <p><em>Setting</em></p>
        <p>GP Surgery</p>
        <p><em>Patient Information</em></p>
        <p>John Cook, who is a 55-year-old male, walked into the clinic with a look of exhaustion on his face. </p>
        <p>When asked what he came in for, he replies “I am tired all the time doctor. And I have been noticing some blood in my stool for the past few months.”</p>
        
        <Toolbar class="study-toolbar">
            <template #end>
                <Button class="next" label="Next" @click="showHistory()"></Button>
            </template>
        </Toolbar>     
    </template>
    
</Card>

<Card id="history" style="display: none">
    <template #title>
        <h3>History and Physical Exam</h3>
    </template>
    <template #content>
        <p>You decide to start by taking a focused history and performing a physical exam.</p>
        <p>What question would you like to ask JC and what are you looking for on physical exam?</p>

        <Button class="showDialog" label="Show Info" @click="historyDialog()"></Button>
        <Dialog v-model:visible="history" :style="{ width: '90vw' }" @after-hide="showHistory()">
            <p><em>History of Present Illness:</em></p>
            <p>John has been experiencing fatigue and weakness for the past few months. He reports that he gets tired easily and has difficulty keeping up with his daily routine. He has also noticed that he is short of breath when he exerts himself, such as climbing stairs or walking uphill. He denies any chest pain, palpitations, or syncope. He reports that he has been feeling increasingly dizzy and light-headed lately.</p>

            <p><em>Past Medical History</em></p>
            <p>John has a history of hypertension, hyperlipidemia, and GERD. He is currently taking lisinopril, atorvastatin, and omeprazole.</p>

            <p><em>Family History</em></p>
            <p>John's mother had breast cancer at age 62, and his father died of a heart attack at age 72. His sister has a history of colon polyps.</p>

            <p><em>Social History</em></p>
            <p>John is married with three children. He works as an accountant and is a non-smoker. He drinks alcohol occasionally.</p>

            <p><em>Physical Examination</em></p>
            <p>John appears fatigued but is alert and oriented. His vital signs are within normal limits. His conjunctivae are pale, and his tongue is smooth and beefy. There are no palpable lymph nodes, and his abdomen is soft and non-tender. A rectal examination reveals no palpable masses or blood in the stool.</p>
        </Dialog>

        <Toolbar class="study-toolbar">
            <template #start>
                <Button class="previous" label="Previous" @click="showIntro()"></Button>
            </template>
            <template #end>
                <Button class="next" label="Next" @click="showDiagnosis()"></Button>
            </template>
        </Toolbar>
    </template>
</Card>

<Card id="diagnosis" style="display: none">
    <template #title>
        <h3>Differential Diagnosis</h3>
    </template>
    <template #content>
        <p>You were suspecting iron deficiency anaemia and ordered a lab test. </p>
        <p><em>Laboratory Tests:</em></p>
        <ul>
            <li>Hemoglobin: 8.2 g/dL (normal range: 13.5-17.5 g/dL)</li>
            <li>Mean corpuscular volume (MCV): 65 fL (normal range: 80-100 fL)</li>
            <li>Serum ferritin: 10 ng/mL (normal range: 30-400 ng/mL)</li>
        </ul>

        <p>Before proceeding with the case take a moment to think.</p>
        <p>What is the differential diagnosis for Iron deficiency anaemia for a male of his age?</p>

        <Button class="showDialog" label="Show Info" @click="diagnosisDialog()"></Button>
        <Dialog v-model:visible="diagnosis" :style="{ width: '90vw' }" @after-hide="showDiagnosis()">
            <ol>
                <li>Nutritional deficiency: iron, folic acid, and vitamin B12.</li>
                <li>Gastrointestinal bleeding: Ulcers, diverticulitis, inflammatory bowel disease, and colorectal cancer.</li>
                <li>Chronic kidney disease</li>
                <li>Hemolysis</li>
                <li>Thalassemia</li>
            </ol>
        </Dialog>

        <Toolbar class="study-toolbar">
            <template #start>
                <Button class="previous" label="Previous" @click="showHistory()"></Button>
            </template>
            <template #end>
                <Button class="next" label="Next" @click="showManagement()"></Button>
            </template>
        </Toolbar>
    </template>
</Card>

<Card id="management" style="display: none">
    <template #title>
        <h3>Management</h3>
    </template>
    <template #content>
        <p><em>Surgery</em></p>
        <p>A right hemicolectomy is planned for this patient. This involves the dissection of the ascending colon and a part of the transverse colon.</p>
        <p>Which artery supplies the ascending colon and the transverse colon and has to be isolated for this surgery?</p>

        <Button class="showDialog" label="Show Info" @click="managementDialog()"></Button>
        <Dialog v-model:visible="management" :style="{ width: '90vw' }" @after-hide="showManagement()">
            <ol>
                <li>Nutritional deficiency: iron, folic acid, and vitamin B12.</li>
                <li>Gastrointestinal bleeding: Ulcers, diverticulitis, inflammatory bowel disease, and colorectal cancer.</li>
                <li>Chronic kidney disease</li>
                <li>Hemolysis</li>
                <li>Thalassemia</li>
            </ol>
        </Dialog>

        <Toolbar class="study-toolbar">
            <template #start>
                <Button class="previous" label="Previous" @click="showDiagnosis()"></Button>
            </template>
        </Toolbar>   
        
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
                management: false
            }
        },
    methods: {
        showIntro(){
            var intro = document.getElementById("introduction")
            var history = document.getElementById("history")
            var diagnosis = document.getElementById("diagnosis")
            var management = document.getElementById("management")

            intro.style.display = "block"
            history.style.display = "none"
            diagnosis.style.display = "none"
            management.style.display = "none"
        },
        showHistory(){
            var intro = document.getElementById("introduction")
            var history = document.getElementById("history")
            var diagnosis = document.getElementById("diagnosis")
            var management = document.getElementById("management")

            intro.style.display = "none"
            history.style.display = "block"
            diagnosis.style.display = "none"
            management.style.display = "none"
        },
        showDiagnosis(){
            var intro = document.getElementById("introduction")
            var history = document.getElementById("history")
            var diagnosis = document.getElementById("diagnosis")
            var management = document.getElementById("management")

            intro.style.display = "none"
            history.style.display = "none"
            diagnosis.style.display = "block"
            management.style.display = "none"
        },
        showManagement(){
            var intro = document.getElementById("introduction")
            var history = document.getElementById("history")
            var diagnosis = document.getElementById("diagnosis")
            var management = document.getElementById("management")

            intro.style.display = "none"
            history.style.display = "none"
            diagnosis.style.display = "none"
            management.style.display = "block"
        },
        historyDialog(){
            this.history = true;
        },
        diagnosisDialog(){
            this.diagnosis = true;
        },
        managementDialog(){
            this.management = true;
        }
    }
}
</script>