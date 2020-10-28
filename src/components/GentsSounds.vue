<template>
	<v-container fluid grid-list-lg>

		<v-tooltip left>
			<template v-slot:activator="{ on }">
				<v-btn 
					color="yellow" v-on="on" @click="stop"
					ripple fixed dark bottom right large fab
				>
					<v-icon color="red" x-large>stop</v-icon>
				</v-btn>
			</template>
			<span>Stop current song</span>
		</v-tooltip>

		<v-layout wrap>
			<v-flex xs4 v-for="(sound, index) in sounds" :key="index">
				<v-card ripple @click="play(sound.sound)">
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
					sound: "bram_1.2.mp3"
				},
				{
					title: "Bram 2",
					sound: "bram_2.2.mp3"
				},
				// {
				// 	title: "Guus",
				// 	sound: "bell.mp3"
				// },
				{
					title: "Jelle v. A. 1",
					sound: "jelle_van_alphen_1.mp3"
				},
				{
					title: "Jelle v. A. 2",
					sound: "jelle_van_alphen_2.mp3"
				},
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
				{
					title: "Max 1",
					sound: "max_1.mp3"
				},
				{
					title: "Max 2",
					sound: "max_2.mp3"
				},
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
					title: "Tomas",
					sound: "tomas.mp3"
				},
				{
					title: "Wout 1",
					sound: "wout_1.mp3"
				},
				{
					title: "Wout 2",
					sound: "wout_2.mp3"
				},
				{
					title: "Extra 1",
					sound: "extra_1.mp3"
				},
				{
					title: "Extra 2",
					sound: "extra_2.mp3"
				},
				{
					title: "Extra 3",
					sound: "extra_3.mp3"
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

