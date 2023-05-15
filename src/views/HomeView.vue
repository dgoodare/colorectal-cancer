<template>
    <title>Home</title>
    <h1>
        Home
    </h1>
    <ModelView class="model-container" />  
    <p>
        Colorectal cancer is defined as cancer of the colon, rectum, or bowel. It is the 4th most common cancer in the UK. Over the years survival rates have improved with a current 5-year survival rate of 60%. 
    </p>
    <p>
        There are various risk factors which can impact the likelihood of colorectal cancer development. However, two of the most important risk factors include increasing age; more than 40% of bowel cancers cases are diagnosed in those aged 75 years and obesity; 11% of bowel cancer cases in the UK are linked to obesity.  
    </p>     
</template>

<script>
import ModelView from '@/components/ModelView.vue';

export default {
    components: {
        ModelView,
    }
}
</script>