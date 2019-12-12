<template>
	<v-container fluid grid-list-lg>
		<v-layout wrap>
			<v-flex>
				<v-card ripple color="yellow" v-on:click="stop()">
					<v-card-text>
						<v-icon color="red" x-large>stop</v-icon>
						<p>Stop</p>
					</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
		<v-layout wrap>
			<v-flex xs4 v-for="(sound, index) in sounds" :key="index">
				<v-card ripple v-on:click="play(sound.sound)">
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
					title: "Bram 1",
					sound: "bram_1.mp3"
				},
				{
					title: "Bram 2",
					sound: "bram_2.mp3"
				},
				// {
				// 	title: "Guus",
				// 	sound: "bell.mp3"
				// },
				// {
				// 	title: "Jelle v. A.",
				// 	sound: "explosion.mp3"
				// },
				{
					title: "Jelle E",
					sound: "jelle_epema.mp3"
				},
				{
					title: "Juan",
					sound: "juan.mp3"
				},
				{
					title: "Leo 1",
					sound: "leo_1.mp3"
				},
				{
					title: "Leo 2",
					sound: "leo_2.mp3"
				},
				{
					title: "Lennard",
					sound: "lennard.mp3"
				},
				// {
				// 	title: "Marijn",
				// 	sound: "punch.mp3"
				// },
				{
					title: "Matthijs 1",
					sound: "matthijs_1.mp3"
				},
				{
					title: "Matthijs 2",
					sound: "matthijs_2.mp3"
				},
				// {
				// 	title: "Max",
				// 	sound: "telephone.mp3"
				// },
				{
					title: "Thyske 1",
					sound: "thyske_1.mp3"
				},
				{
					title: "Thyske 2",
					sound: "thyske_2.mp3"
				},
				{
					title: "Tim",
					sound: "tim.mp3"
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

