<template>
    <Card>
        <template #title>
            <p class="about-h">{{ name }}</p>    
        </template>
        <template #content>
            <p class="about-p">Role: {{ role }}</p>
            <p class="about-p">Contact: {{ contactInfo }}</p>
        </template>
    </Card>
</template>

<script>
import Card from 'primevue/card';

export default{
    components: {
        Card,
    },
    props: {
        name: String,
        role: String,
        contactInfo: String,
    }
}
</script>