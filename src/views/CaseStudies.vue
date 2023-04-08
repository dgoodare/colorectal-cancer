<template>
<h1 id="sticky-header">Case Studies</h1>
<p>This is some text that will describe what these case studies are and how they should be used</p>

<Button class="case-study-btn" label="Case 1" @click="showCase1()"/>
<Button class="case-study-btn" label="Case 2"/>

<CaseOne v-model:visible="case1"/>
</template>


<script>
import Button from 'primevue/button';
import CaseOne from '@/components/CaseOne.vue';

export default {
    components: {
        Button,
        CaseOne
    },
    data() {
        return {
            case1: false,
            case2: false
        }
    },
    methods: {
        showCase1(){
            this.case1 = true
        }
    }
}
</script>