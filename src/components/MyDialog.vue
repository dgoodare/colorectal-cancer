<template>
<Dialog header="Header" v-model:visible="display" position="bottom" >
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas tempus pulvinar. Cras ullamcorper tincidunt turpis sit amet dignissim. Aliquam auctor arcu in facilisis malesuada. Vivamus sit amet turpis a velit elementum dignissim eget auctor nisi. Etiam commodo malesuada consequat. In et nunc felis. Pellentesque ut pellentesque diam. Vestibulum ultrices, ipsum ac auctor varius, mi mauris dignissim felis, sed egestas velit arcu vel arcu. Donec eget diam ut enim mattis sagittis. Nam tristique pretium lacinia. Mauris volutpat risus at urna ornare, et consectetur ipsum varius. Pellentesque id tempor nisi, ac dapibus turpis. Sed ac erat id lorem efficitur blandit nec sed nisl. Mauris at augue a massa tincidunt egestas ac quis mi. Integer vel pulvinar orci, lobortis porttitor justo.</p>
    <p>Aenean odio nulla, placerat ac lorem et, dictum dictum leo. Aliquam vitae pretium elit. Donec nec vulputate enim, sit amet mattis urna. Duis eleifend ligula pulvinar justo facilisis, vel tempus metus pretium. Morbi fermentum tincidunt dolor at porttitor. Ut dapibus ex metus, sed feugiat diam blandit efficitur. Nunc elementum commodo urna, et dignissim nisi tincidunt ut. Donec ultricies ultrices lobortis. Quisque sodales mollis scelerisque. Vivamus ultricies odio nec massa mollis, in vehicula ante mollis. Vestibulum dignissim aliquet dui ac sollicitudin. Proin quis arcu luctus, sagittis augue in, laoreet dolor.</p>
    <p>Phasellus et enim magna. Quisque non orci eros. Sed maximus lobortis dolor, non scelerisque felis. Proin eget felis sit amet orci sagittis cursus. Nulla vel eros pellentesque, placerat purus at, gravida arcu. In commodo, nibh sit amet vehicula porttitor, felis ligula congue purus, ut cursus mi odio a diam. Sed dictum, erat a vulputate pretium, arcu nulla sagittis sapien, ac placerat lacus lacus eget neque. Quisque molestie id ligula eget ullamcorper. Cras condimentum dolor tortor, vel gravida sem vulputate quis. Curabitur quis vulputate urna, tempor luctus sem. Aliquam egestas nibh eget odio porttitor dictum. Integer interdum, lorem sit amet venenatis congue, nisi massa vulputate nunc, eu vehicula felis eros id risus.</p>
    <p>Vivamus maximus erat erat. Phasellus vitae sapien non eros molestie rhoncus non et sem. Nam laoreet egestas nisi vitae condimentum. Proin blandit ornare eros, at placerat erat. Sed ultrices luctus ex, sit amet congue orci pulvinar vel. Aenean vestibulum sed mauris ac volutpat. Mauris aliquet nec eros eget vestibulum. Ut semper ex eros, non finibus lacus convallis in. Nunc rhoncus turpis nibh, non pulvinar nisi euismod at. In eleifend risus odio, eget bibendum mi suscipit eu. Phasellus nec felis elementum est varius dictum. Praesent finibus turpis at finibus mollis. Praesent et porttitor nisl, et molestie sapien. Curabitur vel venenatis leo, finibus facilisis nisi. Cras sit amet diam lacus.</p>
    <p>Nunc quis diam at orci accumsan eleifend. Suspendisse augue velit, tempus vel ante imperdiet, facilisis ultrices tellus. Suspendisse efficitur diam quam, consectetur porta lacus gravida lobortis. Vivamus rhoncus, nibh nec luctus elementum, nunc tortor ultrices ex, rutrum laoreet dui tellus et nunc. Vestibulum volutpat nibh at fermentum luctus. Vivamus in laoreet elit. Aenean tempus libero nec sollicitudin vulputate. Sed sit amet eleifend diam, eget rutrum orci. Aenean ac augue ut felis scelerisque laoreet. Suspendisse in arcu sagittis, rhoncus elit sed, porttitor diam. Sed cursus lectus hendrerit, fermentum enim id, convallis lacus. Morbi imperdiet tortor interdum sodales vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem nulla, hendrerit ut venenatis sit amet, vulputate ultrices quam.</p>
</Dialog>
<Button class="toolbar-btn" label={{ text }} @click="toggleDialog"/>
</template>

<script>
	import Button from 'primevue/button'
	import Dialog from 'primevue/dialog'
	//import StaticContent from './StaticContent.vue'

	export default {
		name: 'MyDialog',
		components: {
			Button,
			Dialog,
			//StaticContent
		},
		data() {
			return {
				display: false
			}
		},
		methods: {
			toggleDialog() {
				this.display = true;
			}
		},
		props: {
			text: String
		}
	}
</script>