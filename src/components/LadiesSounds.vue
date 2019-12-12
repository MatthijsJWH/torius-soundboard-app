<template>
	<v-container fluid grid-list-lg>
		<v-layout wrap>
			<v-flex>
				<v-card v-on:click="stop()" color="yellow">
					<v-card-text>
						<v-icon color="red" x-large>stop</v-icon>
						<p>Stop</p>
					</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
		<v-layout wrap>
			<v-flex xs4 v-for="(sound, index) in sounds" :key="index">
				<v-card v-on:click="play(sound.sound)" class="justify-center">
					<v-card-text>
						<v-icon color="blue" x-large>play_arrow</v-icon>
						<p>{{ sound.title }}</p>
					</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	name: 'Sounds',
	data () {
		return {
			current: new Audio(),
			sounds: [
				{
					title: "Charlotte",
					sound: "charlotte.mp3"
				},
				{
					title: "Ella",
					sound: "ella.mp3"
				},
				{
					title: "Laura 1",
					sound: "laura_1.mp3"
				},
				{
					title: "Laura 2",
					sound: "laura_2.mp3"
				},
				{
					title: "Maud",
					sound: "maud.mp3"
				},
				{
					title: "Sofie",
					sound: "sofie.mp3"
				},
				{
					title: "Penalty Wissel",
					sound: "penalty_sub.mp3"
				},
				{
					title: "Penalty Voorbereiding",
					sound: "pre_penalty.mp3"
				}
			]
		}
	},
	methods: {
		play: function (name) {
			let audio = new Audio(require('@/assets/sounds/' + name));
			this.current.pause();
			this.current = audio;
			audio.play();
		},
		stop: function () {
			this.current.pause();
		}
	}
}
</script>

