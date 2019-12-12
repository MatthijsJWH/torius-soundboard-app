<template>
	<v-container fluid grid-list-lg>
		<v-layout wrap>
			<v-flex xs6>
				<v-card ripple v-on:click="navigate('gents')">
					<v-card-title center>
						<p>Gents</p>
					</v-card-title>
				</v-card>
			</v-flex>
			<v-flex xs6>
				<v-card v-on:click="navigate('ladies')">
					<v-card-title>
						<p>Ladies</p>
					</v-card-title>
				</v-card>
			</v-flex>
			<!-- <v-flex xs4>
				<v-card v-on:click="navigate('about')">
					<v-card-title>
						<p>About</p>
					</v-card-title>
				</v-card>
			</v-flex>
			<v-flex xs4>
				<v-card v-on:click="navigate('support')">
					<v-card-title>
						<p>Support</p>
					</v-card-title>
				</v-card>
			</v-flex> -->
		</v-layout>
	</v-container>
</template>

<script>
export default {
	components: {
	},
	methods: {
		navigate: function (route) {
			this.$router.push(route);
		}
	}
}
</script>
