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
				<v-card ripple v-on:click="play(sound.sound)" class="justify-center">
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
				// {
				// 	title: "Anne Lynn",
				// 	sound: "extra_1.mp3" // TBD
				// },
				// {
				// 	title: "Ayla",
				// 	sound: "extra_1.mp3" // TBD
				// },
				{
					title: "Charlotte",
					sound: "charlotte.mp3"
				},
				// {
				// 	title: "Demi",
				// 	sound: "extra_1.mp3" // TBD
				// },
				{
					title: "Ella",
					sound: "ella.mp3"
				},
				// {
				// 	title: "Enri",
				// 	sound: "extra_1.mp3" // TBD
				// },
				// {
				// 	title: "Eva B.",
				// 	sound: "extra_1.mp3" // TBD
				// },
				// {
				// 	title: "Eva P.",
				// 	sound: "extra_1.mp3" // TBD
				// },
				{
					title: "Fleur B. 1",
					sound: "fleur_boel_1.mp3"
				},
				{
					title: "Fleur B. 2",
					sound: "fleur_boel_2.mp3"
				},
				{
					title: "Fleur G.",
					sound: "fleur_gijsen.mp3"
				},
				{
					title: "Imke",
					sound: "imke.mp3"
				},
				// {
				// 	title: "Josephine",
				// 	sound: "extra_1.mp3" // TBD
				// },
				{
					title: "Laura 1",
					sound: "laura_1.mp3"
				},
				{
					title: "Laura 2",
					sound: "laura_2.mp3"
				},
				{
					title: "Maartje 1",
					sound: "maartje_1.mp3"
				},
				{
					title: "Maartje Penalty",
					sound: "maartje_penalty.mp3"
				},
				{
					title: "Maria 1",
					sound: "maria_1.mp3"
				},
				{
					title: "Maria 2",
					sound: "maria_2.mp3"
				},
				// {
				// 	title: "Marjolein",
				// 	sound: "extra_1.mp3" // TBD
				// },
				// {
				// 	title: "Mascha",
				// 	sound: "extra_1.mp3" // TBD
				// },
				{
					title: "Maud",
					sound: "maud.mp3"
				},
				{
					title: "Sofie",
					sound: "sofie.mp3"
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

