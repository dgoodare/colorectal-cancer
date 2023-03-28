<template>
    <title>Home</title>
    <h1 id="sticky-header">Home</h1>
    <p>
        Colorectal cancer is defined as cancer of the colon, rectum, or bowel. It is the 4th most common cancer in the UK. Over the years survival rates have improved with a current 5-year survival rate of 60%. There are various risk factors which can impact the likelihood of colorectal cancer development. However, two of the most important risk factors include increasing age; more than 40% of bowel cancers cases are diagnosed in those aged 75 years and obesity; 11% of bowel cancer cases in the UK are linked to obesity.  
    </p>
    <ModelView />
    <TabView :scrollable="true">
        <TabPanel class="tab-header" header="Signs and Symptoms">
            <p>Some of the signs and symptoms of bowel cancer include:</p>
            <ul>
                <li>A change in bowel habit (usually more frequent and loose stools) </li>
                <li>Unexplained weight loss </li>
                <li>Rectal bleeding </li>
                <li>Unexplained abdominal pain </li>
                <li>Iron deficiency anaemia </li>
                <li>Abdominal or rectal mass one examination  </li>
            </ul>
            <p>NICE have created guidelines for suspected colorectal cancer recognition and referral. </p>
            <template #content>
                <p>You should refer a patient using a suspected cancer referral pathway (for an appointment within 2 weeks), if; </p>
                <ul>
                    <li>They are aged 40 years and over with unexplained weight loss and abdominal pain, or </li>
                    <li>They are aged 50 years and over with unexplained rectal bleeding, or </li>
                    <li>They are aged 60 years and over with: </li>
                    <ul>
                        <li>Iron-deficiency anaemia, or </li>
                        <li>Changes in their bowel habit, or </li>
                    </ul>
                    <li>Tests show occult blood in their faeces. </li>
                </ul>
            </template>
        </TabPanel>
        <TabPanel header="Treatment">
            <p>Treatment for colorectal cancer is usually surgical. However, the type of surgery performed will depend on where the cancer is (is it in the colon or rectum), the staging of the cancer and whether it has spread to other sites.  </p>
            <p>Chemotherapy is sometimes given alongside a surgical approach. Chemotherapy can be used at different times during the treatment approach. </p>
            <ul>
                <li>Adjuvant Chemotherapy refers to chemotherapy given after surgery. This is done to kill off any remaining cancer cells that may have been left behind after surgery or to kill off cells that may have escaped to other parts of the body. This is done to lower the chance of recurrence. </li>
                <li>Neoadjuvant Chemotherapy is given before surgery. This is done in the hope of shrinking the tumour, thus making it easier to remove.  </li>
                <li>Chemotherapy can sometimes be given in isolation for advanced colorectal cancers. This is when the cancer has spread to other organs such as the liver. This will not cure the patient’s cancer but is used to alleviate symptoms and hopefully prolong life expectancy.  </li>
            </ul>
        </TabPanel>
        <TabPanel header ="Screening Programme">
            <p>The Scottish Bowel Screening Programme invites men and women aged between 50-74 years to take part in the screening programme every two years. The screening test can be completed at home. Since 2017 the Faecal Immunochemical Test or FIT test has been used as the screening test.  </p>
            <p>The FIT test looks for small samples of blood within the stool that may not be visible to the naked eye. This test is used to identify bowel cancer in its early stages when there are no symptoms and other changes in the bowel such as pre-cancerous growths called “polyps”. </p>
            <p>For every 500 people who take the test only 10 will require further investigations and of this 10 only 1 will have bowel cancer.  </p>
        </TabPanel>
    </TabView>

    <Divider />
    
    <h3>Initial investigations</h3>
    <p>The gold standard investigation for suspected colorectal cancer is a colonoscopy which enables the entire large bowel to be visualised and any suspicious lesions or growths to be biopsied.  </p>
</template>

<script>
import ModelView from '@/components/ModelView.vue';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Divider from 'primevue/divider';

export default {
    components: {
        ModelView,
        TabView,
        TabPanel,
        Divider
    }
}
</script>