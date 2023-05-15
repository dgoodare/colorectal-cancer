<template>
    <h1>Colorectal Cancer</h1>
    <TabView :scrollable="true" class="tab-view">
        <TabPanel class="tab-header" header="Signs and Symptoms">
            <div class="tab-content">
                <p class="tab-p">Some of the signs and symptoms of bowel cancer include:</p>
                <ul class="tab-p">
                    <li>A change in bowel habit (usually more frequent and loose stools) </li>
                    <li>Unexplained weight loss </li>
                    <li>Rectal bleeding </li>
                    <li>Unexplained abdominal pain </li>
                    <li>Iron deficiency anaemia </li>
                    <li>Abdominal or rectal mass one examination  </li>
                </ul>
                <p class="tab-p">NICE have created guidelines for suspected colorectal cancer recognition and referral. </p>
                    <p class="tab-p">You should refer a patient using a suspected cancer referral pathway (for an appointment within 2 weeks), if; </p>
                    <ul class="tab-p">
                        <li>They are aged 40 years and over with unexplained weight loss and abdominal pain, or </li>
                        <li>They are aged 50 years and over with unexplained rectal bleeding, or </li>
                        <li>They are aged 60 years and over with: </li>
                        <ul>
                            <li>Iron-deficiency anaemia, or </li>
                            <li>Changes in their bowel habit, or </li>
                        </ul>
                        <li>Tests show occult blood in their faeces. </li>
                    </ul>
            </div>
        </TabPanel>
        <TabPanel header="Treatment">
            <div class="tab-content">
                <p class="tab-p">Treatment for colorectal cancer is usually surgical. However, the type of surgery performed will depend on where the cancer is (is it in the colon or rectum), the staging of the cancer and whether it has spread to other sites.  </p>
                <p class="tab-p">Chemotherapy is sometimes given alongside a surgical approach. Chemotherapy can be used at different times during the treatment approach. </p>
                <ul class="tab-ul">
                    <li>Adjuvant Chemotherapy refers to chemotherapy given after surgery. This is done to kill off any remaining cancer cells that may have been left behind after surgery or to kill off cells that may have escaped to other parts of the body. This is done to lower the chance of recurrence. </li>
                    <li>Neoadjuvant Chemotherapy is given before surgery. This is done in the hope of shrinking the tumour, thus making it easier to remove.  </li>
                    <li>Chemotherapy can sometimes be given in isolation for advanced colorectal cancers. This is when the cancer has spread to other organs such as the liver. This will not cure the patient's cancer but is used to alleviate symptoms and hopefully prolong life expectancy.  </li>
                </ul>
            </div>
        </TabPanel>
        <TabPanel header ="Screening Programme">
            <div class="tab-content">
                <p class="tab-p">The Scottish Bowel Screening Programme invites men and women aged between 50-74 years to take part in the screening programme every two years. The screening test can be completed at home. Since 2017 the Faecal Immunochemical Test or FIT test has been used as the screening test.  </p>
                <p class="tab-p">The FIT test looks for small samples of blood within the stool that may not be visible to the naked eye. This test is used to identify bowel cancer in its early stages when there are no symptoms and other changes in the bowel such as pre-cancerous growths called “polyps”. </p>
                <p class="tab-p">For every 500 people who take the test only 10 will require further investigations and of this 10 only 1 will have bowel cancer.  </p>
            </div>
        </TabPanel>
        <TabPanel header="Initial Investigations">
            <div class="tab-content">
                <p class="tab-p">The gold standard investigation for suspected colorectal cancer is a colonoscopy which enables the entire large bowel to be visualised and any suspicious lesions or growths to be biopsied.  </p>
            </div>
        </TabPanel>
    </TabView>

    <h2>Colorectal Polyps</h2>
    <p>A polyp is a protrusion above the epithelial surface, it is a tumour, but it can be benign or malignant. Bowel polyps are incredibly common affecting 1 in 4 people above the age of 50. They are often asymptomatic and picked up during the Bowel Screening Programme.</p>
    <img src="polyps.png" style="max-width: 100%;" class="img">
    <h3>Adenomas</h3>
    <p>Most polyps found in the bowel are adenomas. All adenomas are dysplastic, meaning they are an example of abnormal cell growth. They are benign tumours that are not invasive and do not metastasise.</p>
    <h3>Adenoma-carcinoma Sequence</h3>
    <p>However, adenomas can undergo malignant change becoming cancerous. Malignant change is seen when these cells show cellular atypia and are no longer morphologically normal. The only way you can differentiate between an adenoma and adenocarcinoma is by excision and histological assessment to look for these preneoplastic changes.</p>
    <p>It is widely accepted that this adenoma-carcinoma sequence is the process by which most colorectal cancers arise.</p>
    <p>Due to their premalignant potential all adenomas must be removed either endoscopically or surgically.</p>
</template>

<script>
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

export default{
    components: {
        TabView,
        TabPanel
    }
}
</script>

<style lang="css">
.p-tabview-selected{
    background-color: #1C345D;
    color: white;
}
</style>