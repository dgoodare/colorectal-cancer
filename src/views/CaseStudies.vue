<template>
<h1 id="sticky-header">Case Studies</h1>
<p>These resources includes 3 virtual patients cases highlighting various presentation of colorectal cancer.</p>
<p>You can go through these resources on your own or as a team.</p>
<p>As you go through the resources, you will encounter questions to encourage discussions. You can click on the “show answer” button to reveal the answers. Try to note down your own answer to compare to maximise your learning. </p>
<p>NOTE: All patient cases are made up. Any reference to a real individual is purely coincidental. </p>

<router-link to="/CaseStudyOne"><Button class="case-study-btn" label="Case 1" /> </router-link>
<router-link to="/CaseStudyTwo"><Button class="case-study-btn" label="Case 2" /></router-link>
<router-link to="/CaseStudyThree"><Button class="case-study-btn" label="Case 3" /></router-link>

</template>


<script>
import Button from 'primevue/button';

export default {
    components: {
        Button,
  
    },
}
</script>