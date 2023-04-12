<template>
    <Card class="case-study-card" id="introduction">
        
        <template #title>
            <p class="case-name">Case 2</p> 
            <Toolbar class="study-toolbar">
                <template #end>
                    <Button class="next" label="Next" @click="showconsultation()"></Button>
                </template>
            </Toolbar>
             
            <h3 class="case-study-header">Introduction</h3>   
        </template>
        <template #content>
            <p><b>Patient Information</b></p>
            <p>Ross White, who is a 64-year-old female, received an invitation from the bowel cancer screening programme to take part in screening.</p>
            <p>What do you know about the Scottish Bowel Screening programme?</p>
            
            <Dialog v-model:visible="intro" :style="{ width: '90vw' }" @after-hide="showIntro()">
               <p>The Scottish Bowel Screening Programme invites men and women aged between 50-74 years to take part in the screening programme every two years. The screening test can be completed at home. Since 2017 the Faecal Immunochemical Test or FIT test has been used as the screening test.  </p>
               <p>The FIT test looks for small samples of blood within the stool that may not be visible to the naked eye. This test is used to identify bowel cancer in its early stages when there are no symptoms and other changes in the bowel such as pre-cancerous growths called “polyps”. </p>
               <p>For every 500 people who take the test only 10 will require further investigations and of this 10 only 1 will have bowel cancer.  </p>
            </Dialog>
        </template>
        
    </Card>
    
    <Card class="case-study-card" id="consultation" style="display: none">
        <template #title>
            <p class="case-name">Case 2</p>
            <Toolbar class="study-toolbar">
                <template #start>
                    <Button class="previous" label="Previous" @click="showIntro()"></Button>
                </template>
                <template #end>
                    <Button class="next" label="Next" @click="showcolonoscopy()"></Button>
                </template>
            </Toolbar>
            
            <h3 class="case-study-header">Consultation</h3>
        </template>
        <template #content>
            <p>The qFIT that was done came back to be 150 µg Hb/g. This indicates that there was blood found in the stool. Ross was invited to the clinic for discussion for further investigation.</p>
            <p>Ross was enquired about whether she has symptoms of colorectal cancer. What are the symptoms of colorectal cancer?</p>
    
            <Button class="showDialog" id="case-study-footer" label="Show Answer" @click="consultationDialog()"></Button>
            <Dialog v-model:visible="consultation" :style="{ width: '90vw' }" @after-hide="showconsultation()">
               <p>Some of the signs and symptoms of bowel cancer include:</p>
               <ul>
                <li>A change in bowel habit (usually more frequent and loose stools)</li>
                <li>Unexplained weight loss</li>
                <li>Rectal bleeding</li>
                <li>Unexplained abdominal pain</li>
                <li>Iron deficiency anaemia</li>
                <li>Abdominal or rectal mass one examination</li>
               </ul>
            </Dialog>
    
            
        </template>
    </Card>
    
    <Card class="case-study-card" id="colonoscopy" style="display: none">
        <template #title>
            <p class="case-name">Case 2</p>
            <Toolbar class="study-toolbar">
                <template #start>
                    <Button class="previous" label="Previous" @click="showconsultation()"></Button>
                </template>
                <template #end>
                    <Button class="next" label="Next" @click="showManagement()"></Button>
                </template>
            </Toolbar>
        
            <h3 class="case-study-header">Colonoscopy</h3>
        </template>
        <template #content>
            <p>Colonoscopy found 2 abnormalities in the patient's colon.</p>
            <p>Lesion 1: Pedunculated polyp found in the descending colon. Successfully removed with the stalk. Pathology shows benign adenoma.</p>
            <p>Lesion 2: Suspicious lesion found in the rectum, about 15 cm from the anal verge. Biopsy taken which shows neoplastic features.</p>
            <p>What is a polyp?</p>
    
            <Button class="showDialog" label="Show Answer" @click="colonoscopyDialog()"></Button>
            <Dialog v-model:visible="colonoscopy" :style="{ width: '90vw' }" @after-hide="showcolonoscopy()">
                <p>A polyp is a protrusion above the epithelial surface, it is a tumour, but it can be benign or malignant. Bowel polyps are incredibly common affecting 1 in 4 people above the age of 50. They are often asymptomatic and picked up during the Bowel Screening Programme.</p>
                <p>It is widely accepted that this adenoma-carcinoma sequence is the process by which most colorectal cancers arise.</p>
                <p>Due to their premalignant potential all adenomas must be removed either endoscopically or surgically.</p>
            </Dialog>
        </template>
    </Card>
    
    <Card class="case-study-card" id="management" style="display: none">
        <template #title>
            <p class="case-name">Case 2</p> 
            <Toolbar class="study-toolbar">
                <template #start>
                    <Button class="previous" label="Previous" @click="showcolonoscopy()"></Button>
                </template>
                <template #end>
                    <Button class="next" label="Next" @click="showStaging()"></Button>
                </template>
            </Toolbar> 
             
            <h3 class="case-study-header">Management</h3>
        </template>
        <template #content>
            <p><b>Surgery</b></p>
            <p>A high anterior resection is planned for this patient. This involves the dissection of the rectum and the sigmoid colon.</p>
            <p>Which artery supplies the sigmoid colon and has to be isolated for this surgery?</p>
    
            <Button class="showDialog" label="Show Answer" @click="managementDialog()"></Button>
            <Dialog v-model:visible="management" :style="{ width: '90vw' }" @after-hide="showManagement()">
                <p>The sigmoid colon is supplied by the sigmoid arteries, which derives from the inferior mesenteric artery.</p>
                <p>The rectum has blood supply from superior and inferior rectal arteries. Superior rectal artery is a branch of the inferior mesenteric artery while inferior rectal artery is a branch of the internal iliac artery.</p>
            </Dialog>
    
            
            
        </template>
    </Card>

    <Card class="case-study-card" id="staging" style="display: none">
        <template #title>
            <p class="case-name">Case 2</p> 
            <Toolbar class="study-toolbar">
                <template #start>
                    <Button class="previous" label="Previous" @click="showManagement()"></Button>
                </template>
            </Toolbar> 
             
            <h3 class="case-study-header">Staging</h3>
        </template>
        <template #content>
            <img class="case-study-img" src="case-studies/case-2-staging.jpg">
            <p>Which stage of colorectal cancer does this indicate?</p>
    
            <Button class="showDialog" label="Show Answer" @click="stagingDialog()"></Button>
            <Dialog v-model:visible="staging" :style="{ width: '90vw' }" @after-hide="showStaging()">
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
                    intro: false,
                    consultation: false,
                    colonoscopy: false,
                    management: false,
                    staging: false
                }
            },
        methods: {
            showIntro(){
                var intro = document.getElementById("introduction")
                var consultation = document.getElementById("consultation")
                var colonoscopy = document.getElementById("colonoscopy")
                var management = document.getElementById("management")
                var staging = document.getElementById("staging")
    
                intro.style.display = "block"
                consultation.style.display = "none"
                colonoscopy.style.display = "none"
                management.style.display = "none"
                staging.style.display = "none"
            },
            showconsultation(){
                var intro = document.getElementById("introduction")
                var consultation = document.getElementById("consultation")
                var colonoscopy = document.getElementById("colonoscopy")
                var management = document.getElementById("management")
                var staging = document.getElementById("staging")
    
                intro.style.display = "none"
                consultation.style.display = "block"
                colonoscopy.style.display = "none"
                management.style.display = "none"
                staging.style.display = "none"
            },
            showcolonoscopy(){
                var intro = document.getElementById("introduction")
                var consultation = document.getElementById("consultation")
                var colonoscopy = document.getElementById("colonoscopy")
                var management = document.getElementById("management")
                var staging = document.getElementById("staging")
    
                intro.style.display = "none"
                consultation.style.display = "none"
                colonoscopy.style.display = "block"
                management.style.display = "none"
                staging.style.display = "none"
            },
            showManagement(){
                var intro = document.getElementById("introduction")
                var consultation = document.getElementById("consultation")
                var colonoscopy = document.getElementById("colonoscopy")
                var management = document.getElementById("management")
                var staging = document.getElementById("staging")
    
                intro.style.display = "none"
                consultation.style.display = "none"
                colonoscopy.style.display = "none"
                management.style.display = "block"
                staging.style.display = "none"
            },
            showStaging(){
                var intro = document.getElementById("introduction")
                var consultation = document.getElementById("consultation")
                var colonoscopy = document.getElementById("colonoscopy")
                var management = document.getElementById("management")
                var staging = document.getElementById("staging")
    
                intro.style.display = "none"
                consultation.style.display = "none"
                colonoscopy.style.display = "none"
                management.style.display = "none"
                staging.style.display = "block"
            },
            introDialog(){
                this.intro = true;
            },
            consultationDialog(){
                this.consultation = true;
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