<template>
    <h1>Home</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in leo at dui malesuada facilisis aliquam eu purus. Quisque interdum sagittis metus a dapibus. Duis a ex lacus. Vestibulum fermentum at dolor eu ornare. Nam aliquet dolor ut lacus faucibus, id finibus erat scelerisque.</p>
    <ModelView />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in leo at dui malesuada facilisis aliquam eu purus. Quisque interdum sagittis metus a dapibus. Duis a ex lacus. Vestibulum fermentum at dolor eu ornare. Nam aliquet dolor ut lacus faucibus, id finibus erat scelerisque.</p>
</template>

<script>
import ModelView from './ModelView.vue';

export default {
  name: 'HomePage',
  components: {
    ModelView
}
}
</script>