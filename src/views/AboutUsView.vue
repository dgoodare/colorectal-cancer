<template>
    <h1>About Us</h1>
    <div class="about-section">
        <AboutCard class="about-card" name="Dr Qabirul Abdullah" role="Project Supervisor" contactInfo="q.k.s.z.abdullah@dundee.ac.uk"/>
        <AboutCard class="about-card" name="Georgia Davidson" role="Human Anatomy Student" contactInfo="2441850@dundee.ac.uk"/>
        <AboutCard class="about-card" name="Dwi Delson" role="Medicine Student" contactInfo="2433036@dundee.ac.uk"/>
        <AboutCard class="about-card" name="Duncan Goodare" role="Computing Science Student" contactInfo="duncangoodare@gmail.com"/>
        <AboutCard class="about-card" name="Moya McDevitt" role="Medicine Student" contactInfo="m.j.mcdevitt@dundee.ac.uk"/>
        <AboutCard class="about-card" name="Tobenna Ogwuda" role="Medicine Student" contactInfo="160001776@dundee.ac.uk"/>
        <AboutCard class="about-card" name="Juliette Van Limbeek" role="Medical Art Student" contactInfo="https://www.linkedin.com/in/juliette-van-limbeek-530a0a1b4"/>
    </div>
</template>

<script>
import AboutCard from '@/components/AboutCard.vue';

export default {
    components: {
        AboutCard,
    },
}
</script>