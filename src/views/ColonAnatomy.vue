<template>
    <title>Anatomy of the Colon</title>
    <h1 id="sticky-header">Anatomy of the Colon</h1>
    <p>The colon (large intestine) is the most distal part of the digestive system. The length of the colon is about 150 cm long. It connects to the ileum of the small intestine and extends through the abdominal cavity and terminates at the anus. The main function of the colon is to absorb water and electrolytes from the digested food it receives from the ileum, forming stool which will be excreted through the anus.  </p>
    <h3>Gross Anatomy</h3>
    <p>The colon is divided into seven parts (proximal to distal): ceacum, ascending colon, transverse colon, descending colon, sigmoid colon, rectum, anal canal.  </p>
    <Accordion>
        <AccordionTab header="Ceacum">
            <p>The ceacum lies retroperitoneally in the right side of the abdomen in the right iliac fosa. It connects to the ileum through an opening called the ileoceacal valve.  </p>
        </AccordionTab>
        <AccordionTab header="Ascending Colon">
            <p>The ascending colon is an upward continuation of the ceacum. When it reaches the lower surface of the liver, it turns medially to form the hepatic flexure and continues as the transverse colon. The ascending colon lies retroperitoneally on the right side of the abdomen. </p>
        </AccordionTab>
        <AccordionTab header="Transverse Colon">
            <p>The transverse colon is located horizontally across the abdomen. It is an intraperitoneal structure enclosed by the transverse mesocolon. The transverse colon extends leftwards towards the inferior surface of the spleen, forming the splenic flexure. It then turns inferiorly to continue as the descending colon.  </p>
        </AccordionTab>
        <AccordionTab header="Descending Colon">
            <p>The descending colon lies retroperitoneally on the left side of the abdomen as a continuation of the transverse colon. It continues downwards to the left iliac fossa and turns medially as the sigmoid colon. </p>
        </AccordionTab>
        <AccordionTab header="Sigmoid Colon ">
            <p>The sigmoid colon is located in the left lower quadrant of the abdomen, extending from the left iliac fossa to the level of the S3 vertebra. The sigmoid colon is attached to the posterior pelvic wall by a mesentery - the sigmoid mesocolon. The course of the sigmoid colon results in its characteristic “S” shape.  </p>
            <p>Similarly, the venous drainage of the colon follows a similar pattern, with each segment draining into a specific vein that ultimately empties into the hepatic portal vein, allowing toxins to be processed by the liver. </p>
        </AccordionTab>
    </Accordion>
    
    <Divider/>

    <h3>Arterial Supply</h3>
    <p>In general, the superior mesenteric artery supplies structures derived from the midgut, while the inferior mesenteric artery supplies structures derived from the hindgut.  </p>
    <p>The ascending colon receives its blood supply from the ileocolic and right colic arteries, both branches of the superior mesenteric artery.  </p>
    <p>The transverse colon, being derived from both midgut and hindgut, is supplied by the right colic and middle colic arteries from the superior mesenteric artery, as well as the left colic artery from the inferior mesenteric artery.</p>
    <p>The descending colon is supplied solely by the left colic artery from the inferior mesenteric artery, and the sigmoid colon is supplied by the sigmoid arteries, also from the inferior mesenteric artery. </p>

    <Divider/>
    
    <h3>Venous Drainage</h3>
    <p>The venous drainage of the colon is similar to the arterial supply: </p>
    <ul>
        <li>Ascending colon - ileocolic and right colic veins, which empty into the superior mesenteric vein. </li>
        <li>Transverse colon - middle colic vein, which empties into the superior mesenteric vein. </li>
        <li>Descending colon - left colic vein, which drains into the inferior mesenteric vein. </li>
        <li>Sigmoid colon - drained by the sigmoid veins into the inferior mesenteric vein. </li>
    </ul>
    <p>The superior mesenteric and inferior mesenteric veins ultimately empty ultimately empties into the hepatic portal vein, allowing toxins to be processed by the liver. </p>    

    <Divider/>

    <h3>Lymphatic Drainage</h3>
    <p>The lymphatic drainage of the colon also follows this pattern, with the ascending and transverse colon draining into the superior mesenteric nodes, and the descending colon and sigmoid colon draining into the inferior mesenteric nodes. Most of the lymph from these nodes passes into the intestinal lymph trunks and ultimately empties into the thoracic duct. </p>
</template>

<script>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Divider from 'primevue/divider';

export default{
    components: {
        Accordion,
        AccordionTab,
        Divider
    }
}
</script>